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


let nSelect = document.createElement("select");
nSelect.id = "mathMet";
document.getElementById("matrix").appendChild(nSelect);
let displayMethods = (x) => {    
    let integrationMethodsOptGroup = document.createElement("optgroup");
    let interpolationMethodsOptGroup = document.createElement("optgroup");
    let methodesDiviseesOptGroup = document.createElement("optgroup");
    let methodesIterativesOptGroup = document.createElement("optgroup");
    let methodesNonLineairesOptGroup = document.createElement("optgroup");
    let simpleMethodsOptGroup = document.createElement("optgroup");

    if(x){
        // Fill each optgroup element with its corresponding array
        integrationMethods.forEach((method) => {
            let option = document.createElement("option");
            option.value = method;
            option.textContent = method;
            integrationMethodsOptGroup.appendChild(option);
        });

        interpolationMethods.forEach((method) => {
            let option = document.createElement("option");
            option.value = method;
            option.textContent = method;
            interpolationMethodsOptGroup.appendChild(option);
        });

        methodesDivisees.forEach((method) => {
            let option = document.createElement("option");
            option.value = method;
            option.textContent = method;
            methodesDiviseesOptGroup.appendChild(option);
        });

        methodesIteratives.forEach((method) => {
            let option = document.createElement("option");
            option.value = method;
            option.textContent = method;
            methodesIterativesOptGroup.appendChild(option);
        });

        methodesNonLineaires.forEach((method) => {
            let option = document.createElement("option");
            option.value = method;
            option.textContent = method;
            methodesNonLineairesOptGroup.appendChild(option);
        });

        simpleMethods.forEach((method) => {
            let option = document.createElement("option");
            option.value = method;
            option.textContent = method;
            simpleMethodsOptGroup.appendChild(option);
        });

        // Append all optgroups to the select element
        nSelect.appendChild(integrationMethodsOptGroup);
        nSelect.appendChild(interpolationMethodsOptGroup);
        nSelect.appendChild(methodesDiviseesOptGroup);
        nSelect.appendChild(methodesIterativesOptGroup);
        nSelect.appendChild(methodesNonLineairesOptGroup);
        nSelect.appendChild(simpleMethodsOptGroup);
    }
}

nSelect.addEventListener('change',()=>{
    const selectedOption = nSelect.value;
    console.log("Selected option is: " + selectedOption);
})


select.addEventListener("change", ()=>{
    let form = document.getElementById("form");
    if(form) form.remove();
    init();
});



