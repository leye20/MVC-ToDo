// Grab the index
const allToDos = document.getElementById( 'index' );
// if available, proceed.
if ( allToDos )
{ // Run Axios to obtain list.
    axios.get( 'https://localhost:44364/api/ToDoItems/' )
    // Get just the data from the response.
    .then( response => response.data )
    // "Process" our data (JSON object or array.)
    .then( data => {
        console.log( data );
        // Output list of todos.
        // data.forEach( toDo => {

        // });
    });
}

// Grab the index
const createToDo = document.getElementById( 'create' );