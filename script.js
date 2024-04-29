document.getElementById("console-btn").addEventListener("click", function () {
  // redirect to dash.domain.com
  window.location.href = "https://dash.classvault.in";
});

document.getElementById("console-btn").onmouseover = function () {
  document.getElementById("console-btn-arrow").style.display = "block";
};
document.getElementById("console-btn").onmouseout = function () {
  document.getElementById("console-btn-arrow").style.display = "none";
};
