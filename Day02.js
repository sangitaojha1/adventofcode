data = document.body.children[0].textContent;
lines = data.split("\n").map((x) => (x));

totalSore = 0;

for (index = 0; index < lines.length; index++) {

  value = lines[index].split(" ");
  if (value[0] == 'A') {
    if (value[1] == 'X') totalscore += 4;
    if (value[1] == 'Y') totalscore += 8;
    if (value[1] == 'Z') totalscore += 3;
  } else if (value[0] == 'B') {
    if (value[1] == 'X') totalscore += 1;
    if (value[1] == 'Y') totalscore += 5;
    if (value[1] == 'Z') totalscore += 9
  } else if (value[0] == 'C') {
    if (value[1] == 'X') totalSore = totalSore + 7;
    if (value[1] == 'Y') totalSore = totalSore + 2;
    if (value[1] == 'Z') totalSore = totalSore + 6;
  }
}

console.log(totalSore);

totalscore = 0

for (index = 0; index < lines.length; index++) {

  value = lines[index].split(" ");
  if (value[0] == 'A') {
    if (value[1] == 'X') totalscore += 3;
    if (value[1] == 'Y') totalscore += 4;
    if (value[1] == 'Z') totalscore = totalscore + 8;
  } else if (value[0] == 'B') {
    if (value[1] == 'X') totalscore = totalscore + 1;
    if (value[1] == 'Y') totalscore = totalscore + 5;
    if (value[1] == 'Z') totalscore = totalscore + 9;

  } else if (value[0] == 'C') {
    if (value[1] == 'X') totalscore = totalscore + 2;
    if (value[1] == 'Y') totalscore = totalscore + 6;
    if (value[1] == 'Z') totalscore = totalscore + 7;
  }

}
console.log(totalscore);