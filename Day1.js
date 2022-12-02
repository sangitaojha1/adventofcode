data = document.querySelector("pre").textContent.split("\n\n").map(s => s.split("\n")).map(temp => temp.map(s => parseInt(s)).reduce((a, b) => a + b, 0))
max = data.reduce((a, b) => b > a ? b : a, 0);
console.log(max);
sum = data.sort((a, b) => a < b).splice(0, 3).reduce((a, b) => a + b, 0);
console.log(sum);