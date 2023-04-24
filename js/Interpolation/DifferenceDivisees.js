

let DifferenceDivisees = (points)=> { // points: array of points
    var n = points.length;
    var i, j;
    var p = 0;
    for (i = 0; i < n; i++) {
        var l = 1;
        for (j = 0; j < n; j++) {
            if (i != j) {
                l = l * (z - x[j]) / (x[i] - x[j]);
            }
        }
        p = p + y[i] * l;
    }
    return p;
}


export default DifferenceDivisees;