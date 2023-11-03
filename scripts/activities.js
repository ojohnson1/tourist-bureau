"use strict"

import {categories } from "./activitiesdata"
const categoriesList=document.getElementById("categoriesList")

window.onload = function () {
  initCategoriesDropdown();
 categoriesList.onchange= onCategoriesListChanged();
};


function initCategoriesDropdown (){
let numOfCategories = categories.length;
for (let i = 0; i < numOfCategories; i++) {
  let theOption = new Option(categories[i]);
  categoriesList.appendChild(theOption);
}}


function onCategoriesListChanged (){

  
}