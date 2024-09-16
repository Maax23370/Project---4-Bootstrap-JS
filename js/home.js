function openNav() {
    document.getElementById("mySidepanel").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

document.addEventListener('DOMContentLoaded', function() {
    const indicators = document.querySelectorAll('.carousel-indicators button');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function goToSlide(index) {
        items.forEach(item => item.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));

        items[index].classList.add('active');
        indicators[index].classList.add('active');
        currentIndex = index;
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
        });
    });

    function nextSlide() {
        const nextIndex = (currentIndex + 1) % items.length;
        goToSlide(nextIndex);
    }

    const interval = 10000; 
    setInterval(nextSlide, interval);

    goToSlide(currentIndex);
});



document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
  
    dropdownToggle.addEventListener('click', function() {
      const isActive = dropdownMenu.style.display === 'block';
      if (isActive) {
        dropdownMenu.style.display = 'none';
      } else {
        dropdownMenu.style.display = 'block';
      }
      this.classList.toggle('active', !isActive);
    });
});


document.querySelector('.services-toggle').addEventListener('click', function(e) {
  e.preventDefault();
  const dropdown = document.querySelector('.services-dropdown');
  dropdown.classList.toggle('active');
});
