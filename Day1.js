var data = document.body.children[0].textContent.split("\n").map((x) => (x));;
console.log(data);
temp = 0;
var tempWitSum = [];
for (k = 0; k < data.length; k++) {
    if (data[k] == "") {
        tempWitSum.push(temp);
        temp = 0;
    } else {
        temp = temp + parseInt(data[k]);
    }

}
console.log(tempWitSum);
max = tempWitSum[0];
for (i = 1; i < tempWitSum.length; i++) {
    if (tempWitSum[i] > max) {
        max = tempWitSum[i];
    }
}
console.log(max);

var maxIndex = new Array();
var maxCalories = new Array();

maxCalories[0] = 0;
maxCalories[1] = 0;
maxCalories[2] = 0;

for (i = 0; i < tempWitSum.length; i++) {
    if (tempWitSum[i] > maxCalories[0]) {
        maxCalories[0] = tempWitSum[i];
        maxIndex[0] = i;
    }
}

for (i = 0; i < tempWitSum.length; i++) {
    if (tempWitSum[i] > maxCalories[1] && tempWitSum[i] < maxCalories[0]) {
        maxCalories[1] = tempWitSum[i];
        maxIndex[1] = i;
    }
}

for (i = 0; i < tempWitSum.length; i++) {
    if (tempWitSum[i] > maxCalories[2] && tempWitSum[i] < maxCalories[1]) {
        maxCalories[2] = tempWitSum[i];
        maxIndex[2] = i;
    }
}
console.log(maxCalories[0] + maxCalories[1] + maxCalories[2]);

