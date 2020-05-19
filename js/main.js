var color1 = document.getElementById("color1"),
    color2 = document.getElementById("color2"),
    myBody = document.getElementById("body"),
    output = document.getElementById("result"),
    button = document.getElementById("copyText");

output.value = "background: linear-gradient(" + color1.value + ", " + color2.value + ");";

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
button.addEventListener("click", copyText);

function changeColor() {
    console.log(color1.value, color2.value);

    myBody.style.background = "linear-gradient(" + color1.value + ", " + color2.value + ")"

    output.value = "background: linear-gradient(" + color1.value + ", " + color2.value + ");";

    button.style.background = "linear-gradient(" + color1.value + ", " + color2.value + ")"

    console.log(output.value);

}

function copyText() {
    let textarea = document.getElementById("result");
    textarea.select();
    document.execCommand("copy");
}