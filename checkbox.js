const checkboxes = document.querySelectorAll(".inbox [type='checkbox']")
console.log(checkboxes)

let lastChecked;

function handleCheck(event){
    console.log(event)
let inBetween = false;
if (event.shiftKey && this.checked){
    checkboxes.forEach(checkbox => {
        console.log(checkbox);
        if (checkbox === this || checkbox === lastChecked) {
          inBetween = !inBetween;
          console.log('Check in between');
        }
    if (inBetween){
        checkbox.checked = true;

    };
    });
}
    lastChecked = this;
}



checkboxes.forEach(checkbox => checkbox.addEventListener("click",handleCheck))