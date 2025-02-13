const messages = [
    "Are you sure love?",
    'Thagameeee urapanoo ',
    "Really sure??",
    "Are you appii positive?",
    "Pookie please...",
    "Just think about it sundikaree..!",
    "agana parayaleee mutheeee..",
    "If you say no, I will be really sad...",
    "Apppiiiii plzzzzz...",
    "poooo apppiiiii..",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}