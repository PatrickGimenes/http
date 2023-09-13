document.getElementById("getbtn").onclick = function () {
  document.getElementById("form").method = "get";
  document.getElementById("form").submit();
};
document.getElementById("postbtn").onclick = function () {
  document.getElementById("form").method = "post";
  document.getElementById("form").submit();
};
