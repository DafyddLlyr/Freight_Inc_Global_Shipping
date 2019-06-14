document.addEventListener('DOMContentLoaded', () => {
  const formSubmit = document.querySelector('#new-order-form');
  formSubmit.addEventListener('submit', handleFormSubmit);
})

const containerLength = function(twenty) {
  return twenty.checked ? "20ft" : "40ft";
}

const highCube = function(yes) {
  return yes.checked ? "High Cube" : "Standard"
}

const containerSize = function(twenty, yes) {
  const length = containerLength(twenty);
  const height = highCube(yes);
  return length + " " + height
}

const priorityToString = function(priorityInt) {
  switch (priorityInt) {
    case 1: return "Very Low";
    case 2: return "Low";
    case 3: return "Medium";
    case 4: return "High";
    case 5: return "Very High";
  }
}

const idCreator = function() {
  return `FGS${Math.floor(Math.random() * 5000) + 1}`
}

const createNewOrder = function() {

  const newOrder = document.createElement('div');
  newOrder.classList.add('shipping-order');

  const inputId = idCreator()
  const displayId = document.createElement('p');
  displayId.textContent = `Order ID: ${inputId}`;
  newOrder.appendChild(displayId);

  const inputCustomer = this.customer.value
  const displayCustomer = document.createElement('p');
  customer.textContent = `Customer: ${inputCustomer}`;
  newOrder.appendChild(displayCustomer);

  const inputFreight = this.freightContent.value
  const displayFreight = document.createElement('p');
  displayFreight.textContent = `Freight Content: ${inputFreight}`;
  newOrder.appendChild(displayFreight)

  const inputCountry = document.getElementById('countryList').value;
  const displayCountry = document.createElement('p');
  displayCountry.textContent = `Country: ${inputCountry}`
  newOrder.appendChild(displayCountry);

  const inputSize = containerSize(this.size20, this.highYes)
  const displaySize = document.createElement('p');
  displaySize.textContent = `Container Size: ${inputSize}`;
  newOrder.appendChild(displaySize);

  const inputWeight = this.weight.valueAsNumber;
  const displayWeight = document.createElement('p');
  displayWeight.textContent = `Weight: ${inputWeight}`;
  newOrder.appendChild(displayWeight);

  const inputPriority = priorityToString(this.priority.valueAsNumber)
  const displayPriority = document.createElement('p');
  displayPriority.textContent = `Priority: ${inputPriority}`;
  newOrder.appendChild(displayPriority);

  const inputDate = this.shippingDate.value
  const displayDate = document.createElement('p');
  displayDate.textContent = `Shipping Date: ${inputDate}`;
  newOrder.appendChild(displayDate);

  return newOrder;
}

const handleFormSubmit = function () {
  event.preventDefault();

  const orderList = document.querySelector("#content-column");
  const newOrder = createNewOrder(this)
  orderList.appendChild(newOrder);

  this.reset()
}
