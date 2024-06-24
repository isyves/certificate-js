document.getElementById("qrcode").innerHTML = "";

new QRCode(document.getElementById("qrcode"), {
  text: "${certificate_validation_link}",
  width: 128,
  height: 128,
});
