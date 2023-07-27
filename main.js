const preview = document.querySelector(".square-preview");
const clipboard = document.querySelector(".clipboard");
const value_code = document.querySelector(".value-code");
const inputs = document.querySelectorAll("input");

inputs.forEach((input)=>{
      input.addEventListener("input", updateShadow);
});

function updateShadow(){
      const x_offset = document.querySelector(".x input").value,
            y_offset = document.querySelector(".y input").value,
            spread_radius = document.querySelector(".spread-cg input").value,
            blur_radius = document.querySelector(".blur-cg input").value,
            color_input = document.querySelector(".color-cg input").value;
    value_code.textContent = `${x_offset}px ${y_offset}px ${blur_radius}px ${spread_radius}px ${color_input}`;
    preview.style.boxShadow = `${x_offset}px ${y_offset}px ${blur_radius}px ${spread_radius}px ${color_input}`;
}

clipboard.addEventListener('click', ()=>{
    navigator.clipboard.writeText(`box-shadow: ${value_code.textContent};`);
    setTimeout(()=>{
        document.querySelector(".clipboard i").className = "fa-regular fa-clipboard";
        document.querySelector(".clipboard i").style.color = "#fff";
    }, 2000);
    document.querySelector(".clipboard i").className = "fa-solid fa-check";
    document.querySelector(".clipboard i").style.color = "#06c636";
});

updateShadow();