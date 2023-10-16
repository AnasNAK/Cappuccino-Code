document.querySelector('a[href="#scrollTarget"]').addEventListener('click', function(e) {
    e.preventDefault();  
    document.querySelector('#scrollTarget').scrollIntoView({
      behavior: 'smooth'
    });
  });



  document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.filter-button');
    const containers = document.querySelectorAll('.container-boxes');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            containers.forEach(container => {
                container.style.opacity = 0;
                container.style.display = 'none';
            });

            if (category === 'all') {
                containers.forEach(container => {
                    container.style.display = 'block';
                    container.style.cssText ='display: flex;justify-content: space-evenly;';
                    setTimeout(() => {
                        container.style.opacity = 1; 
                    }, 50);
                });
            } else {
                const selectedContainer = document.querySelector(`.container-boxes[data-category="${category}"]`);
                if (selectedContainer) {
                    selectedContainer.style.display = 'block';
                    selectedContainer.style.cssText ='display: flex;justify-content: space-evenly;';
                    setTimeout(() => {
                        selectedContainer.style.opacity = 1; 
                    }, 50);
                }
                
            }
        });
    });
});



var burgerImage = document.getElementById('burgerImage');
var mobileMenu = document.getElementById('menu');
var closeMenuButton = document.getElementById('closeMenu');

burgerImage.addEventListener('click', function() {
    mobileMenu.style.display = 'block';
});

closeMenuButton.addEventListener('click', function() {
    mobileMenu.style.display = 'none';
});
