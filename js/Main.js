// take the selected option and create a list of inputs based on the number of options

let select = document.getElementById("select");
let init = ()=>{
    
    let selected = document.getElementById("select").value;
    let div_new = document.createElement("div");
    div_new.id = "form";

        for(let j = 0;j<selected;j++){
            // create div based on the selected value
            let div = document.createElement("div");
            div.id = "div" + j;
            div_new.appendChild(div);
            // create input based on the selected * selected value
            for (let i = 0; i < selected; i++) {
                let input = document.createElement("input");
                input.type = "number";
                input.min = 0;
                input.max = 100;
                input.name = "input" + i;
                input.id = "input" + i;
                div.appendChild(input);
                document.getElementById("matrix").appendChild(div);
                div_new.appendChild(div);
            }
   
    }  
    document.getElementById("matrix").appendChild(div_new);
}

select.addEventListener("change", ()=>{
    let form = document.getElementById("form");
    if(form) form.remove();
    init();
});

