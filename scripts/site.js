const yearElement = document.getElementById("currentyear");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


const modifiedElement = document.getElementById("lastModified");
if (modifiedElement) {
    modifiedElement.textContent = `Last Modification: ${document.lastModified}`;
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
