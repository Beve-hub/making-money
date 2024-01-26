const xValues = ["Direct", "Affilliate", "Sponsored", "Email" ];
const yValues = [100, 100, 100, 100];
const barColors = [
  "#8F00FF",
  "#ffff",
  "#00E0FF",
  "#55FE66",
 
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
      display: true,
      text: ""
    }
  }
});
data: [{
  type: "doughnut",
  startAngle: 60,
  //innerRadius: 60,
  indexLabelFontSize: 17,
  indexLabel: "{label} - #percent%",
  toolTipContent: "<b>{label}:</b> {y} (#percent%)",
  dataPoints: [
    { y: 67, label: "Inbox" },
    { y: 28, label: "Archives" },
    { y: 10, label: "Labels" },
    { y: 7, label: "Drafts"},
    { y: 15, label: "Trash"},
    { y: 6, label: "Spam"}
  ]
}]