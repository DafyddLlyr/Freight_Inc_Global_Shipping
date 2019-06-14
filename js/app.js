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

const createNewOrder = function() {
  const newOrder = document.createElement('div');
  newOrder.classList.add('shipping-order');

  const inputCustomer = document.createElement('p');
  inputCustomer.textContent = this.customer.value;
  newOrder.appendChild(inputCustomer);

  const inputFreight = document.createElement('p');
  inputFreight.textContent = this.freightContent.value;
  newOrder.appendChild(inputFreight)

  const inputCountry = document.createElement('p');
  inputCountry.textContent = document.getElementById('countryList').value;
  newOrder.appendChild(inputCountry);

  const inputSize = document.createElement('p');
  inputSize.textContent = containerSize(this.size20, this.highYes);
  newOrder.appendChild(inputSize);

  const inputWeight = document.createElement('p');
  inputWeight.textContent = this.weight.valueAsNumber;
  newOrder.appendChild(inputWeight);

  const inputPriority = document.createElement('p');
  inputPriority.textContent = priorityToString(this.priority.valueAsNumber);
  newOrder.appendChild(inputPriority);

  const inputDate = document.createElement('p');
  inputDate.textContent = this.shippingDate.value;
  newOrder.appendChild(inputDate);

  return newOrder;
}

const handleFormSubmit = function () {
  event.preventDefault();

  const orderList = document.querySelector("#content-column");
  const newOrder = createNewOrder(this)
  orderList.appendChild(newOrder);

  this.reset()
}
