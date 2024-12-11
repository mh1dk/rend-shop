function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const elements = document.querySelectorAll(".value");
const startAnimation = () => {
    elements.forEach((obj) => {
        const rect = obj.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isVisible && !obj.classList.contains("animated")) {
            animateValue(obj, 0, 100, 3500);
            obj.classList.add("animated");
        }
    });
};

window.addEventListener("scroll", startAnimation);





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

