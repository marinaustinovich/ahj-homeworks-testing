import Validator from './components/validator/Validator';

/* eslint-disable */
console.log("it works!");

const container = document.querySelector("#card-validator-container");
const validator = new Validator(container);
validator.bindToDOM();
