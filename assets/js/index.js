
const showUserName = () => {
    const userName = JSON.parse(localStorage.getItem('user-name'));
    const userBtn = document.getElementById('user');
    const showName = document.getElementById('showName');
    const textId = document.getElementById('textId')
    if (userName) {
  
        textId.innerText = `you wannna log out?`;
        showName.innerText = `hi ${userName}`;
        userBtn.innerText = `log out`;
        
        userBtn.addEventListener('click', (e) => {
            e.preventDefault;

            localStorage.removeItem('user-name');
            navigation.reload();
        })
    }
}




(async function render() {

    showUserName();

})()





document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const wrapper = document.querySelector(".wrapper");

    const firstCard = carousel.querySelector(".card");
    const firstCardWidth = firstCard.offsetWidth;

    let isDragging = false,
        startX,
        startScrollLeft,
        timeoutId;

    const dragStart = (e) => { 
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragging) return;
    
        const newScrollLeft = startScrollLeft - (e.pageX - startX);
    
        if (newScrollLeft <= 0 || newScrollLeft >= 
            carousel.scrollWidth - carousel.offsetWidth) {
            
            isDragging = false;
            return;
        }
    
        carousel.scrollLeft = newScrollLeft;
    };

    const dragStop = () => {
        isDragging = false; 
        carousel.classList.remove("dragging");
    };

    const autoPlay = () => {
    
        if (window.innerWidth < 800) return; 
        
        const totalCardWidth = carousel.scrollWidth;
        
        const maxScrollLeft = totalCardWidth - carousel.offsetWidth;
        
        if (carousel.scrollLeft >= maxScrollLeft) return;
        
        timeoutId = setTimeout(() => 
            carousel.scrollLeft += firstCardWidth, 2500);
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    wrapper.addEventListener("mouseenter", () => 
        clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);


    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left" ? 
                -firstCardWidth : firstCardWidth;
        });
    });
});





// const burgerBtn = document.getElementById("burger-btn");
// const burger = document.getElementById("burger");
// const close = document.getElementById("close");
// const wel = document.getElementById("wel");
// burgerBtn.addEventListener("click" , () => {
//     burger.classList.remove("d-none");
//     burger.classList.add(".burger-menu");
// });

// close.addEventListener("click",() => {
//     burger.classList.add("d-none")
// });



const burgerBtn = document.getElementById("burger-btn");
const burger = document.getElementById("burger");
const close = document.getElementById("close");

burgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    
    burger.classList.remove("d-none");
    burger.classList.add("open");
});
close.addEventListener("click", (e) => {
    e.stopPropagation();
    burger.classList.remove("open");
    setTimeout(() => burger.classList.add("d-none"), 0); 
});

document.addEventListener("click", (e) => {
    if (!burger.contains(e.target) && !burgerBtn.contains(e.target)) {
        burger.classList.remove("open");
        setTimeout(() => burger.classList.add("d-none"), 0); 
    }
});






// for login 




