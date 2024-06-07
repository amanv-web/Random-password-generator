const passbox = document.getElementById("passbox");
const btn = document.getElementById('btn');
const capital = document.getElementById('capital');
const small = document.getElementById('small');
const number = document.getElementById('number');
const special = document.getElementById('special');
const slider = document.getElementById('slider');
const upper = "ABCEFGHIJLKMNOPQRSTUVWXYZ"
const lower = "abcdefghijklmnopqrstuvwxyz"
const num = "0123456789"
const specialChar = "!@#$%^&*()_+"
const copyicon = document.getElementById('copyicon');

const generatePassword = () => {
    let password = '';
    const length = slide.value;
    const characters = [];
    
    if (capital.checked) {
        characters.push(...upper);
    }
    
    if (small.checked) {
        characters.push(...lower);
    }
    
    if (number.checked) {
        characters.push(...num);
    }
    
    if (special.checked) {
        characters.push(...specialChar);
    }
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    
    return password;
};
btn.addEventListener('click', () => { 
    if (password.lenght > 0){
        alert("Enter any text or paste link")}
    else{
    passbox.value = generatePassword();

});



const slide = document.getElementById("slider");
const length = document.getElementById("value");
length.textContent = slide.value;
slide.addEventListener("input", () => {
    length.textContent = slide.value;
});


copyicon.addEventListener('click', () => {
navigator.clipboard.writeText(passbox.value);
    alert('Password copied to clipboard');
});
