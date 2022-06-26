function show() {
    let pararghShow = document.getElementById("password-input")
    pararghShow.setAttribute("type", "text")
};

function hide() {
    let parargHide = document.getElementById("password-input")
    parargHide.setAttribute("type", "password")
};

let iconEye = 0;

document.getElementById("eye").addEventListener("click", function() {
    if (iconEye == 0) {
        iconEye = 1;
        show();
    } else {
        iconEye = 0;
        hide();
    }
}, false)

let parargh = document.getElementById("password-input")
parargh.textContent = parargh;

let userName = document.getElementById("text-input")
userName.textContent = userName;

let loginPassword = document.getElementById("log");
loginPassword.addEventListener("click", function() {
    if (!parargh.length <= 8 || parargh.length == 0 && !Number && userName.length <= 6 || userName.length == 0) {
        alert(`Password is short! or you need Number in your Password!`)
        parargh == " "
    } else {
        alert("Welcome")
    }
})