

inverse = (matrix)=>{
    let det = determinant(matrix);
    let inv = [];
    if(det != 0){
        for(let i=0; i<matrix.length; i++){
            let row = [];
            for(let j=0; j<matrix.length; j++){
                let subMatrix = [];
                for(let k=0; k<matrix.length; k++){
                    if(k != i){
                        let subRow = [];
                        for(let l=0; l<matrix.length; l++){
                            if(l != j){
                                subRow.push(matrix[k][l]);
                            }
                        }
                        subMatrix.push(subRow);
                    }
                }
                row.push(Math.pow(-1, i+j)*determinant(subMatrix)/det);
            }
            inv.push(row);
        }
    }
    return inv;
}