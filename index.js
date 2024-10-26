function toggleMenu() {
    let x = document.getElementById("navDemo");
    let burgerIcon = document.querySelector(".burger-icon");
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
        burgerIcon.classList.add("open");
    } else {
        x.className = x.className.replace(" w3-show", "");
        burgerIcon.classList.remove("open");
    }
}