const radioBtns = document.querySelectorAll('.container1 input[type="radio"]');
const containers = document.querySelectorAll('.container1');
const sizeColor = document.querySelectorAll('.size_color')


radioBtns.forEach((radioBtn, index) => {
    radioBtn.addEventListener('change', function() {
        
        containers.forEach(container => {
            container.classList.remove('active');
        });

        sizeColor.forEach(element => {
            element.classList.remove('change')
        })


        if (radioBtn.checked) {
            containers[index].classList.add('active');
            sizeColor[index].classList.add('change')
        }
    });
});


