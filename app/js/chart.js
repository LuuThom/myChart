$(document).ready(function () {

  
  // $(".form_datetime").datetimepicker({format: 'yyyy-mm-dd hh:ii'});
  function myChart(element) {
    // function Chart(){
    var el = $("#" + element);
    // var el = document.getElementById(eleme =nt); 

    var x = el.attr("data-dataset");
    var t = JSON.parse(x);
    var y = el.attr("data-lables");


    var d = JSON.parse(y);

    console.log(d)

    new Chart(el, {
      type: 'doughnut',
      data: {
        labels: y,
        datasets: [
          {
            data: t,
            backgroundColor: ['#1ca8dd', '#1bc98e'],
            borderColor: '#252830',
          }
        ]
      },
      options: {
        cutoutPercentage: 80,
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    })
  }
  myChart("doughnut-chart1");