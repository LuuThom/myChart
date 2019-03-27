$(document).ready(function () {
  $('.js-form_datetime').eq(0).datepicker();
  $(".js-canvas-chart").each(function () {
    var $this = $(this),
      _dataset = $this.attr("data-dataset"),
      _labels = $this.attr("data-labels");
    var datalist = JSON.parse(_dataset);

    var arr = _labels.split(",");
    new Chart($this, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            borderWidth: 2,
            hoverBorderColor: "transparent",
            borderColor: '#252830',
            backgroundColor: ["#1ca8dd", "#1bc98e"],
            data: datalist,
          }
        ],
        labels: arr,
      },
      options: {
        legend: {
          display: false
        },
        cutoutPercentage: 80,
      }
    });
  });
  $(".js-parkline1").each(function () {
    var $this = $(this),
      _dataset = $this.data("dataset");
    new Chart($this, {
      type: 'line',
      data: {
        datasets: [
          {
            fill: !0,
            backgroundColor: "rgba(255,255,255,.3)",
            borderColor: "#fff",
            pointBorderColor: "#fff",
            lineTension: .25,
            pointRadius: 0,
            pointHoverRadius: 0,
            pointHitRadius: 20,
            data: _dataset,
          }
        ],
        labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
      },
      options: {
        animation: {
          duration: 0
        },
        legend: {
          display: !1
        },
        scales: {
          xAxes: [{
            display: !1
          }],
          yAxes: [{
            display: !1
          }]
        },
        tooltips: {
          enabled: !1
        }
      }
    });
  });
  $(".js-nav-toggle").on('click',function(){
    $(".js-sidebar").slideToggle();
  })
})
