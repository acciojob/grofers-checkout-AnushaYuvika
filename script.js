// const getSumBtn = document.createElement("button");
// getSumBtn.append("Get Total Price");
// document.body.appendChild(getSumBtn);

// const prices = document.querySelectorAll(".price");

// getSumBtn.addEventListener("click", () => {

// 	let total = 0;

// 	prices.forEach((price) => {
// 		const value = Number(price.textContent);
// 		total += value;
// 	});

// 	const row = document.createElement("tr");

// 	const totalLabel = document.createElement("td");
// 	totalLabel.textContent = "Total";

// 	const totalPrice = document.createElement("td");
// 	totalPrice.textContent = total;

// 	row.appendChild(totalLabel);
// 	row.appendChild(totalPrice);

// 	document.querySelector("table").appendChild(row);
// 	getSumBtn.disabled = true;
// });

const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.querySelector("table").appendChild(getSumBtn);

const prices = document.querySelectorAll(".price");

getSumBtn.addEventListener("click", () => {
	let total = 0;
	
	prices.forEach((price) => {
		const value = Number(price.textContent);
		total += value;
	})

	const row = document.createElement("tr");
	const totalLabel = document.createElement("td");
	totalLabel.textContent = "Total";
	const totalPrice = document.createElement("td");
	totalPrice.textContent = total;

	row.appendChild(totalLabel);
	row.appendChild(totalPrice);

	document.querySelector("table").appendChild(row);
	getSumBtn.disabled = true;
})