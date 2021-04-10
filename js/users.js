const app = document.getElementById("app");
const btn = document.getElementById("btn-add");
const heading = document.getElementById("heading");
const DATA_API = "../json/users.json";

heading.innerText = "Users";

checkCookie();
const addData = async () => {
  const res = await fetch(DATA_API);
  const data = await res.json();
  console.log(data);
  data.map((user) => {
    const div = document.createElement("div");
    const heading = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <div class="card-header"><img src="assets/user.svg" class="avatar" loading="lazy"/></div>
      <h4>Name: <span class="user-name"> ${user.name} </span></h4>
      <h4>Email:<span> ${user.email} </span></h4>
      <h4>Age:<span> ${user.age} </span></h4>
      <h4>Phone: <span>${user.phone} </span></h4>
      `;
    app.appendChild(div);
  });
};

addData();

function getCookie(name) {
  var cookieArr = document.cookie.split(";");
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    if (name == cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}

function checkCookie() {
  var coocki = getCookie("logedIn");
  if (coocki == null) {
    location = "index.html";
  }
}
