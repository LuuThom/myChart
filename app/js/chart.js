function chart(element){
  document.getElementById("#myChart") = element;
}
var myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [230, 130],
      backgroundColor: ['#1ca8dd', '#1bc98e'],
    }],
    lable: {
      'Returning', 'New'
    }
    options: {
      responsive: true,
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Doughnut Chart'
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
  },
  options: options
});
