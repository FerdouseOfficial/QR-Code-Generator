const input = document.getElementById('userInput');
const button = document.getElementById('submit');

async function mainWork(Input) {
    const url = fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${Input}` )
}

button.addEventListener(('click'), () => {
    const data = input.value;
    console.log(data)
})