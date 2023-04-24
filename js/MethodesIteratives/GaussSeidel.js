

gaussSeidel = function (A, b, x0, tol, maxIter) {
    var n = A.length;
    var x = new Array(n);
    var i, j, k;
    var m, s;
    for (k = 0; k < n - 1; k++) {
        for (i = k + 1; i < n; i++) {
            m = A[i][k] / A[k][k];
            for (j = k + 1; j < n; j++) {
                A[i][j] = A[i][j] - m * A[k][j];
            }
            b[i] = b[i] - m * b[k];
        }
    }
    x[n - 1] = b[n - 1] / A[n - 1][n - 1];
    for (i = n - 2; i >= 0; i--) {
        s = 0;
        for (j = i + 1; j < n; j++) {
            s = s + A[i][j] * x[j];
        }
        x[i] = (b[i] - s) / A[i][i];
    }
    return x;
}

export default gaussSeidel;