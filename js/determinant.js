// on implemente le determinant 

function determinant(matrix) {
    // Check if the matrix is square
    if (!matrix.every(row => row.length === matrix.length)) {
        return null;
    }
    // Initialize the determinant
    let det = 0;

    // Base case for 2x2 matrix
    if (matrix.length === 2) {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }

    // Loop through each element in the top row
    for (let i = 0; i < matrix.length; i++) {
        // Create a submatrix without the top row and the current column
        let submatrix = matrix.slice(1).map(row => row.filter((_, j) => j !== i));
        // Calculate the determinant of the submatrix
        let subdet = determinant(submatrix);
        // Add the element in the top row and the determinant of the submatrix
        // multiplied by the appropriate coefficient
        det += matrix[0][i] * subdet * (i % 2 === 0 ? 1 : -1);
    }

    // Return the determinant
    return abs(det);
  }
  
  export default determinant;
  