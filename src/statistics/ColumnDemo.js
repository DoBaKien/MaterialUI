import { Column } from "@ant-design/plots";

function ColumnDemo() {
  const data = [
    {
      type: "2007",
      value: 1.39,
    },
    {
      type: "2008",
      value: 11.63,
    },
    {
      type: "2009",
      value: 20.73,
    },
    {
      type: "2010",
      value: 39.99,
    },
    {
      type: "2011",
      value: 72.29,
    },
    {
      type: "2012",
      value: 125.05,
    },
    {
      type: "2013",
      value: 169.22,
    },
    {
      type: "2014",
      value: 231.22,
    },
    {
      type: "2015",
      value: 231.22,
    },
    {
      type: "2016",
      value: 211.88,
    },
  ];
  const paletteSemanticRed = "#F4664A";
  const brandColor = "#5B8FF9";
  const config = {
    data,
    xField: "type",
    yField: "value",
    seriesField: "",
    color: ({ type }) => {
      if (type === "2016" || type === "2007") {
        return paletteSemanticRed;
      }
      return brandColor;
    },
    label: {
      content: (originData) => {
        const val = parseFloat(originData.value);
        return val;
      },
      offset: 10,
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Doanh số Apple iPhone từ 2007 đến 2017 (triệu)
      </h1>
      <Column {...config} />
    </>
  );
}

export default ColumnDemo;
