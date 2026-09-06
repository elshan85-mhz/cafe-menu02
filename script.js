// =========================
// MENU FILTER
// =========================

const categories = document.querySelectorAll(".category");
const products = document.querySelectorAll(".product-card");

categories.forEach(category => {

    category.addEventListener("click", () => {

        // Active category
        categories.forEach(item => {
            item.classList.remove("active");
        });

        category.classList.add("active");


        // Selected category
        const selectedCategory = category.dataset.category;


        // Filter products
        products.forEach(product => {

            const productCategory = product.dataset.category;

            if (
                selectedCategory === "all" ||
                productCategory === selectedCategory
            ) {
                product.style.display = "flex";
            } else {
                product.style.display = "none";
            }

        });

    });

});


// =========================
// MOBILE MENU BUTTON
// =========================

const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {

    alert("منوی کافه به‌زودی کامل‌تر میشه ☕✨");

});


// =========================
// SCROLL ANIMATION
// =========================

const cards = document.querySelectorAll(".product-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.1
});


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(25px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});