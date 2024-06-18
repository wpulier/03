document.addEventListener('DOMContentLoaded', function() {
    const intro = document.getElementById('intros');
    const mainContent = document.getElementById('mainContent');
    const video = document.getElementById('introVideo');
    const unmuteButton = document.getElementById('unmuteButton');

    if (intro && mainContent && video && unmuteButton) {
        intro.addEventListener('click', function() {
            // Stop the video and show the main content with glitch effect
            video.pause();
            video.currentTime = 0;
            intro.classList.add('glitch-out'); // Add glitch effect class
            setTimeout(() => {
                intro.classList.add('hidden');
                mainContent.classList.remove('hidden');
            }, 1000); // Adjust this delay to match the duration of the glitch effect
        });
        intro.style.cursor = 'pointer'; // Indicate that the intro is clickable

        unmuteButton.addEventListener('click', function(event) {
            if (video.muted) {
                video.muted = false;
                unmuteButton.textContent = 'Mute';
            } else {
                video.muted = true;
                unmuteButton.textContent = 'Unmute';
            }
            event.stopPropagation(); // Prevent the click event from reaching the intro div
        });
    } else {
        console.error("Intro, mainContent, video, or unmuteButton element not found");
    }
});