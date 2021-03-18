fetch('http://localhost:3000/api/v0/definitions')
  .then(function(response){
    // JSON that is returned from the server must be converted to a JS object asynchronously.
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();
  })
  .then(function(definitions){
    // Any code that depends on the `data` must go in this block
    
    let output = '';
    definitions.forEach((definition) => {
      output += `<dt>${definition.term}</dt>
                 <dd>${definition.definition}</dd>`;
    })
    document.querySelector('.container').innerHTML = output;
  })
  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    console.log(err);
  });