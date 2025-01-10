document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            sidebar.classList.add("scrolled"); // Apply the scrolled state
        } else {
            sidebar.classList.remove("scrolled"); // Remove the scrolled state
        }
    });
});
