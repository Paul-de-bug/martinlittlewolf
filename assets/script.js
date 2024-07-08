
const imageCount = 110 // Total number of images
let currentImage = 1;  // Start from the second image


// Function to update the displayed image
function updateImage() {
    const imgElement = document.getElementById('slideshowImage');
    imgElement.src = `./assets/Solutions - 5000/${currentImage}.png`; 

    const printerIcon = document.getElementById("printIcon")
if (currentImage === 1) {
    printerIcon.classList.add("hidden");
} else {
    printerIcon.classList.remove("hidden");
}

}

function populateDropdown() {
    const dropdown = document.getElementById('imageDropdown');
    
    // Create the default "Select" option
    const defaultOption = document.createElement('option');
    defaultOption.value = 1; // Set value to 1 for the splash page
    defaultOption.textContent = "Select";
    defaultOption.selected = true; // Set as default
    dropdown.appendChild(defaultOption);

    // Start the loop from 1 after "Select"
    for (let i = 1; i <= imageCount; i++) { 
        const option = document.createElement('option');
        option.value = i + 1;  // Adjusted to account for the splash page
        option.textContent = `Puzzle ${i}`; // Use i-1 for correct title
        dropdown.appendChild(option);
    }
   
}


// Handle the Previous and Next buttons
document.getElementById('prevBtn').onclick = function() {
    if (currentImage > 1) {
        currentImage--;
        updateImage();
        // Update dropdown value
        document.getElementById('imageDropdown').value = currentImage;
    }
};

document.getElementById('nextBtn').onclick = function() {
    if (currentImage < imageCount + 1) { // +1 to account for the splash page
        currentImage++;
        updateImage();
        // Update dropdown value
        document.getElementById('imageDropdown').value = currentImage;
    }
    
};

// Update the image when a new dropdown option is selected
document.getElementById('imageDropdown').addEventListener('change', function() {
    currentImage = parseInt(this.value);
    updateImage();
});



// Initial setup
window.onload = function() {
    populateDropdown();
    updateImage();
};

// Print setup

function printCurrentImage() {
    const imageSrc = document.getElementById('slideshowImage').src;

    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write('<img src="' + imageSrc + '" width="100%">');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    
    // Use setTimeout to ensure content is fully loaded before invoking print
    setTimeout(function() {
        printWindow.print();
    }, 500);
}

document.getElementById("customForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = new FormData(event.target);
    var googleFormURL = event.target.action;
    
    fetch(googleFormURL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'  // Important since Google Forms doesn't support CORS
    })
    .then(response => {
        // Hide the form
        document.getElementById("customForm").style.display = "none";
        
        // Display a thank you message
        var thankYouMsg = document.createElement("p");
        thankYouMsg.innerHTML = "Thank you for submitting!";
        document.getElementById("customFormContainer").appendChild(thankYouMsg);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

document.getElementById('closePopup').addEventListener('click', function() {
    var popup = document.getElementById('popupContainer');
    popup.classList.add('hidden');
});

