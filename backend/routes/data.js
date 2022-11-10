/* Node.js 12 샘플 코드 */
const request = require('request')
const convert = require('xml-js')

var express = require('express')
const { response } = require('../app')
var router = express.Router()

var url =
  'http://openapi.seoul.go.kr:8088/664462474168696e3537506f6d5445/xml/IotVdata005/1/1/'
// const key = '664462474168696e3537506f6d5445'

//추가한 부분
var mysql = require('mysql')

// Connection 객체 생성
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '9808',
  database: 'airdb'
})

// Connect
connection.connect(function (err) {
  if (err) {
    console.error('mysql connection error')
    console.error(err)
    throw err
  } else {
    console.log('airDB connected')
  }
})

router.get('/called', function (req, res) {
  request(
    {
      url: url,
      method: 'GET'
    },
    (error, response, body) => {
      const xmlToJson = convert.xml2json(body)
      // console.log(body)
      const data = JSON.parse(xmlToJson)
      // console.log(xmlToJson)
      res.send(data.elements[0].elements[2].elements)
      console.log(data.elements[0].elements[2].elements)
    }
  )
})

router.post('/update', function (req, res) {
  request(
    {
      url: url,
      method: 'GET'
    },
    (error, response, body) => {
      const xmlToJson = convert.xml2json(body)
      // console.log(body)
      const data = JSON.parse(xmlToJson)
      // console.log(xmlToJson)
      const parsingData = data.elements[0].elements[2].elements

      // console.log(parsingData[4].elements[0].text)

      connection.query(
        'INSERT INTO data (serial,obsdate,temp,hum,finedust,utrafinedust,noise) VALUES ("' +
          parsingData[4].elements[0].text + // 시리얼
          '","' +
          parsingData[5].elements[0].text + // 관측시간
          '","' +
          parsingData[6].elements[0].text + // 온도
          '","' +
          parsingData[7].elements[0].text + // 습도
          '","' +
          parsingData[8].elements[0].text + // 미세먼지
          '","' +
          parsingData[12].elements[0].text + //초미세먼지
          '","' +
          parsingData[9].elements[0].text +
          '")',
        function (err, row2) {
          if (err) throw err
        }
      )
      res.json({
        success: true,
        message: 'data pushed!'
      })
    }
  )
})

module.exports = router
