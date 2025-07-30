document.addEventListener("DOMContentLoaded", function () {
const navItems = document.querySelectorAll(".nav-list li");
const contentItems = document.querySelectorAll(".content_list li");

    navItems.forEach((navItem, index) => {
      navItem.addEventListener("click", function (e) {
        e.preventDefault();

        navItems.forEach(item => item.classList.remove("on"));
        this.classList.add("on");

        contentItems.forEach(item => item.classList.remove("active"));
        contentItems[index].classList.add("active");
      });
    });
});