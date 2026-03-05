const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const result = document.createElement("h3");
document.body.appendChild(result);

const getSum = () => {
  let totalPrice = 0;
  const prices = document.querySelectorAll(".price");

  prices.forEach((price) => {
    totalPrice += Number(price.textContent);
  });

  return totalPrice;
};

// Button Click Event
getSumBtn.addEventListener("click", () => {
  const total = getSum();
  result.textContent = `Total Price: ₹${total}`;
});