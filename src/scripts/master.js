let presentation = document.querySelector('#presentation');
let fullstack = document.querySelector('#fullstack');

function PrinterEffect(element) {
  const textArray = element.innerHTML.split('');

  element.innerHTML = '';

  textArray.forEach((item, index) => {
    setTimeout(() => {
      element.innerHTML += item;
    }, (500 * index))
  });

}

PrinterEffect(presentation);
PrinterEffect(fullstack);
