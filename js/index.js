document,
    addEventListener("DOMContentLoaded", function () {
        const item = document.querySelectorAll("ul  li");
        item.forEach((items) => {
            items.addEventListener("click", () => {
                item.forEach((items) => {
                    items.querySelector("i").style.color = "gray";
                    items.querySelector("a").style.color = "gray";
                });

                items.querySelector("i").style.color = "black";
                items.querySelector("a").style.columnRule = "black";
            });
        });
    });
const colorPicker = document.getElementById("color-picker");
const lineThickness = document.getElementById("line-thickness");
const lineThicknessValue = document.getElementById("line-thickness-value");

colorPicker.addEventListener("input", updateColor);
lineThickness.addEventListener("input", updateLineThickness);

function updateColor() {
    const selectedColor = colorPicker.value;
    // Use the selectedColor for your drawing or styling
}

function updateLineThickness() {
    const selectedLineThickness = lineThickness.value;
    lineThicknessValue.textContent = selectedLineThickness;
    // Use the selectedLineThickness for your drawing or styling
}

// JavaScript to show/hide color pickers when checkboxes are checked/unchecked

