document.addEventListener('DOMContentLoaded', () => {
  const formSubmit = document.querySelector('#new-order-form');
  formSubmit.addEventListener('submit', handleFormSubmit);

  const deleteAll = document.querySelector('#delete-all');
  deleteAll.addEventListener('click', handleDeleteAll);

  const containerSize20 = document.querySelector('#size20');
  size20.addEventListener('change', handleContainerSizeChange);

  const containerSize40 = document.querySelector('#size40');
  size40.addEventListener('change', handleContainerSizeChange);
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

const idCreator = function () {
  return `FGS${Math.floor(Math.random() * 99999999) + 1}`
}

const handleFormSubmit = function () {
  event.preventDefault();

  const orderList = document.querySelector("#content-column");
  const priority = createPriority(this);
  const orderId = createOrderId(this);
  const orderDetails = createOrderDetails(this);
  const shippingDate = createShippingDate(this);

  const newOrder = document.createElement('div');
  newOrder.classList.add(`priority-${this.priority.value}`);
  newOrder.classList.add('shipping-order');

  newOrder.appendChild(priority);
  newOrder.appendChild(orderId);
  newOrder.appendChild(orderDetails);
  newOrder.appendChild(shippingDate);

  orderList.appendChild(newOrder);

  this.reset()
}

const createPriority = function () {

  const orderPriority = document.createElement('div');
  orderPriority.classList.add('priority');

  priorityIcon = document.createElement('i');
  priorityIcon.classList.add('fas', createPriorityIcon());
  orderPriority.appendChild(priorityIcon);

  const inputPriority = priorityToString(this.priority.valueAsNumber)
  const displayPriority = document.createElement('p');
  displayPriority.textContent = `Priority: ${inputPriority}`;
  orderPriority.appendChild(displayPriority);

  return orderPriority;
}

const createOrderId = function () {

  const orderId = document.createElement('div');
  orderId.classList.add('order-id');

  const inputId = idCreator()
  const displayId = document.createElement('p');
  displayId.textContent = `Order ID: ${inputId}`;
  orderId.appendChild(displayId);

  return orderId;
}

const createOrderDetails = function () {

  const orderDetails = document.createElement('div');
  orderDetails.classList.add('order-details');

  const inputCustomer = this.customer.value
  const displayCustomer = document.createElement('p');
  displayCustomer.textContent = `Customer: ${inputCustomer}`;
  orderDetails.appendChild(displayCustomer);

  const inputFreight = this.freightContent.value
  const displayFreight = document.createElement('p');
  displayFreight.textContent = `Freight Content: ${inputFreight}`;
  orderDetails.appendChild(displayFreight)

  const inputCountry = document.getElementById('countryList').value;
  const displayCountry = document.createElement('p');
  displayCountry.textContent = `Country: ${inputCountry}`
  orderDetails.appendChild(displayCountry);

  const inputSize = containerSize(this.size20, this.highYes)
  const displaySize = document.createElement('p');
  displaySize.textContent = `Container Size: ${inputSize}`;
  orderDetails.appendChild(displaySize);

  const inputWeight = this.weight.valueAsNumber;
  const displayWeight = document.createElement('p');
  displayWeight.textContent = `Weight: ${inputWeight}kg`;
  orderDetails.appendChild(displayWeight);

  return orderDetails;
}

const createShippingDate = function () {

  const shippingDate = document.createElement('div');
  shippingDate.classList.add('shipping-date');

  const inputDate = this.shippingDate.value
  const displayDate = document.createElement('p');
  displayDate.textContent = `Shipping Date: ${inputDate}`;
  shippingDate.appendChild(displayDate);

  return shippingDate;
}

const handleDeleteAll = function () {
  event.preventDefault();
  const orderList = document.querySelector("#content-column");
  orderList.innerHTML= '';
}

const handleContainerSizeChange = function () {
  const containerWeight = document.querySelector('#weight');
  const size20 = document.querySelector('#size20');
  size20.checked ? containerWeight.max = 20000 : containerWeight.max = 26500;
}

const createPriorityIcon = function () {
  const inputPriority = this.priority.valueAsNumber;
  return inputPriority >= 4 ? 'fa-exclamation-triangle' : 'fa-check-circle'
}
