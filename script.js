const input = document.getElementById("userInput");
const button = document.getElementById("submit");
const ImgBox = document.getElementById("imgBox");
const QRImage = document.getElementById("qrImage");

button.addEventListener("click", () => {
  const data = input.value.trim(); // remove extra spaces
  if (!data) {
    alert("Please enter some text or a URL!");
    return;
  }

  // The API can directly be used as an image link
  QRImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`;

  // Show the image box if it was hidden before
  ImgBox.style.display = "block";
});
