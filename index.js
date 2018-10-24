function getFirstSelector(selector)  {
 return document.querySelector(selector) 
}

function nestedTarget()  {
return document.querySelector('#nested').querySelector('.target')
}

function deepestChild()  {
let li=document.getElementById('grand-node').querySelectorAll('div')
for (let i=0; i<li.length; i++)  {
  li[i].innerHTML = (i+1).toString()
  return li[i]
}
}