document.querySelector('.search-button').addEventListener('click', () => {
    const query = document.querySelector('.search-bar').value;
    alert('Search for: ' + query);
});

// Add event listeners to video thumbnails to open a modal with video details
const thumbnails = document.querySelectorAll('.video-thumbnail');
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const title = thumbnail.getAttribute('data-title');
        const channel = thumbnail.getAttribute('data-channel');
        const videoId = thumbnail.getAttribute('data-videoid');
        
        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-channel').innerText = channel;
        document.getElementById('modal-video').src = `https://www.youtube.com/embed/${videoId}`;
        
        document.getElementById('videoModal').style.display = "block";
    });
});

// Close the modal when the user clicks on <span> (x)
const modal = document.getElementById('videoModal');
const span = document.getElementsByClassName('close')[0];

span.onclick = function() {
    modal.style.display = "none";
    document.getElementById('modal-video').src = ""; // Stop the video
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById('modal-video').src = ""; // Stop the video
    }
}