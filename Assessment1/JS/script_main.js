/**
 * 
 */
let clickBox1 = document.getElementById("section1")
let clickBox2 = document.getElementById("section2")
let clickBox3 = document.getElementById("section3")
let clickBox4 = document.getElementById("section4")

function jumpPage1 (){
    window.location.href = "dummyTexts.html";
}
function jumpPage2 (){
    window.location.href = "RPS.html";
}
function jumpPage3 (){
    window.location.href = "flatland_1.html";
}
function jumpPage4 (){
    window.location.href = "#";
}

clickBox1.addEventListener("click", (event) => jumpPage1())
clickBox2.addEventListener("click", (event) => jumpPage2())
clickBox3.addEventListener("click", (event) => jumpPage3())
clickBox4.addEventListener("click", (event) => jumpPage4())