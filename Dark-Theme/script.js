const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Event listener for theme toggle button
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Update icon based on current theme
    const isDarkMode = body.classList.contains('dark-mode');
    if (isDarkMode) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Icon for light mode
        body.style.setProperty('--bg-color-light', '#333333'); // Custom light mode background color
        body.style.setProperty('--text-color-dark', '#ffffff'); // Custom light mode text color
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Icon for dark mode
        body.style.setProperty('--bg-color-light', '#ffffff'); // Reset to default light mode background color
        body.style.setProperty('--text-color-dark', '#333333'); // Reset to default light mode text color
    }
});
