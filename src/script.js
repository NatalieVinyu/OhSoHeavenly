// Select all elements with the "span" tag and store them in a NodeList called "stars"
const ratings = document.querySelector(".ratings span");
console.log(ratings);

// Loop through the "stars" NodeList
ratings.forEach((star, index1) => {
    // Add an event listener that runs a function when "click" event is triggered
    star.addEventListener("click", () => {
        console.log("clicked")
    })

})