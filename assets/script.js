const imageCount = 72 // Total number of images
let currentImage = 1;  // Start from the second image


const imageTitles = [
    "Annunciation to Mary",
    "Mary's Reply",
    "Annunciation to Joseph",
    "The Census",
    "Christ is Born",
    "The Shepherds",
    "This Thing that has Happened",
    "The Star of Bethlehem",
    "Herod's Inquiry",
    "The Magi's Visit",
    "Flight",
    "Herod's Slaughter",
    "Return to Israel",
    "The Nazarene",
    "Twelve Years Old",
    "My Father's House",
    "John the Baptist",
    "Locusts and Wild Honey",
    "Heaven Was Opened",
    "Stones to Bread",
    "His Angels Charge",
    "All The Kingdoms of the World",
    "The Disciples",
    "Matthew the Tax Collector",
    "Philip",
    "Nathanael",
    "The Twelve Apostles",
    "The Good News",
    "The Beatitudes",
    "The Salt of the Earth",
    "On Retaliation",
    "Love Your Enemies",
    "The Lord's Prayer",
    "Treasures in Heaven",
    "Judging Others",
    "The Cleansing of the Leper",
    "The Feeding of the Five Thousand",
    "Jesus Walking On The Sea",
    "The Light of the World",
    "The Calming of the Storm",
    "The Transfiguration",
    "The Healing of the Demon-Possessed Boy",
    "The Things of Men",
    "Riding on a Donkey",
    "Hosanna!",
    "The Cleansing of the Temple",
    "The Greatest Commandment",
    "The Indignation of the Leaders",
    "From Heaven",
    "The Priests Plot",
    "The Passover Lamb",
    "The New Covenant",
    "Judas",
    "Before the Rooster Crows",
    "The Agony in Gethsemane",
    "Drops of Blood",
    "With a Kiss",
    "Peter's Denial",
    "The Right Hand of the Power of God",
    "The Field of Blood",
    "Not Even One Word",
    "Barabbas",
    "Washed his Hands",
    "Forgive Them",
    "Paradise",
    "The Ninth Hour",
    "Joseph of Arimathaea",
    "The First Day of the Week",
    "Why Are You Weeping?",
    "Peace Be To You",
    "Life In His Name",
    "Amen"
];



// Function to update the displayed image
function updateImage() {
    const imgElement = document.getElementById('slideshowImage');
    imgElement.src = `./assets/Solutions/${currentImage}.png`; 

    var printerIcon = document.getElementById("printIcon")
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
        option.textContent = `# ${i} : ${imageTitles[i-1]}`; // Use i-1 for correct title
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

