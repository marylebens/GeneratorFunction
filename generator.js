//Declare the generator function
//The * after the function keyword indicates this is a special generator function
function* transposeGenerator(matrix) {
    
    // Compute the dimensions of the matrix (the data table)
    const numRows = matrix.length;
    const numCols = matrix[0].length;


    // Use nested for loops to yield the elements of the transposed matrix
    for (let col = 0; col < numCols; col++) {
        for (let row = 0; row < numRows; row++) {
            //The yield keyword pauses execution of the function
            yield matrix[row][col]; 
        }
    }
}

//Construct a rectangular 2D array containing the Starbuzz coffee data
const data = [
    ['1', '2', '3'],
    ['6', '5', '4']];

//Call the generator function to get the IteratorResult containing the
//transposed data
const generator = transposeGenerator(data);

//Call the next() function on the IteratorResult object to get the first
//data value in the transposed data
let result = generator.next();

//Iterate through the elements in the IteratorResult, displaying each
//data value in the sequence in the console.
//The done function indicates if there is another value in the collection - it
//will return true when there isn't another value left.
while (!result.done) { 
    console.log(result.value);  // Prints the current value
    result = generator.next();  // Gets the next value
}


