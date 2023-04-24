// import All the methods
import determinant from "./determinant.js";
import inverse from "./inverse.js"

const ctx = document.getElementById('myChart');

// create a new select displaying the numerical methods
let integrationMethods = ["Simpson","Trapeze"];
let interpolationMethods = ["lagrange","difference divisees"];
let methodesDivisees = ["decomposition LU","decomposition cholesky","gauss elimination"];
let methodesIteratives = ["Jacobi","Gauss-Seidel"];
let methodesNonLineaires = ["Newton","dichotomie","point fixe"];
let simpleMethods = ["determinant","inverse"]
let nSelect = document.createElement("select"); 
nSelect.id = "mathMet";
let select = document.getElementById("select");
let matrix;
let r = 0;

let init = (selected) => {
    let div_new = document.createElement("div");
    div_new.id = "form";

    for (let j = 0; j < selected; j++) {
        let div = document.createElement("div");
        div.id = "div" + j;
        div_new.appendChild(div);

        for (let i = 0; i < selected; i++) {
            let input = document.createElement("input");
            input.type = "number";
            input.min = 0;
            input.max = 100;
            input.name = "input" + i;
            input.id = "input" + i;
            input.addEventListener("change", () => {
                matrix[j][i] = Number(input.value);
            })
            div.appendChild(input);
        }
        document.getElementById("matrix").appendChild(div_new);
    }

    document.getElementById("form").appendChild(nSelect);
    let integrationMethodsOptGroup = document.createElement("optgroup");
    integrationMethodsOptGroup.label = "integration"
    let interpolationMethodsOptGroup = document.createElement("optgroup");
    interpolationMethodsOptGroup.label = "interpolation"
    let methodesDirectesOptGroup = document.createElement("optgroup");
    methodesDirectesOptGroup.label = "Methodes Directes"
    let methodesIterativesOptGroup = document.createElement("optgroup");
    methodesIterativesOptGroup.label = "Methodes iteratives"
    let methodesNonLineairesOptGroup = document.createElement("optgroup");
    methodesNonLineairesOptGroup.label = "Methodes Non Linéaires"
    let simpleMethodsOptGroup = document.createElement("optgroup");
    simpleMethodsOptGroup.label = "methodes simples"

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
        methodesDirectesOptGroup.appendChild(option);
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
    nSelect.appendChild(methodesDirectesOptGroup);
    nSelect.appendChild(methodesIterativesOptGroup);
    nSelect.appendChild(methodesNonLineairesOptGroup);
    nSelect.appendChild(simpleMethodsOptGroup);

    matrix = new Array(selected).fill(null).map(() => new Array(selected).fill(0));
    r = selected;
}

select.addEventListener("change", () => {
    let form = document.getElementById("form");
    let select = document.getElementById("mathMet");

    if (form || select)  {
        form.remove(); 
        select.remove();
    }

    const selected = document.getElementById("select").value;
    init(selected);
});

document.getElementById("mathMet").addEventListener('change', () => {
    const selectedMethod = document.getElementById("mathMet").value;

    for (let j = 0; j < r; j++) {
        for (let i = 0; i < r; i++) {
            let input = document.getElementById(`input${i}`);
            matrix[j][i] = Number(input.value);
        }
    }

    switch(selectedMethod) {
        case "Simpson":
            // call Simpson function
            break;
        case "Trapeze":
            // call Trapeze function
            break;
        case "lagrange":
            // call lagrange function
            break;
        case "difference divisees":
            // call difference divisees function
            break;
        case "decomposition LU":
            // call decomposition LU function
            break;
        case "decomposition cholesky":
            // call decomposition cholesky function
            break;
        case "gauss elimination":
            // call gauss elimination function
            break;
        case "Jacobi":
            // call Jacobi function
            break;
        case "Gauss-Seidel":
            // call Gauss-Seidel function
            break;
        case "Newton":
            // call Newton function
            break;
        case "dichotomie":
            // call dichotomie function
            break;
        case "point fixe":
            // call point fixe function
            break;
        case "determinant":
            // call determinant function
            const det = determinant(matrix);
            console.log(`Determinant: ${det}`);
            break;
        case "inverse":
            // call inverse function
            const inv = inverse(matrix);
            console.log(`Inverse: ${inv}`);
            break;
        default:
            console.log("Unknown method selected.");
            break;
    }
});