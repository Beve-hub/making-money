
new Chart("topChart", {
  type: "line",
  data: {
    labels:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
    datasets: [{
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor:  "#55FE66",
      fill: false
    },{
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor:  "#fff",
      fill: false
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Month' // Label for the x-axis
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Amount' // Label for the y-axis
        }
      }]
    }
  }
});
