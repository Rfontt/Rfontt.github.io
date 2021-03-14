var xhr = new XMLHttpRequest();

var document = {
	"name": "Empres",
 	"subject": "Contratar",
  "message": "Desejo contratar você."
}

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    console.log(xhr);
  }
}

xhr.open("POST", "http://localhost:8080/contact");

xhr.send(document);
