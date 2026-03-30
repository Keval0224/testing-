function autoSlide(id) {
    const slider = document.getElementById(id);
    let scrollAmount = 0;

    setInterval(() => {
        scrollAmount += 350;
        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
            scrollAmount = 0;
        }
        slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }, 3000);
}

autoSlide("campusSlider");
autoSlide("convocationSlider");
