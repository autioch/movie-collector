function renderStat(stat) {
  if (stat.type === 'string') {
    return;
  }
  console.log(stat);
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var header = document.createElement('h3');
  header.textContent = stat.key;
  document.body.appendChild(header);
  document.body.appendChild(canvas);
  canvas.width = 960;
  canvas.height = 240;
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  ctx.font = '14px Consolas';
  ctx.lineWidth = 1;
  var prop,
    measureResult;
  var yMax = stat.max; // stat.top.value;
  var offsetLeft = ctx.measureText(yMax).width;

  var offsetBottom = 0;
  for (prop in stat.dict) {
    measureResult = ctx.measureText(prop);
    if (measureResult.width > offsetBottom) {
      offsetBottom = measureResult.width;
    }
  }

  var offsetTop = 5.5;
  offsetLeft = Math.floor(offsetLeft + 10) + 0.5;
  offsetBottom = Math.floor(offsetBottom + 10) + 0.5;
  var width = 960 - offsetLeft;
  var height = 240 - offsetBottom;

  function drawAxisYhelper(value, left, top, width) {
    top = Math.floor(top) + 0.5;
    ctx.fillText(value, left - 5, top);
    ctx.beginPath();
    ctx.moveTo(left, top);
    ctx.lineTo(width + left, top);
    ctx.stroke();
  }

  function drawAxisY(width, height, offsetLeft, offsetTop, yMax) {
    ctx.strokeStyle = '#eee';
    ctx.fillStyle = '#444';
    ctx.fillText('0', offsetLeft - 5, height);
    drawAxisYhelper(ctx, Math.round(yMax / 4), offsetLeft, (height + offsetTop) / 4 * 3, width);
    drawAxisYhelper(ctx, Math.round(yMax / 2), offsetLeft, (height + offsetTop) / 4 * 2, width);
    drawAxisYhelper(ctx, Math.round(yMax / 4 * 3), offsetLeft, (height + offsetTop) / 4, width);
    drawAxisYhelper(ctx, Math.round(yMax), offsetLeft, offsetTop, width);
  }

  function drawAxes(offsetTop, offsetLeft, height, width) {
    ctx.strokeStyle = '#aaa';
    ctx.beginPath();
    ctx.moveTo(offsetLeft, offsetTop);
    ctx.lineTo(offsetLeft, height);
    ctx.lineTo(width + offsetLeft, height);
    ctx.stroke();
  }

  function drawBars(stat, width, height, yMax, offsetLeft) {
    ctx.fillStyle = '#2bf';
    ctx.strokeStyle = '#2bf';
    var count = 0;
    var barWidth = width / stat.variety;
    var prop;
    var barHeight;

    for (prop in stat.dict) {
      barHeight = (stat.dict[prop] / yMax) * height;
      ctx.fillRect(offsetLeft + count * barWidth, height - barHeight, barWidth, barHeight);
      count++;
    }
  }

  function drawLabels(stat, width, height, offsetLeft) {
    ctx.rotate(-90 * Math.PI / 180);
    ctx.fillStyle = '#444';
    var count = 0.5;
    var barCenter = width / stat.variety;
    var lastCenter = -100;
    var nextCenter;
    for (var prop in stat.dict) {
      nextCenter = count * barCenter + offsetLeft;
      if (nextCenter - lastCenter > 14) {
        ctx.fillText(prop, -height - 5, count * barCenter + offsetLeft);
        lastCenter = nextCenter;
      }
      count++;
    }
  }


  drawAxisY(ctx, width, height, offsetLeft, offsetTop, yMax);
  drawAxes(ctx, offsetTop, offsetLeft, height, width);
  drawBars(ctx, stat, width, height, yMax, offsetLeft);
  drawLabels(ctx, stat, width, height, offsetLeft);
}

window.fetch('stat.json')
  .then(response => response.json())
  .then(function(stats) {
    stats.forEach(renderStat);
  });
