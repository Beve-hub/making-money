const xValues = ["Direct", "Affilliate", "Sponsored", "Email"];
const yValues = [100, 100, 100, 100];
const barColors = [
  "#8F00FF",
  "#FFFF",
  "#00E0FF",
  "#55FE66"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: false,
      text: ""
    },
    startAngle: 70,
    // innerRadius: 60,
    indexLabelFontSize: 17,
    indexLabel: "{label} - #percent%",
    toolTipContent: "<b>{label}:</b> {y} (#percent%)",
    dataPoints: [
      { y: 100, label: "Direct" },
      { y: 100, label: "Affilliate" },
      { y: 100, label: "Sponsored" },
      { y: 100, label: "Email" }
    ]
  }
  
});
