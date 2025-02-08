var typed = new Typed(".input", {
    strings: ["Frontend Developer", "UX Designer", "Web Developer"],
    typeSpeed: 70,
    backSpeed: 55,
    loop: true
  });
  
  
  // Navbar toggle for smaller screens
  var togglebtn = document.querySelector(".togglebtn");
  var nav = document.querySelector(".navlinks");
  togglebtn.addEventListener("click", function() {
    this.classList.toggle("click");
    nav.classList.toggle("open");
  });
  
  // JavaScript to handle the modal behavior
  function showImage(imageUrl) {
  const imageDisplay = document.getElementById('image-display');
  const displayedImage = document.getElementById('displayed-image');
  displayedImage.src = imageUrl;
  imageDisplay.style.display = 'flex'; // Show the image in full-screen
  }
  
  function closeImage() {
  const imageDisplay = document.getElementById('image-display');
  imageDisplay.style.display = 'none'; // Hide the image display when close button is clicked
  }
  
  // Function to show the clicked image in fullscreen
function showImage(imageSrc) {
  document.getElementById('displayed-image').src = imageSrc;
  document.getElementById('image-display').style.display = 'flex';
}

// Function to close the fullscreen image display
function closeImage() {
  document.getElementById('image-display').style.display = 'none';
}




