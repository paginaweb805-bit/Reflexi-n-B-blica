function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");

    if (user === "admin" && pass === "1234") {
        document.getElementById("login-container").classList.add("hidden");
        const main = document.getElementById("main-container");
        main.classList.remove("hidden");
        main.classList.add("fade-in");
    } else {
        errorMsg.textContent = "usuario o contraseña incorrecta";
    }
}

function saveProfile() {
    const name = document.getElementById("name").value;
    const nickname = document.getElementById("nickname").value;
    const picInput = document.getElementById("profile-pic");

    const display = document.getElementById("profile-display");

    let imgHTML = "";
    if (picInput.files[0]) {
        const url = URL.createObjectURL(picInput.files[0]);
        imgHTML = `<img src="${url}" width="100" style="border-radius:50%">`;
    }

    display.innerHTML = `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Apodo:</strong> ${nickname}</p>
        ${imgHTML}
    `;
}

function toggleTheme() {
    document.body.classList.toggle("light-theme");
}

/* VERSÍCULOS */
const verses = [
    "El Señor es mi pastor; nada me faltará. - Salmo 23:1",
    "Todo lo puedo en aquel que me fortalece. - Filipenses 4:13",
    "Dios es amor. - 1 Juan 4:8",
    "Confía en el Señor con todo tu corazón. - Proverbios 3:5",
    "La fe mueve montañas. - Mateo 17:20"
];

function showVerse() {
    const box = document.getElementById("verse-box");
    const random = verses[Math.floor(Math.random() * verses.length)];

    box.innerText = random;
    box.style.display = "block";
}