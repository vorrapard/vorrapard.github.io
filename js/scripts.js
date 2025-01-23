document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const sidebarLinks = document.querySelectorAll("#sidebar a"); // Select all links in the sidebar

    // Sidebar toggle functionality
    function toggleSidebar() {
        sidebar.classList.toggle("open");
    }

    // Close sidebar when a link is clicked
    function closeSidebar() {
        if (sidebar.classList.contains("open")) {
            sidebar.classList.remove("open");
        }
    }

    // Attach click event to the hamburger icon
    hamburgerIcon.addEventListener("click", toggleSidebar);

    // Attach click events to each sidebar link
    sidebarLinks.forEach(link => {
        link.addEventListener("click", closeSidebar);
    });

    // Handle scroll event for larger screens
    function handleScroll() {
        if (window.innerWidth > 620) { // Apply only for screens wider than 620px
            if (window.scrollY > 50) {
                sidebar.classList.add("scrolled"); // Apply the scrolled state
            } else {
                sidebar.classList.remove("scrolled"); // Remove the scrolled state
            }
        } else {
            sidebar.classList.remove("scrolled"); // Ensure scrolled class is removed on smaller screens
        }
    }
    window.addEventListener("scroll", handleScroll);

    // Initial check to remove "scrolled" class on smaller screens
    handleScroll();

    // Handle window resize to update functionality dynamically
    window.addEventListener("resize", handleScroll);
});