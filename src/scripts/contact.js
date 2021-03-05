var xhr = new XMLHttpRequest();

var document = {
  "name": "Teste",
	"subject": "Teste",
	"message": "Teste"
}

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    console.log(xhr);
  }
}

xhr.open("POST", "http://localhost:8080/information");

xhr.send({"name": "Teste",
"subject": "Teste",
"message": "Teste"})
