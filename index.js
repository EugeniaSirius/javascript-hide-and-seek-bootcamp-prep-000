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

function increaseRankBy(n)  {
  let upRank = document.getElementById('app').querySelectorAll('.ranked-list')
  for (let i=0; i<upRank.length; i++)  {
    return 
  }
}