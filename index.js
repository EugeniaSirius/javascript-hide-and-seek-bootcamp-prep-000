function getFirstSelector(selector)  {
 return document.querySelector(selector) 
}

function nestedTarget()  {
return document.querySelector('#nested').querySelector('.target')
}

function deepestChild()  {
let li=document.getElementById('grand-node').querySelectorAll('div')
 return li[li.length-1]
}

