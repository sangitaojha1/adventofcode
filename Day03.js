var lines = document.querySelector("pre").textContent.split("\n");

var resultArray = lines.map(s => getCommonElement(s, s.length / 2));

var sumofValue = resultArray.map(s => computeValueForEachCharacter(s)).reduce((a, b) => a + b, 0);

//part 1
console.log(sumofValue);

function getCommonElement(val, length) {
    t1 = val.slice(0, length);
    t2 = val.slice(length, val.length);
    firstArray = t1.split("");

    for (var i = 0; i < firstArray.length; i++) {
        if (t2.includes(firstArray[i])) {
            return firstArray[i];
        }
    }
}


var commonelementFromBunchThree = [];

for (i = 0; i < lines.length; i += 3) {
    fisrtElement = lines[i];
    secondElement = lines[i + 1];
    thirdElement = lines[i + 2];
    commonelementFromBunchThree.push(getCommonCharacter(fisrtElement, secondElement, thirdElement));
}

//part 2
console.log(commonelementFromBunchThree.map(s => computeValueForEachCharacter(s)).reduce((a, b) => a + b, 0));


function getCommonCharacter(fisrtElement, secondElement, thirdElement) {
    for (var i = 0; i < fisrtElement.length; i++) {
        if (secondElement.includes(fisrtElement[i]) && thirdElement.includes(fisrtElement[i])) {
            return fisrtElement[i];
        }
    }
}

function computeValueForEachCharacter(og) {
    if (og === undefined) {
        return 0;
    }
    var charValue = parseInt(og.charCodeAt(0));

    if (charValue >= 65 && charValue <= 90) {
        return charValue - 38;
    } else if (charValue >= 97 && charValue <= 122) {
        return charValue - 96;
    }

}