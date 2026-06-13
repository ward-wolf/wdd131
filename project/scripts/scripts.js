// Date and last modified

const today = new Date();

document.querySelector("#currentyear").textContent = today.getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Hamburger menu toggle

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('header nav');

hamButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    hamButton.setAttribute('aria-expanded', isOpen);
});

// Home country options for the enrollment form

const countries = [
    { name: "Argentina", value: "argentina" },
    { name: "Brazil", value: "brazil" },
    { name: "Chile", value: "chile" },
    { name: "Colombia", value: "colombia" },
    { name: "Egypt", value: "egypt" },
    { name: "Indonesia", value: "indonesia" },
    { name: "Peru", value: "peru" },
    { name: "Philippines", value: "philippines" },
    { name: "Poland", value: "poland" },
    { name: "South Africa", value: "south-africa" },
    { name: "Taiwan", value: "taiwan" },
    { name: "Thailand", value: "thailand" },
    { name: "Ukraine", value: "ukraine" },
    { name: "Vietnam", value: "vietnam" },
    { name: "Other", value: "other" }
];

function populateCountryOptions(select, countryList) {
    countryList.forEach(function(country) {
        const option = document.createElement("option");
        option.value = country.value;
        option.textContent = country.name;
        select.appendChild(option);
    });
}

const countrySelect = document.querySelector("#home-country");

if (countrySelect) {
    populateCountryOptions(countrySelect, countries);

    // Reveal the "specify your country" field when "Other" is selected
    const otherCountryLabel = document.querySelector("#other-country-label");
    const otherCountryInput = document.querySelector("#other-country");

    countrySelect.addEventListener("change", function() {
        if (countrySelect.value === "other") {
            otherCountryLabel.hidden = false;
            otherCountryInput.hidden = false;
            otherCountryInput.required = true;
        } else {
            otherCountryLabel.hidden = true;
            otherCountryInput.hidden = true;
            otherCountryInput.required = false;
        }
    });
}

// Carousel setup for mobile (success stories, learning grid)

function setupCarousel(carouselSelector, gridSelector) {
    const carousel = document.querySelector(carouselSelector);

    if (!carousel) {
        return;
    }

    const figures = carousel.querySelectorAll(`${gridSelector} figure`);
    const prevButton = carousel.querySelector(".carousel-prev");
    const nextButton = carousel.querySelector(".carousel-next");

    if (!figures.length || !prevButton || !nextButton) {
        return;
    }

    let currentIndex = 0;

    function showFigure(index) {
        figures.forEach(function(figure, i) {
            figure.classList.toggle("active", i === index);
        });
    }

    prevButton.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + figures.length) % figures.length;
        showFigure(currentIndex);
    });

    nextButton.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % figures.length;
        showFigure(currentIndex);
    });
}

setupCarousel(".success-carousel", ".success-grid");
setupCarousel(".learning-carousel", ".learning-grid");

// Save the enrollee's name so it can be displayed on the confirmation page

const fullNameInput = document.querySelector("#full-name");

if (fullNameInput) {
    fullNameInput.form.addEventListener("submit", function() {
        localStorage.setItem("fullName", fullNameInput.value);
    });
}

// Display the enrolled user's first name on the confirmation page

function displayFirstName() {
    const firstNameSpan = document.querySelector("#first-name");

    if (!firstNameSpan) {
        return;
    }

    const fullName = localStorage.getItem("fullName");

    if (fullName) {
        const firstName = fullName.trim().split(" ")[0];
        firstNameSpan.textContent = `${firstName}!`;
    } else {
        firstNameSpan.textContent = `friend!`;
    }
}

displayFirstName();
