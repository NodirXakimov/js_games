const cells = document.querySelectorAll(".cell");
let activeX = true;


cells.forEach(cell => {
    cell.addEventListener("click", function() {
        if(!this.classList.contains("x") && !this.classList.contains("o")) {
            if(activeX) {
                this.classList.add("x");
            } else {
                this.classList.add("o");
            }
            activeX = !activeX;
        }
    })
})


// Actions with keyboard keys
document.addEventListener("keydown", function(event){
    switch(+event.key) {
        case 1: alert("1"); break;
        case 2: alert("2"); break;
        case 3: alert("3"); break;
        case 4: alert("4"); break;
        case 5: alert("5"); break;
        case 6: alert("6"); break;
        case 7: alert("7"); break;
        case 8: alert("8"); break;
        case 9: alert("9"); break;
    }
})