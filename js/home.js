// Wait for page load
document.addEventListener('DOMContentLoaded', () => {
    // After title pulse (3s total), move title to banner
    setTimeout(() => {
        const title = document.getElementById('moviefic-title');
        title.classList.add('moved');
        // Hide starry spiral fully
        document.getElementById('starry-spiral').style.display = 'none';
    }, 3000); // 1s spiral + 2s pulse

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger-menu');
    const menu = document.getElementById('menu');
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
});