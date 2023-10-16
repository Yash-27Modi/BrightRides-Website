const cars = [
    { make: "Toyota", model: "Camry", year: 2018, mileage: 30000, price: 15000, image: "cars/car1.jpg", description: "Great condition, low mileage.", phoneNumber: "123-456-7890" },
    { make: "Honda", model: "Civic", year: 2017, mileage: 25000, price: 12000, image: "cars/car2.jpg", description: "Reliable compact car with excellent fuel efficiency.", phoneNumber: "987-654-3210" },
    { make: "Audi", model: "Q5", year: 2020, mileage: 18000, price: 38000, image: "./cars/car3.jpg", description: "Luxury SUV with advanced features.", phone: "555-555-5555" },
    { make: "Nissan", model: "Rogue", year: 2019, mileage: 21000, price: 24000, image: "./cars/car4.jpg", description: "Midsize SUV with spacious interior.", phone: "555-555-5555" },
    { make: "Chevrolet", model: "Equinox", year: 2020, mileage: 15000, price: 27000, image: "./cars/car5.jpg", description: "Compact SUV with modern technology.", phone: "555-555-5555" },
    { make: "Ford", model: "Escape", year: 2018, mileage: 26000, price: 19000, image: "./cars/car6.jpg", description: "Versatile SUV for city and outdoor adventures.", phone: "555-555-5555" },
    { make: "Hyundai", model: "Tucson", year: 2019, mileage: 22000, price: 22000, image: "./cars/car7.jpg", description: "Compact SUV with a comfortable ride.", phone: "555-555-5555" },
    { make: "Toyota", model: "Highlander", year: 2018, mileage: 28000, price: 32000, image: "./cars/car8.jpg", description: "Midsize SUV known for reliability.", phone: "555-555-5555" },
    { make: "Kia", model: "Sorento", year: 2019, mileage: 19000, price: 25000, image: "./cars/car9.jpg", description: "Family-friendly SUV with a stylish design.", phone: "555-555-5555" },
    { make: "Subaru", model: "Forester", year: 2020, mileage: 17000, price: 29000, image: "./cars/car10.jpg", description: "All-wheel-drive SUV built for adventure.", phone: "555-555-5555" },
    { make: "Mazda", model: "CX-5", year: 2018, mileage: 24000, price: 24000, image: "./cars/car11.jpg", description: "Stylish SUV with a premium interior.", phone: "555-555-5555" },
    { make: "Honda", model: "HR-V", year: 2019, mileage: 21000, price: 21000, image: "./cars/car12.jpg", description: "Subcompact SUV with efficient performance.", phone: "555-555-5555" },
    { make: "Jeep", model: "Cherokee", year: 2018, mileage: 26000, price: 26000, image: "./cars/car13.jpg", description: "Off-road SUV with rugged capabilities.", phone: "555-555-5555" },
    { make: "Lexus", model: "RX", year: 2020, mileage: 15000, price: 42000, image: "./cars/car14.jpg", description: "Luxury SUV with a quiet and comfortable cabin.", phone: "555-555-5555" },
    { make: "Volkswagen", model: "Tiguan", year: 2019, mileage: 22000, price: 28000, image: "./cars/car15.jpg", description: "Compact SUV with a spacious interior.", phone: "555-555-5555" },
    { make: "Ford", model: "Edge", year: 2018, mileage: 28000, price: 26000, image: "./cars/car16.jpg", description: "Midsize SUV with strong performance.", phone: "555-555-5555" },
    { make: "Chevrolet", model: "Traverse", year: 2020, mileage: 17000, price: 34000, image: "./cars/car17.jpg", description: "Full-size SUV with seating for the family.", phone: "555-555-5555" },
    { make: "BMW", model: "X3", year: 2019, mileage: 18000, price: 42000, image: "./cars/car18.jpg", description: "Luxury compact SUV with dynamic handling.", phone: "555-555-5555" },
    { make: "Acura", model: "MDX", year: 2020, mileage: 15000, price: 39000, image: "./cars/car19.jpg", description: "Premium SUV with advanced safety features.", phone: "555-555-5555" },
    { make: "Tesla", model: "Model X", year: 2020, mileage: 9000, price: 72000, image: "./cars/car20.jpg", description: "Electric SUV with cutting-edge technology.", phone: "555-555-5555" },
];

function generateCarListings() {
    const carListings = document.querySelector(".car-listings");

    cars.forEach(car => {
        const listing = document.createElement("div");
        listing.classList.add("car-listing");

        listing.innerHTML = `
            <img src="${car.image}" alt="${car.make} ${car.model}">
            <h3>${car.make} ${car.model}</h3>
            <div class="car-details">
                <p>Year: ${car.year}</p>
                <p>Mileage: ${car.mileage} miles</p>
                <p>Price: $${car.price}</p>
                <p>Description: ${car.description}</p>
                <p>Contact: ${car.phoneNumber}</p>
            </div>
        `;

        carListings.appendChild(listing);
    });
}

function filterCarListings() {
    const searchInput = document.querySelector(".search-bar input");
    const searchTerm = searchInput.value.toLowerCase();
    const carListings = document.querySelectorAll(".car-listing");

    carListings.forEach((listing, index) => {
        const carInfo = `${cars[index].make} ${cars[index].model} ${cars[index].year}`;
        const carDetails = listing.querySelector(".car-details");

        if (carInfo.toLowerCase().includes(searchTerm)) {
            listing.style.display = "block";
            carDetails.classList.remove("hidden");
        } else {
            listing.style.display = "none";
            carDetails.classList.add("hidden");
        }
    });
}

const searchInput = document.querySelector(".search-bar input");
searchInput.addEventListener("input", filterCarListings);

// Call the function to generate car listings
generateCarListings();

// Add event listener for the form
const addCarForm = document.getElementById("add-car-form");

addCarForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const make = document.getElementById("make").value;
    const model = document.getElementById("model").value;
    const year = document.getElementById("year").value;
    const mileage = document.getElementById("mileage").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    
    // Capture the selected image file
    const carImageInput = document.getElementById("carImage");
    const carImageFile = carImageInput.files[0]; // Get the first selected file
    
    // Check if an image file was selected
    if (!carImageFile) {
        alert("Please select a car image.");
        return;
    }
    
    // Create a new car object with the image file
    const newCar = {
        make: make,
        model: model,
        year: year,
        mileage: mileage,
        price: price,
        description: description,
        phoneNumber: phoneNumber,
        imageFile: carImageFile // Store the image file in the object
    };

    // Add the new car to the cars array
    cars.push(newCar);

    // Reset the form
    addCarForm.reset();

    // Re-generate car listings
    generateCarListings();
});