let slideIndex = 1;

function openLightbox() {
  document.getElementById("lightbox").style.display = "block";
  showSlide(slideIndex);
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  let slides = document.getElementsByClassName("lightbox-slide");
  let prev = document.querySelector(".prev");
  let next = document.querySelector(".next");

  // Limit slideIndex between 1 and total slides
  if (n > slides.length) {
    slideIndex = slides.length;
  }
  if (n < 1) {
    slideIndex = 1;
  }

  // Hide all slides
  for (let slide of slides) {
    slide.style.display = "none";
  }

  // Show the current slide
  slides[slideIndex - 1].style.display = "block";

}

// Bonus: Filter images by category
function filterImages(category) {
  const images = document.querySelectorAll('.gallery img');
  images.forEach(img => {
    const imgCategory = img.getAttribute('data-category');
    if (category === 'all' || imgCategory === category) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}
