const root = document.querySelector(".root");
document.body.style.backgroundImage = "url('brk.jpg')";
function showAlerts() {
    alert("Selamat datang!, Silahkan isi form dibawah ini.");
}

window.onload = showAlerts;

root.innerHTML = `
  <div class="headerhead white">
    <h1 class="header">TUGAS <a class="orange"> II </a> 
    <br> LAB PEMROGRAMAN WEB </br></h1>
  </div>
  <div class="main-content">
    <form>
      <div>
        <label for="UsernameInput">Username</label>
        <input type="text" id="UsernameInput" placeholder="Susena Yudha Wijaya" required>
      </div>
      <div>
        <label for="NIMInput">NIM</label>
        <input type="text" id="NIMInput" placeholder="231401109" required>
      </div>
      <div>
        <label for="KomInput">KOM</label>
        <input type="text" id="KomInput" placeholder="A" required>
      </div>
      <div>
        <label for="PhotoInput">Upload Photo</label>
        <input type="file" id="PhotoInput" accept="image/png, image/jpg, image/jpeg, image/webp" required>
      </div>
      <input type="submit" value="Submit">
    </form>
    <div class="display-container" style="display: none;"></div>
  </div>
`;

const form = root.querySelector("form");
const displayContainer = root.querySelector(".display-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("UsernameInput").value;
  const nim = document.getElementById("NIMInput").value;
  const kom = document.getElementById("KomInput").value;
  const photo = document.getElementById("PhotoInput").files[0];

  displayContainer.innerHTML = `
    <div class="card">
      <img src="${URL.createObjectURL(photo)}" alt="User Photo">
      <p>Username: ${username}</p>
      <p>NIM: ${nim}</p>
      <p>KOM: ${kom}</p>
    </div>
  `;
  displayContainer.style.display = "block";

  alert("Form berhasil di submit (づ￣ 3￣)づ");
});
