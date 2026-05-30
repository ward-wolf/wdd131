const today = new Date();

document.querySelector("#currentyear").textContent = today.getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Temple Array

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Davao Philippines",
    location: "Davao City, Philippines",
    dedicated: "2026, May, 3",
    area: 18450,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/773e752367cb5f90dd2d203fd6d390708ce0286a/full/400%2C/0/default"
  },
  {
    templeName: "Kyiv Ukraine",
    location: "Kyevo-Sviatonshyns'ky Rayon, Kyivs'ka Oblast, Ukraine",
    dedicated: "2010, August, 29",
    area: 22184,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/d0508e0ecf1c6d995baee78f23989e4871b613e6/full/400%2C/0/default"
  },
  {
    templeName: "Cebu City Philippines",
    location: "Cebu City, Philippines",
    dedicated: "2010, June, 13",
    area: 29556,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/3b515c363a8c71994bd6e110cf021fc84d9c90f6/full/400%2C/0/default"
  }
];

// Create and display temple cards
const main = document.querySelector('main');

function displayTemples(filteredTemples) {
    main.querySelectorAll('figure').forEach(function(fig) {
        fig.remove();
    });

    filteredTemples.forEach(function(temple) {
        const figure = document.createElement('figure');

        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} Temple`;
        img.loading = 'lazy';

        const figcaption = document.createElement('figcaption');
        figcaption.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><span class="label">Location:</span> ${temple.location}</p>
            <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
            <p><span class="label">Area:</span> ${temple.area.toLocaleString()} sq ft</p>
        `;

        figure.appendChild(figcaption);
        figure.appendChild(img);
        main.appendChild(figure);
    });
}

displayTemples(temples);

// Nav filtering
document.querySelectorAll('.navigation a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const filter = link.textContent;
        document.querySelector('main h2').textContent = filter;

        if (filter === 'Old') {
            displayTemples(temples.filter(t => parseInt(t.dedicated) < 1900));
        } else if (filter === 'New') {
            displayTemples(temples.filter(t => parseInt(t.dedicated) > 2000));
        } else if (filter === 'Large') {
            displayTemples(temples.filter(t => t.area > 90000));
        } else if (filter === 'Small') {
            displayTemples(temples.filter(t => t.area < 10000));
        } else {
            displayTemples(temples);
        }
    });
});
