// rawData = ' # ';

function toArray(string) { // normalize
    if (string.length !== 7 * 7) throw new Error('string in wrong size');
    return string.split('').map(toNumber);
}
function toNumber(character) {
    return character === '#' ? 1 : 0;
}

const zero = toArray(
    '       ' +
    ' ##### ' +
    ' #   # ' +
    ' #   # ' +
    ' #   # ' +
    ' ##### ' +
    '       '
);
const one = toArray(
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   '
);

const two = toArray(
    '       ' +
    ' ##### ' +
    '     # ' +
    '    #  ' +
    '  #    ' +
    ' ##### ' +
    '       '
);
const three = toArray(
    '       ' +
    ' ##### ' +
    '     # ' +
    ' ##### ' +
    '     # ' +
    ' ##### ' +
    '       '
);
const four = toArray(
    '       ' +
    ' #   # ' +
    ' #   # ' +
    ' ##### ' +
    '     # ' +
    '     # ' +
    '       '
);
const five = toArray(
    '       ' +
    ' ##### ' +
    ' #     ' +
    ' ##### ' +
    '     # ' +
    ' ##### ' +
    '       '
);
const six = toArray(
    '       ' +
    ' ##### ' +
    ' #     ' +
    ' ##### ' +
    ' #   # ' +
    ' ##### ' +
    '       '
);
const seven = toArray(
    '       ' +
    ' ##### ' +
    '    #  ' +
    '   #   ' +
    '  #    ' +
    ' #     ' +
    '       '
);
const eight = toArray(
    '       ' +
    ' ##### ' +
    ' #   # ' +
    ' ##### ' +
    ' #   # ' +
    ' ##### ' +
    '       '
);
const nine = toArray(
    '       ' +
    ' ##### ' +
    ' #   # ' +
    ' ##### ' +
    '     # ' +
    '     # ' +
    '       '
);

const net = new brain.NeuralNetwork();
const trainingData = [
    { input: zero, output: { zero: 1 } },
    { input: one, output: { one: 1 } },
    { input: two, output: { two: 1 } },
    { input: three, output: { three: 1 } },
    { input: four, output: { four: 1 } },
    { input: five, output: { five: 1 } },
    { input: six, output: { six: 1 } },
    { input: seven, output: { seven: 1 } },
    { input: eight, output: { eight: 1 } },
    { input: nine, output: { nine: 1 } }
];

net.train(trainingData);


var clicked = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
];

function checkInt(){
    //alert(clicked);
    var inputtedArray = '';
    for(var r=0; r<7; ++r){
        var rowString = '';
        for(var c=0; c<7; ++c){
            if(clicked[r][c] === 0){
                rowString += ' ';
            }
            else{
                rowString += '#';
            }
        }
        // alert(rowString);
        inputtedArray += rowString;
    }

    const result = brain.likely(toArray(
        inputtedArray
    ), net);

    document.getElementById("numberDisplay").innerHTML = "Number detected: " + result;
}

function clearGrid(){
    var cells = document.getElementsByTagName("td");
    var i = 0;
    while(i <= 49){
        cells[i].className = '';
        i++;
    }
    for(var r=0; r<7;++r){
        for(var c=0; c<7; ++c){
            clicked[r][c] = 0;
        }
    }
}

function addTrainingData(){
    // document.getElementById("trainingInstructions").
}

