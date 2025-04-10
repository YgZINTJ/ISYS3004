/**
 * 
 */
var clickBox1 = document.getElementById("section1");
var clickBox2 = document.getElementById("section2");
var clickBox3 = document.getElementById("section3");
var clickBox4 = document.getElementById("section4");

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
    window.location.href = "RSS.html";
}

clickBox1.addEventListener("click", (event) => jumpPage1());
clickBox1.addEventListener("keypress", function(event){
    if(event.key==="Enter"){
        jumpPage1()
    }
});

clickBox2.addEventListener("click", (event) => jumpPage2());
clickBox2.addEventListener("keypress", function(event){
    if(event.key==="Enter"){
        jumpPage2()
    }
});

clickBox3.addEventListener("click", (event) => jumpPage3());
clickBox3.addEventListener("keypress", function(event){
    if(event.key==="Enter"){
        jumpPage3()
    }
});

clickBox4.addEventListener("click", (event) => jumpPage4());
clickBox4.addEventListener("keypress", function(event){
    if(event.key==="Enter"){
        jumpPage4()
    }
});
