

decompositionLU = (A) =>{
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