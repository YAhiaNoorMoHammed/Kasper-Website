let menuBtn = document.getElementById('menu-btn');
let mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
let shuffled_landing = document.querySelectorAll('#shuffled_landing li');
shuffled_landing.forEach(items =>{
    items.addEventListener('click', () =>{
        shuffled_landing.forEach(li =>{
            li.classList.remove('bg-cyan-400');
            li.classList.add('bg-transparent', 'border', 'border-solid', 'border-white');
        });
        items.classList.remove('bg-transparent', 'border', 'border-solid', 'border-white');
        items.classList.add('bg-cyan-400');
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll("#shuffled_portfolio li");
    const contentSections = document.querySelectorAll("[id^='portfolio_content_']");
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const filter = this.getAttribute("data-filter");
            contentSections.forEach(section => {
                section.classList.add("hidden");
                section.classList.remove("grid");
            });
            const selectedSection = document.querySelector(`#portfolio_content_${filter}`);
            selectedSection.classList.remove("hidden");
            selectedSection.classList.add("grid");
            filterButtons.forEach(btn => {
                btn.classList.remove("bg-cyan-400", "text-white");
                btn.classList.add("bg-transparent", "text-black");
            });
            this.classList.add("bg-cyan-400", "text-white");
            this.classList.remove("bg-transparent", "text-black");
        });
    });
    document.querySelector(`#portfolio_content_all`).classList.add("grid");
    filterButtons[0].classList.add("bg-cyan-400", "text-white");
});
let testimonialShuffled = document.querySelectorAll('#testimonial_shuffled li');
testimonialShuffled.forEach(items =>{
    items.addEventListener('click' ,() =>{
        testimonialShuffled.forEach(li =>{
            li.classList.remove('bg-cyan-400');
            li.classList.add('border', 'border-solid', 'border-black');
        });
        items.classList.remove('border', 'border-solid', 'border-black');
        items.classList.add('bg-cyan-400');
    });
});