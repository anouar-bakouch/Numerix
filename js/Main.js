// import the chart.js 
const ctx = document.getElementById('myChart');

// create a new select displaying the numerical methods
let integrationMethods = ["Simpson","Trapeze"];
let interpolationMethods = ["lagrange","difference divisees"];
let methodesDivisees = ["decomposition LU","decomposition cholesky","gauss elimination"];
let methodesIteratives = ["Jacobi","Gauss-Seidel"];
let methodesNonLineaires = ["Newton","dichotomie","point fixe"];
let simpleMethods = ["determinant","inverse"]

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

let displayMethods = () => {
    
    let nSelect = document.createElement("select");
    nSelect.id = "mathMet"
    let integrationMethodsOctGroup = document.createElement("optgroup");
    let interpolationMethodsOctGroup = document.createElement("optgroup");
    let simpleMethodsOctGroup = document.createElement("optgroup");
    let NLMethodsOctGroup = document.createElement("optgroup");

    document.getElementById("mathMet").

}

select.addEventListener("change", ()=>{
    let form = document.getElementById("form");
    if(form) form.remove();
    init();
});



