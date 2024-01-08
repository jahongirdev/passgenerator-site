const passwordBox = document.getElementById("password");
const passLength = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const passNum = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + passNum + symbol

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += passNum[Math.floor(Math.random() * passNum.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(passLength > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    passwordBox.value = password;
};

function copyPass() {
    passwordBox.select();
    document.execCommand("copy");
};