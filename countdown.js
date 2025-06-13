const countDownTimer = function (id, date) {
  var _vDate = new Date(date); // 목표 시간
  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var timer;

  function showRemaining() {
    var now = new Date();
    var distDt = _vDate - now;

    if (distDt < 0) {
      clearInterval(timer);
      document.getElementById(id).textContent = '해당 이벤트가 종료 되었습니다!';
      return;
    }


    var hours = Math.floor(distDt / _hour);
    var minutes = Math.floor((distDt % _hour) / _minute);
    var seconds = Math.floor((distDt % _minute) / _second);
    var milliseconds = distDt % 1000;

    // 화면에 표시
    document.getElementById(id).textContent =
      hours + ':' +
      minutes + ':' +
      seconds + ':' +
      String(milliseconds).padStart(3, "0");
  }

  timer = setInterval(showRemaining, 67); // 0.05초마다 갱신
}

countDownTimer('until_application', '7/11/2025');