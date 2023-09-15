const form = document.getElementById("form");

function sendGet() {
  form.method = "get";
  form.submit();
}

function sendPost() {
  form.method = "post";
  form.submit();
}
