// const equal = document.getElementById("equal");
// const buttons = document.querySelectorAll("button");

const display = document.getElementById("changeable");

// buttons.forEach((button)=>{
//     button.addEventListener("click",(e)=>{
//         display.innerText += e.target.innerText;
//         if(e.target.innerText == "AC"){
//             display.innerText = "";
//         }
//        if(e.target.innerText == "del"){
//            display.innerText -=  display.innerText.slice(0,-1);
//        }
//     })
// })

const buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(b => {
    b.addEventListener("click",(e)=>{
        switch (e.target.innerText) {
            case "AC":
                display.innerText = "";
                break;
            case "del":
                display.innerText = display.innerText.slice(0,-1);
                break;
            case "=":
                try {
                    display.innerText = eval(display.innerText);
                } catch (error) {
                   display.innerText = "Error"
                }
                break;
            default:
                display.innerText +=e.target.innerText;
                break;
        }
    })
})

