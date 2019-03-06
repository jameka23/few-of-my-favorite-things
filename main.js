console.log("End of day lesson.")
const things = document.getElementById("things")
const locations = document.getElementById("location")
const wishlist = document.querySelector(".wishlist")

document.getElementById("saveButton").addEventListener("click", function(event){
    wishlist.innerHTML = `I can purchase ${things.value} at ${locations.value}.`
    wishlist.textContent = ""
})