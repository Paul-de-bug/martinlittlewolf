const imageCount = 72; // Total number of images
let currentImage = 1;  // Start from the first image

// Function to update the displayed image
function updateImage() {
    const imgElement = document.getElementById('slideshowImage');
    imgElement.src = `path_to_images/${currentImage}.jpg`; // Replace 'path_to_images/' with your actual path
}

// Populate sidebar with page numbers and titles
function populateSidebar() {
    const sidebar = document.querySelector('.sidebar');
    for (let i = 1; i <= imageCount; i++) {
        const pageItem = document.createElement('div');
        pageItem.textContent = `Page ${i}`;
        pageItem.onclick = function() {
            currentImage = i;
            updateImage();
        };
        sidebar.appendChild(pageItem);
    }
}

// Handle the Previous and Next buttons
document.getElementById('prevBtn').onclick = function() {
    if (currentImage > 1) {
        currentImage--;
        updateImage();
    }
};

document.getElementById('nextBtn').onclick = function() {
    if (currentImage < imageCount) {
        currentImage++;
        updateImage();
    }
};

// Initial setup
window.onload = function() {
    populateSidebar();
    updateImage();
};
