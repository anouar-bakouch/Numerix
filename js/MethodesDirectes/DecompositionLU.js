

let decompositionLU = (A) =>{
    var n = A.length;
    var L = new Array(n);
    var U = new Array(n);
    var i, j, k;
    var m, s;
    for (i = 0; i < n; i++) {
        L[i] = new Array(n);
        U[i] = new Array(n);
        for (j = 0; j < n; j++) {
            L[i][j] = 0;
            U[i][j] = 0;
        }
    }
    for (k = 0; k < n; k++) {
        for (i = k; i < n; i++) {
            s = 0;
            for (j = 0; j < k; j++) {
                s = s + L[i][j] * U[j][k];
            }
            L[i][k] = A[i][k] - s;
        }
        for (j = k; j < n; j++) {
            s = 0;
            for (i = 0; i < k; i++) {
                s = s + L[k][i] * U[i][j];
            }
            U[k][j] = (A[k][j] - s) / L[k][k];
        }
    }
    return [L, U];
}

solveLU = (A, b)=>{
  let { L, U } = lu(A);
  let n = A.length;
  let y = new Array(n);
  let x = new Array(n);

  // Résolution de Ly = b
  for (let i = 0; i < n; i++) {
    let s = 0;
    for (let j = 0; j < i; j++) {
      s += L[i][j] * y[j];
    }
    y[i] = b[i] - s;
  }

  // Résolution de Ux = y
  for (let i = n - 1; i >= 0; i--) {
    let s = 0;
    for (let j = i + 1; j < n; j++) {
      s += U[i][j] * x[j];
    }
    x[i] = (y[i] - s) / U[i][i];
  }

  return x;
}

export {decompositionLU , solveLU};