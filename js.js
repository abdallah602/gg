
function login(e) {
    e.preventDefault();

    const savedUser = "boda";
    const savedPass = "1234";
    
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "boda" && pass === "1234") {
    window.location.href = "index2.html";
  } else {
    document.getElementById("error").style.display="block"
    document.getElementById("error").innerText =
      "Invalid username or password";
  }
}
  