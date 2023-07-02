const request = require('request')
const convert = require('xml-js')

var express = require('express')
const { response } = require('../app')
var router = express.Router()

var url = 'http://openapi.seoul.go.kr:8088/'
const key = '664462474168696e3537506f6d5445'
const type = 'json'
const service = 'IotVdata005'
const startIndex = 1
const endIndex = 3

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
      url:
        url +
        key +
        '/' +
        type +
        '/' +
        service +
        '/' +
        startIndex +
        '/' +
        endIndex +
        '/',
      method: 'GET'
    },
    (error, response, body) => {
      // const xmlToJson = convert.xml2json(body)
      // console.log(body)
      const data = JSON.parse(body)
      console.log(data)

      res.send(data.IotVdata005['row'])
      // console.log(data.IotVdata005['row'])
      console.log(data.IotVdata005['row'][0].COLUMN1)
    }
  )
})

router.post('/update', function (req, res) {
  const startIndex = req.body.start
  const endIndex = req.body.end
  console.log(startIndex, endIndex)

  request(
    {
      url:
        url +
        key +
        '/' +
        type +
        '/' +
        service +
        '/' +
        startIndex +
        '/' +
        endIndex +
        '/',
      method: 'GET'
    },
    (error, response, body) => {
      const data = JSON.parse(body)
      console.log(data)
      var index = 0

      for (var i = 0; i < endIndex - startIndex + 1; i++) {
        connection.query(
          'SELECT serial FROM data WHERE serial = "' +
            data.IotVdata005['row'][i].COLUMN1 +
            '" and obsdate ="' +
            data.IotVdata005['row'][i].COLUMN2 +
            '"',
          function (err, row) {
            if (err) throw err
            if (row[0] == undefined) {
              connection.query(
                'INSERT INTO data (serial,obsdate,temp,hum,finedust,utrafinedust,noise) VALUES ("' +
                  data.IotVdata005['row'][index].COLUMN1 + // 시리얼
                  '","' +
                  data.IotVdata005['row'][index].COLUMN2 + // 관측시간
                  '","' +
                  data.IotVdata005['row'][index].COLUMN3 + // 온도
                  '","' +
                  data.IotVdata005['row'][index].COLUMN4 + // 습도
                  '","' +
                  data.IotVdata005['row'][index].COLUMN5 + // 미세먼지
                  '","' +
                  data.IotVdata005['row'][index].COLUMN9 + //초미세먼지
                  '","' +
                  data.IotVdata005['row'][index].COLUMN6 + //소음
                  '")',
                function (err, row2) {
                  if (err) throw err
                }
              )
              index++
            }
          }
        )
      }
      res.json({
        success: true,
        message: 'data pushed!'
      })
    }
  )
})

module.exports = router
