const images = [
    'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600'
  ];

let index = 0;
const n = images.length;

function updateImage() {
  const carouselImg = document.getElementById("carouselImg");
  carouselImg.src = images[index % n];

  scheduleAutoSlide();
}

function nextImg() {
  index++;
  updateImage();
}

function previousImg() {
  if (index <= 0) {
    index = index + n;
  }
  index--;
            
  updateImage();
}

let timerId;
function scheduleAutoSlide() {
  clearTimeout(timerId);

  timerId = setTimeout(nextImg, 2000)
}

updateImage();
                        