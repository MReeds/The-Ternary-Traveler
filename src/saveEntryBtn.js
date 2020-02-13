import apiActions from "./scripts/data.js"
import domOperations from "./scripts/domOperator.js"

const clearForm = () => {
    const interestName = document.querySelector("#interestName");
    const interestDescription = document.querySelector("#interestDescription");
    const interestCost = document.querySelector("#interestCost");

    interestName.value = "";
    interestDescription.value = "";
    interestCost.value = "";
}

let saveEntryButton = {
    buttonFunction: () => {
        let button = document.querySelector("#record-button");
    }
}