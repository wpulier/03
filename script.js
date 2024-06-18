document.addEventListener('DOMContentLoaded', function() {
    const intro = document.getElementById('intros');
    const mainContent = document.getElementById('mainContent');
    const video = document.getElementById('introVideo');
    const unmuteButton = document.getElementById('unmuteButton');
    const spinner = document.getElementById('spinner');

    if (intro && mainContent && video && unmuteButton && spinner) {
        video.addEventListener('canplay', function() {
            spinner.classList.add('hidden'); // Hide the spinner when the video can play
        });

        intro.addEventListener('click', function() {
            // Stop the video and show the main content
            video.pause();
            video.currentTime = 0;
            intro.classList.add('hidden');
            mainContent.classList.remove('hidden');
        });
        intro.style.cursor = 'pointer'; // Indicate that the intro is clickable

        unmuteButton.addEventListener('click', function(event) {
            if (video.muted) {
                video.muted = false;
                unmuteButton.textContent = '🔇'; // Change to mute icon
            } else {
                video.muted = true;
                unmuteButton.textContent = '🔊'; // Change to unmute icon
            }
            event.stopPropagation(); // Prevent the click event from reaching the intro div
        });
    } else {
        console.error("Intro, mainContent, video, unmuteButton, or spinner element not found");
    }
});
