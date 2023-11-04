"use strict"

import {activities, categories } from "./activitiesdata.js"
const categoriesList=document.getElementById("categoriesList")

window.onload = function () {
  initCategoriesDropdown();
 initActivitiesDropdown();
};


function initCategoriesDropdown (){
let numOfCategories = categories.length;
for (let i = 0; i < numOfCategories; i++) {
  let theOption = new Option(categories[i]);
  categoriesList.appendChild(theOption);
}}


function initActivitiesDropdown (){
  let numOfActivities = activities.length;
  for (let i = 0; i < numOfActivities; i++) {
    let activityOptions = new Option(activities[i].name);
    activitiesList.appendChild(activityOptions);
  }}


