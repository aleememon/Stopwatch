$(document).ready(() => {
  let miuntes = 0;
  let seconds = 0;
  let hours = 0;
  let time;
  $("#startButton").click(() => {
    time = setInterval(() => {
      $("#hrs").text(hours);
      $("#sec").text(seconds);
      $("#min").text(miuntes);

      seconds++;
      if (seconds >= 60) {
        miuntes++;
        $("#min").text(miuntes);
        seconds = 0;
      }

      if (miuntes >= 60) {
        hours++;
        $("#hrs").text(hours);
      }
    }, 1000);
  });

  $("#stopButton").click(() => {
    clearInterval(time);
  });

  $("#resetButton").click(() => {
    clearInterval(time);
    miuntes = 0;
    seconds = 0;
    hours = 0;
    $("#hrs").text("00");
    $("#sec").text("00");
    $("#min").text("00");
  });
});
