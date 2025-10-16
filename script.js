const input = document.getElementById("userInput");
const button = document.getElementById("submit");
const ImgBox = document.getElementById("imgBox");
const QRImage = document.getElementById("qrImage");

async function generateQR(Input) {
  const url = await fetch(
    `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${Input}`
  );
}

button.addEventListener("click", () => {
  const data = input.value;
  QRImage.src = generateQR(data)
});
