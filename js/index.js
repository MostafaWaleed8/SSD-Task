const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const valdat = document.getElementById("valdat");

const LOGIN_API = "../json/admins.json";

form.addEventListener("submit", (e) => {
  const username = name.value;
  const realPassword = password.value;
  e.preventDefault();

  const post = async () => {
    const response = await fetch(LOGIN_API);
    const data = await response.json();
    let state = 0;

    for (let i in data) {
      let admin = data[i];
      if (username == admin.name && realPassword == admin.password) {
        console.log("YES");
        state = 1;
        setCookie("logedIn", "true", 1);
        window.location.replace("../index.html");
        break;
      }
    }

    if (state != 1) {
      valdat.innerText = "Wrong Password or name";
      setTimeout(() => {
        valdat.innerHTML = "";
      }, 5000);
    }
  };

  post();
});

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
