
// "use strict"
console.log((Math.floor(Math.random()))

window.addEventListener('DOMContentLoaded', () =>{

const body = document.querySelector('body');
let textNodes = [];
function recursy (element) {

    element.childNodes.forEach(node => {

        if (node.nodeName.match(/^H\d/)){   //Отбрасываем пустые ноды
            const obj = {
                header: node.nodeName,
                content: node.textContent
            };
            textNodes.push(obj);
        }else{
            recursy(node);
        }
    });
}
recursy(body);
let data = JSON.stringify(textNodes);

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
      },
    body: data
})
  .then(response => response.json())
  .then(json => console.log(json));
});