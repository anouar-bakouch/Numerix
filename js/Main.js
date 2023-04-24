// take the selected option and create a list of inputs based on the number of options

let select = document.getElementById("select");
let init = ()=>{
    let selected = document.getElementById("select").value;
let div_new = document.createElement("div");
div_new.id = "form";

    for (let i = 0; i < selected; i++) {
        let input = document.createElement("input");
        input.type = "text";
        input.name = "input" + i;
        input.id = "input" + i;
        input.placeholder = "input" + i;
        div_new.appendChild(input);
        document.getElementById("matrix").appendChild(div_new);
    }
    // delete the previous form if it exists
    if (document.getElementById("form")) {
        document.getElementById("matrix").removeChild(document.getElementById("form"));
    }
}
select.addEventListener("change", init);
