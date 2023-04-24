// import All the methods
import determinant from "./determinant.js";
import inverse from "./inverse.js";
// import DifferenceDivisees from "./Interpolation/DifferenceDivisees.js";
import lagrange from "../js/Interpolation/Lagrange.js";
import DecompositionLU from "./MethodesDirectes/DecompositionLU.js";
import DecompositionCholesky from "./MethodesDirectes/DecompositionCholesky.js";
import GaussElimination from "./MethodesDirectes/GaussElimination.js";
import Jacobi from './MethodesIteratives/Jacobi.js';
import GaussSeidel from './MethodesIteratives/GaussSeidel.js';
import Dichotomie from './Systèmes Non Linéaires/Dichotomie.js';
import Newton from './Systèmes Non Linéaires/NewtonNdim.js';
import PointFixe from './Systèmes Non Linéaires/PointFixe.js';
import Simpson from './Integration/Simpson.js';
import Trapeze from './Integration/Trapeze.js';

const ctx = document.getElementById('myChart');

// create a new select displaying the numerical methods
let integrationMethods = ["Simpson", "Trapeze"];
let interpolationMethods = ["lagrange", "difference divisees"];
let methodesDivisees = ["decomposition LU", "decomposition cholesky", "gauss elimination"];
let methodesIteratives = ["Jacobi", "Gauss-Seidel"];
let methodesNonLineaires = ["Newton", "dichotomie", "point fixe"];
let simpleMethods = ["determinant", "inverse"]
let nSelect = document.createElement("select");
nSelect.id = "mathMet";
let select = document.getElementById("select");
let matrice = null;
let btn = document.createElement("button");
btn.textContent = "Calculer";
btn.id = "btn";
let r = 0;

// Initialize matrix inputs
const init = (selected) => {
    matrice = new Array(selected);

    for (let i = 0; i < selected; i++) {
        matrice[i] = new Array(selected).fill(0);
    }

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
                matrice[j][i] = Number(input.value);
            });
            div.appendChild(input);
        }
        document.getElementById("matrice").appendChild(div_new);
    }

    addMethods();
    document.getElementById("form").appendChild(nSelect);
    document.getElementById("form").appendChild(btn);

}

// Add options to select element
const addMethods = () => {
    // Remove existing options before adding new ones
    nSelect.innerHTML = '';

    // Fill each optgroup element with its corresponding array
    integrationMethods.forEach((method) => {
        let option = document.createElement("option");
        option.value = method;
        option.textContent = method;
        nSelect.appendChild(option);
    });

    interpolationMethods.forEach((method) => {
        let option = document.createElement("option");
        option.value = method;
        option.textContent = method;
        nSelect.appendChild(option);

    });

    methodesDivisees.forEach((method) => {
        let option = document.createElement("option");
        option.value = method;
        option.textContent = method;
        nSelect.appendChild(option);

    });

    methodesIteratives.forEach((method) => {
        let option = document.createElement("option");
        option.value = method;
        option.textContent = method;
        nSelect.appendChild(option);

    });

    methodesNonLineaires.forEach((method) => {
        let option = document.createElement("option");
        option.value = method;
        option.textContent = method;
        nSelect.appendChild(option);

    });

    simpleMethods.forEach((method) => {
        let option = document.createElement("option");
        option.value = method;
        option.textContent = method;
        nSelect.appendChild(option);

    });
}

// Attach event listeners to page elements
select.addEventListener("change", () => {
    let form = document.getElementById("form");

    if (form) { // Check if form exists before removing it
        form.remove();
    }

    let selected = parseInt(document.getElementById("select").value);
    init(selected);
});

let resDiv = document.getElementById("res");
let p = document.createElement("p");
p.id = "p";
resDiv.appendChild(p);

btn.addEventListener("click", () => {
    const selectedMethod = document.getElementById("mathMet").value;


    // delete p before adding new content
    if (p) {
        p.remove();
    }
switch (selectedMethod) {
  case "Simpson":
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
    let lu = new DecompositionLU(matrice);
    let l = lu.getL();
    let u = lu.getU();
    let p = lu.getP();
    // display the res using chart.js
    let data = {
      labels: ["L", "U", "P"],
      datasets: [
        {
          label: "L",
          data: l,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
        {
          label: "U",
          data: u,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
        {
          label: "P",
          data: p,
          backgroundColor: "rgba(255, 206, 86, 0.2)",
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 1,
        },
      ],
    };
    let ctx = document.getElementById("myChart").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    
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
    const det = determinant(matrice);
    // display the result in p
    p = document.createElement("p");
    p.id = "p";
    resDiv.appendChild(p);
    p.textContent = `Determinant: ${det}`;
    break;
  case "inverse":
    // call inverse function
    const inv = inverse(matrice);
    console.log(`Inverse: ${inv}`);
    break;
  default:
    console.log("Unknown method selected.");
    break;
}
});

