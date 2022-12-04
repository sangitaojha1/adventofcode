inputValues = document.querySelector("pre").textContent.split("\n");

count = 0

inputValues.map(s => fullyAssignmentCount(s.split(",")));

function fullyAssignmentCount(pairArry) {

    if (pairArry == "") {
        return;
    }
    var firstPairvalues = pairArry[0].split("-");
    var secondPairValues = pairArry[1].split("-");

    valueInArray = [parseInt(firstPairvalues[0]), parseInt(firstPairvalues[1]), parseInt(secondPairValues[0]), secondPairValues[1]];
    if ((valueInArray[0] <= valueInArray[2] && valueInArray[1] >= valueInArray[3]) ||
        (valueInArray[0] >= valueInArray[2] && valueInArray[1] <= valueInArray[3])) count = count + 1;

}
console.log(count)


count = 0

inputValues.map(s => PartialAssignmentCount(s.split(",")));

function PartialAssignmentCount(pairArry) {
    //  console.log(pairArry);
    if (pairArry == "") {
        return;
    }
    var firstPairvalues = pairArry[0].split("-");
    var secondPairValues = pairArry[1].split("-");

    valueInArray = [parseInt(firstPairvalues[0]), parseInt(firstPairvalues[1]), parseInt(secondPairValues[0]), secondPairValues[1]];

    if (valueInArray[1] >= valueInArray[2] && valueInArray[3] >= valueInArray[0]) count = count + 1;
}
console.log(count)