  const arrT = [
        [
            [["P"], ["S"]],
            [["R"], ["S"]]
        ],
        [
            [["S"],["P"]],
            [["R"],["S"]]
        ],
    
  ];

let choices = ["R","P","S"] 

function mod(a, b) {
    c = a % b
    return (c < 0) ? c + b : c;
}

function checkWinner(choice1, choice2) { 
    x = choices.indexOf(choice1);
    y = choices.indexOf(choice2);
    if (x == y) {
        return choice1;
    }
    if (mod((x - y), choices.length) < choices.length / 2) {
        return choice1;
    } else {
        return choice2;
    }
}


function loopInDeep(arr, w) {
  if(arr.length < 2 || arr[0].length < 2){
    return w = checkWinner(arr[0].toString(), arr[1].toString());
  } else {
    return checkWinner(loopInDeep(arr[0],w), loopInDeep(arr[1],w)); 
  }
}

let rootTree = [];
for(let i=0;i<arrT.length;i++){
  rootTree.push(loopInDeep(arrT[i],""));
}
console.log(checkWinner(rootTree[0], rootTree[1]));
