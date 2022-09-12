import { Pie } from "@ant-design/plots";
function Circle() {
  const data = [
    {
      type: "Ipad",
      value: 7.6,
    },
    {
      type: "Iphone",
      value: 50.6,
    },
    {
      type: "Mac",
      value: 10.4,
    },
    {
      type: "Dịch vụ",
      value: 19.8,
    },
    {
      type: "Đồng hồ, gia đình, phụ kiện",
      value: 8.8,
    },
  ];
  const config = {
    appendPadding: 1,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.75,
    label: {
      type: "spider",
      labelHeight: 50,
      content: "{name}\n{percentage}",
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
  };
  return (
    <div>
      <h2 style={{textAlign:"center"}}>Lợi nhuận Apple Q2 2022</h2>
      <div style={{width:"100%"}}>
        <Pie {...config} />
      </div>
    </div>
  );
}

export default Circle;
