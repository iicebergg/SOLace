//no right click
document.addEventListener("contextmenu", (event) => {
   event.preventDefault();
});

//settings show hide
document.getElementById("settingsbutton").addEventListener("click", toggleSettings);

//contrast settings
document.getElementById("settings").addEventListener("load", contrast);

function contrast() {
if(document.getElementById("bw").checked) {
    document.body.style.color = "#333333";
    document.body.style.backgroundColor = "#FFFFFF";
}
if(document.getElementById("bc").checked) {
    document.body.style.color = "#000000";
    document.body.style.backgroundColor = "#FFFACD";
}
if(document.getElementById("blb").checked) {
    document.body.style.color = "#000000";
    document.body.style.backgroundColor = "#ADD8E6";
}
if(document.getElementById("blm").checked) {
    document.body.style.color = "#000000";
    document.body.style.backgroundColor = "#EE82EF";
}
if(document.getElementById("wb").checked) {
    document.body.style.color = "#FFFFFF";
    document.body.style.backgroundColor = "#000000";
}
if(document.getElementById("yb").checked) {
    document.body.style.color = "#F5E728";
    document.body.style.backgroundColor = "#1800CC";
}
if(document.getElementById("gg").checked) {
    document.body.style.color = "#6E6E6E";
    document.body.style.backgroundColor = "#A3AE9E";
}
}

//start test
document.getElementById("startbutton").addEventListener("click", startTest);

function startTest() {
    document.getElementById("start").style.display = "none";
    document.getElementById("q1").style.display = "block";
}

//skip or next
document.getElementById("skip").addEventListener("click", nextQuestion);
document.getElementById("next").addEventListener("click", nextQuestion);

function nextQuestion() {
    document.getElementById("q1").style.display = "none";
    document.getElementById("q2").style.display = "block";
}