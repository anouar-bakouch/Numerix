

dichotomie = function (f, a, b, epsilon) {
    var m = (a + b) / 2;
    if (b - a < epsilon) {
        return m;
    }
    if (f(a) * f(m) < 0) {
        return dichotomie(f, a, m, epsilon);
    }
    else {
        return dichotomie(f, m, b, epsilon);
    }
}

export default dichotomie;