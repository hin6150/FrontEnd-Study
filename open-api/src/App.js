import { useEffect, useState } from "react";
import "antd/dist/antd.min.css";
import { Button, DatePicker, Table } from "antd";
import { getDatas } from "./apis/coivdDatas";
import moment from "moment";

function App() {
  const [coivdDatas, setCovidDatas] = useState([]);
  const [covidDatasParams, setCovidDatasParams] = useState({
    params: {
      serviceKey: "개인인증키",
      numOfRows: 1000,
      pageNo: 1,
      startCreateDt: 20200310,
      endCreateDt: 20211229,
    },
  });

  const { RangePicker } = DatePicker;

  const columns = [
    {
      title: "날짜",
      dataIndex: "createDt",
      width: "15%",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
      ],
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => {
        a = new Date(a.createDt);
        b = new Date(b.createDt);
        return a > b ? -1 : a < b ? 1 : 0;
      },
    },
    {
      title: "누적 확진자 수",
      dataIndex: "decideCnt",
      defaultSortOrder: "decideCnt",
      sorter: (a, b) => a.decideCnt - b.decideCnt,
    },
    {
      title: "누적 사망자 수",
      dataIndex: "deathCnt",
      sorter: (a, b) => a.decideCnt - b.decideCnt,
    },
  ];

  useEffect(() => {
    getDatas(covidDatasParams).then((res) => setCovidDatas(res));
  }, []);

  const onChangeForDate = (e) => {
    setCovidDatasParams({
      ...covidDatasParams,
      startCreateDt: moment(e[0]).format("YYYYMMDD"),
      endCreateDt: moment(e[0]).format("YYYYMMDD"),
    });
  };

  return (
    <div className="App">
      <RangePicker onChange={onChangeForDate} />{" "}
      <Button
        onClick={() =>
          getDatas(covidDatasParams).then((res) => setCovidDatas(res))
        }
      >
        클릭
      </Button>
      <h1 style={{ textAlign: "center" }}>확진자 정보</h1>
      <Table columns={columns} dataSource={coivdDatas} size="large" />
    </div>
  );
}

export default App;
