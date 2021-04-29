// @ts-nocheck
let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.80,
    fill: {gradient: ['#fa709a','#fee140']}
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
  $(".js .bar").circleProgress({
    value: 0.70
  });
  $(".bs .bar").circleProgress({
    value: 0.90
  });