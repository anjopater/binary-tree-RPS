let choices = ["R", "P", "S"];

const inputAnswers = [
    [
        [
            [["ARMANDO", "P"], ["DAVE", "S"]],
            [["RICHAR", "R"], ["MICHAEL", "S"]]
        ],
        [
            [["ALLEN", "S"], ["OMER", "P"]],
            [["DAVID", "R"], ["Richard x", "P"]]
        ],
    ]
];

//return module
function mod(a, b) {
    c = a % b
    return (c < 0) ? c + b : c;
}

function checkWinner(choice1, choice2) {
    rps_game_winner([choice1, choice2]);
    x = choices.indexOf(choice1[1]);
    y = choices.indexOf(choice2[1]);
    if (x == y) {
        return choice1;
    }
    if (mod((x - y), choices.length) < choices.length / 2) {
        return choice1;
    } else {
        return choice2;
    }
}

//Implementation
rps_game_winner = (playerAnswers) => {
    try {
        if (playerAnswers.length < 2) {
            throw "WrongNumberOfPlayersError.";
            return;
        }
        playerAnswers.forEach((item, idex) => {
            if (!/R|P|S/g.test(item[1].toUpperCase())) {
                throw "NoSuchStrategyError.";
                return;
            }
        });
    } catch (err) {
        console.log(err);
    }
}

//recursive function to walk through to tree
function loopInDeep(arr, w) {
    if (arr[0].length < 2 || !Array.isArray(arr[0][0])) {
        return w = checkWinner(arr[0], arr[1]);
    } else {
        return checkWinner(loopInDeep(arr[0], w), loopInDeep(arr[1], w));
    }
}

//root array
let rootTree = [];
for (let i = 0; i < inputAnswers.length; i++) {
 if(inputAnswers[i].length < 2){
    throw "WronTreeStructureError.";
 } else {
    rootTree.push(loopInDeep(inputAnswers[i], []));
 }
}

//result
console.log(rootTree[0]);
