

decompositionCholesky = function (matrice) {
    
        var n = matrice.length;
        var L = new Array(n);
        var i, j, k;
    
        for (i = 0; i < n; i++) {
            L[i] = new Array(n);
            for (j = 0; j < n; j++) {
                L[i][j] = 0;
            }
        }
    
        for (i = 0; i < n; i++) {
            for (j = 0; j < (i + 1); j++) {
                var somme = 0;
                for (k = 0; k < j; k++) {
                    somme += L[i][k] * L[j][k];
                }
                if (i == j) {
                    L[i][j] = Math.sqrt(matrice[i][i] - somme);
                } else {
                    L[i][j] = (1.0 / L[j][j] * (matrice[i][j] - somme));
                }
            }
        }
    
        return [L, L.transpose()];
    }