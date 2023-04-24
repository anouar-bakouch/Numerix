// on implemente le determinant 

let determinant = (matrix)=>{
    let det = 0;
    // pour les matrices carrées
    if(matrix.length == matrix[0].length){
        for(let i=0; i<matrix.length; i++){
            let subMatrix = [];
            for(let j=0; j<matrix.length; j++){
                if(j != i){
                    subMatrix.push(matrix[j]);
                }
            }
            det += Math.pow(-1, i)*matrix[i][0]*determinant(subMatrix);
        }
    }
    return det;
}

