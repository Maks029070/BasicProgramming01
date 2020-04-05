// task 1

let city = "Київ";
city = "Львів";
let address = city;
alert(address);

// taks 2

let n = prompt("Введіть число яке ви б хотіли піднести до третього степеня (результат у консолі)");
result = n**3;
console.log(result);

// task 3

let numOfPen = prompt("Введіть кількість (ціле число!) ручок (ціна за одну - 6.75)");
let numOfPencil = prompt("Введіть кількість (ціле число!) олівців (3.25 за один)");

if (numOfPencil%1 !== 0 || numOfPen%1 !== 0) {
	document.write(`<p>Ви ввели невірну кількість</p>`);
} else {
	let totalCost = numOfPen*6.75 + numOfPencil*3.25;
	document.write(`<p>Загальна вартість: ${totalCost}</p>`);
}