const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");


// Open / close sidebar
menuToggle.addEventListener("click", () => {

    sidebar.classList.toggle("sidebar--open");

    sidebarOverlay.classList.toggle("sidebar-overlay--visible");

});


// Close sidebar when overlay is clicked
sidebarOverlay.addEventListener("click", () => {

    sidebar.classList.remove("sidebar--open");

    sidebarOverlay.classList.remove("sidebar-overlay--visible");

});