// Existing code...
let c1 = document.querySelector(".c1");
let c2 = document.querySelector(".c2");
let c3 = document.querySelector(".c3");
let c4 = document.querySelector(".c4");
let c5 = document.querySelector(".c5");
let c1color = document.querySelector(".c1 h2");
let c2color = document.querySelector(".c2 h2");
let c3color = document.querySelector(".c3 h2");
let c4color = document.querySelector(".c4 h2");
let c5color = document.querySelector(".c5 h2");

function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

[c1, c2, c3, c4, c5].forEach((container, i) => {
    const color = getRandomColor();
    container.style.backgroundColor = color;
    [c1color, c2color, c3color, c4color, c5color][i].innerText = color;
});

// Function to copy color code on background click
function addCopyOnClick(container, colorElement) {
    container.addEventListener('click', function() {
        const colorCode = colorElement.innerText;
        navigator.clipboard.writeText(colorCode);
        
        //show feedback
        colorElement.innerText = "Copied!";
        setTimeout(() => {
            colorElement.innerText = colorCode;
        }, 800);
    });
}

addCopyOnClick(c1, c1color);
addCopyOnClick(c2, c2color);
addCopyOnClick(c3, c3color);
addCopyOnClick(c4, c4color);
addCopyOnClick(c5, c5color);


document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        location.reload();
    }
});
