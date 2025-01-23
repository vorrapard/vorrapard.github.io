document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const sidebarLinks = document.querySelectorAll("#sidebar a"); // Select all links in the sidebar
    const overlay = document.getElementById("overlay"); // Select the overlay element

    // Sidebar toggle functionality
    function toggleSidebar() {
        sidebar.classList.toggle("open");
        overlay.classList.toggle("visible"); // Toggle the overlay visibility
    }

    // Close sidebar when a link or overlay is clicked
    function closeSidebar() {
        if (sidebar.classList.contains("open")) {
            sidebar.classList.remove("open");
            overlay.classList.remove("visible"); // Hide the overlay
        }
    }

    // Attach click event to the hamburger icon
    hamburgerIcon.addEventListener("click", toggleSidebar);

    // Attach click events to each sidebar link
    sidebarLinks.forEach(link => {
        link.addEventListener("click", closeSidebar);
    });

    // Attach click event to the overlay
    overlay.addEventListener("click", closeSidebar);

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
