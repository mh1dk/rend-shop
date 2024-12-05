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
        animateValue(obj,0, 100, 1500);
        obj.classList.add("animated"); // جلوگیری از اجرای دوباره انیمیشن
      }
    });
  };

  window.addEventListener("scroll", startAnimation);
