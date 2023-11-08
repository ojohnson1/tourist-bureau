"use strict";

import { activities, categories } from "./activitiesdata.js";
let nameField = document.getElementById("activityName");
let idField = document.getElementById("activityId");
let descriptionField = document.getElementById("activityDescription");
let locationField = document.getElementById("activityLocation");
let priceField = document.getElementById("activityPrice");
const categoriesList = document.getElementById("categoriesList");
const activitiesList = document.getElementById("activitiesList");
const purchaseBtn = document.getElementById("purchaseBtn");
const ticketForm = document.getElementById("ticketForm");
const ticketinput=document.getElementById("tickets")
const emailInput=document.getElementById("Email")
const confirmationMessage=document.getElementById('message')
window.onload = function () {
  initCategoriesDropdown();
  activitiesList.onchange = onActivitiesSelectionChanged;
  categoriesList.onchange = onCategoriesSelectionChanged;
  ticketForm.onsubmit = onPurchaseTicket;
  //categoriesList.addEventListener("change", onCategoriesSelectionChanged);
};

//function initActivitiesDropdown (){

//}}
function initCategoriesDropdown() {
  let numOfCategories = categories.length;
  for (let i = 0; i < numOfCategories; i++) {
    let theOption = new Option(categories[i]);
    categoriesList.appendChild(theOption);
  }
}

function onCategoriesSelectionChanged() {
  activitiesList.innerHTML = "<option selected> Select One </option>";

  const categoriesList = document.getElementById("categoriesList");

  let selectedValue = categoriesList.value;

  for (let i = 0; i < activities.length; i++) {
    if (selectedValue === activities[i].category) {
      let newOption = new Option(activities[i].name, activities[i].id);
      activitiesList.appendChild(newOption);
    }
  }
}

function onActivitiesSelectionChanged() {
  let selectedValue = activitiesList.value;
  const selectedActivity = activitiesFilter("id", selectedValue);
  nameField.innerText = selectedActivity[0].name;
  idField.innerText = selectedActivity[0].id;
  descriptionField.innerText = selectedActivity[0].description;
  locationField.innerText = selectedActivity[0].location;
  priceField.innerText = selectedActivity[0].price;

  if (selectedActivity[0].price > 0) {
    purchaseBtn.classList.toggle("d-block");
    purchaseBtn.classList.toggle("d-none");
  } else {
    purchaseBtn.classList.toggle("d-none");
    purchaseBtn.classList.toggle("d-block");
  }
}

function onPurchaseTicket(event) {
  event.preventDefault();
  let emailInput2=emailInput.value
  let numOfTickets=ticketinput.value
  let totalCost= numOfTickets * (priceField.value)
  console.log(typeof totalCost)
  const message = `Your credit card has been charged ${totalCost} for ${numOfTickets} to
${nameField.value}. A confirmation email has been sent to ${emailInput2}.`;
confirmationMessage.textContent=message

}

function activitiesFilter(key, value) {
  const newArr = [];

  for (let i = 0; i < activities.length; i++) {
    if (activities[i][key] === value) {
      newArr.push(activities[i]);
    }
  }
  return newArr;
}
