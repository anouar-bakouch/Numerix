

PointFixe = function (f, x0, epsilon, maxIter) {
    var x = new Array(x0.length);
    var i, j, k;
    var m, s;
    var n = x0.length;
    var J = new Array(n);
    for (i = 0; i < n; i++) {
        J[i] = new Array(n);
    }
    var F = new Array(n);
    var x1 = new Array(n);
    for (k = 0; k < maxIter; k++) {
        F = f(x0);
        J = jacobienne(f, x0);
        x1 = jacobi(J, F, x0, epsilon, maxIter);
        if (norme2(x1, x0) < epsilon) {
            return x1;
        }
        x0 = x1;
    }
    return x1;
}