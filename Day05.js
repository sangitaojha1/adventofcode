array1 = ["B", "W", "N"];
array2 = ["L", "Z", "S", "P", "T", "D", "M", "B"];
array3 = ["Q", "H", "Z", "W", "R"];
array4 = ["W", "D", "V", "J", "Z", "R"];
array5 = ["S", "H", "M", "B"];
array6 = ["L", "G", "N", "J", "H", "V", "P", "B"]
array7 = ["J", "Q", "Z", "F", "H", "D", "L", "S"];
array8 = ["W", "S", "F", "J", "G", "Q", "B"];
array9 = ["Z", "W", "M", "S", "C", "D", "J"];

finalarray = [array1, array2, array3, array4, array5, array6, array7, array8, array9];

inputTimes = document.querySelector("pre").textContent.split("\n").slice(10);
console.log(inputTimes);

newArrayValue = inputTimes.map(s => s.split(" ")).map(s => [s[1], s[3], s[5]].map(k => parseInt(k)));

for (i = 0; i < newArrayValue.length; i++) {
    innerArray = newArrayValue[i];
    times = innerArray[0];
    fromPostion = innerArray[1] - 1;
    toPosition = innerArray[2] - 1;

    for (j = 0; j < times; j++) {
        finalarray[toPosition].push(finalarray[fromPostion].pop());
    }
}

x = finalarray.map(p => p[p.length - 1]).join("");
console.log(x);

array1 = ["B", "W", "N"];
array2 = ["L", "Z", "S", "P", "T", "D", "M", "B"];
array3 = ["Q", "H", "Z", "W", "R"];
array4 = ["W", "D", "V", "J", "Z", "R"];
array5 = ["S", "H", "M", "B"];
array6 = ["L", "G", "N", "J", "H", "V", "P", "B"]
array7 = ["J", "Q", "Z", "F", "H", "D", "L", "S"];
array8 = ["W", "S", "F", "J", "G", "Q", "B"];
array9 = ["Z", "W", "M", "S", "C", "D", "J"];

finalarray = [array1, array2, array3, array4, array5, array6, array7, array8, array9];

for (i = 0; i < newArrayValue.length; i++) {
    innerArray = newArrayValue[i];
    times = innerArray[0];
    fromPostion = innerArray[1] - 1;
    toPosition = innerArray[2] - 1;

    movedItems = [];
    for (j = 0; j < times; j++) {
        movedItems.push(finalarray[fromPostion].pop());
    }
    for (l = movedItems.length - 1; l >= 0; l--) {
        finalarray[toPosition].push(movedItems[l])
    }
}

secondPart = finalarray.map(p => p[p.length - 1]).join("");
console.log(secondPart);
