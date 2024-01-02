const mainheading = document.getElementById("main-heading")
const subHeading = document.createElement("h3");
subHeading.textContent = "Buy high quality organic fruits online";
mainheading.parentElement.insertBefore(subHeading,mainheading.nextSibling);
subHeading.style.fontStyle = "italic"

const para = document.createElement("p")
para.textContent = "Total fruits: 4"
para.id = "fruits-total"
const div = document.getElementsByTagName("div")
const  secondDiv = div[1]
secondDiv.appendChild(para)