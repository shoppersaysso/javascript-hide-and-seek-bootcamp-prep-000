function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  // pulls .target out of #nested
  return document.querySelector('div.target')
}

function deepestChild() {
//pulls the most deeply nested child from div#grand-node
  let child = document.getElementById('grand-node')
  let nextChild = child.children[0]

  while (nextChild) {
    child = nextChild
    nextChild = child.children[0]
  }
  return child
}

function increaseRankBy(n) {
  //increases the ranks in all of the .ranked-list's by n, might need parseInt()
  const rankedList = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedList.length; i < l; i++) {
    let ranks = rankedList[i].children

      for (let a = 0, b = ranks.length; a < b; a++) {
        ranks[a].innerHTML = parseInt(ranks[a].innerHTML) + n
    }
  }
}
