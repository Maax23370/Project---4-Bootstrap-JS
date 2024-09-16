function openNav() {
    document.getElementById("mySidepanel").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }


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




