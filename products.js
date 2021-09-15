function askHello() {
  fetch("http://localhost:3000/api/teddies")  //connection to server 
  .then(function(res) {
    if (res.ok) {
      return res.json();   // get a response (JSON format) from the web service if everyrthing went OK
    }
  })
  .then(function(value) {
    document
        .getElementById("hello-result")
        .innerText = value.queryString.greetings;
  })
  .catch(function(err) {
    // Une erreur est survenue
  });
}

document
  .getElementById("ask-hello")
  .addEventListener("click", askHello);
