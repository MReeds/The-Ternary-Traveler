import domOperations from "./domOperator.js"
import apiActions from "./data.js";

const clearForm = () => {
    const interestId = document.querySelector("#interestId")
    const interestName = document.querySelector("#interestName");
    const interestDescription = document.querySelector("#interestDescription");
    const interestCost = document.querySelector("#interestCost");

    interestId.value = "";
    interestName.value = "";
    interestDescription.value = "";
    interestCost.value = "";
}

let saveEntryButton = {
    buttonFunction: () => {
        let button = document.querySelector("#record-button");

        button.addEventListener("click", () => {
            const interestId = document.querySelector("#interestId");
            const interestName = document.querySelector("#interestName").value;
            const interestDescription = document.querySelector("#interestDescription").value;
            const interestCost = document.querySelector("#interestCost").value;
            const interestLocation = document.querySelector("#interestLocation").value;

            const entryObject = domOperations.vacationFactory(interestLocation, interestName, interestDescription, interestCost)
            
            let entry = {
                name: interestLocation,
                interest: interestName,
                description: interestDescription,
                cost: interestCost
            }
            
            apiActions.saveEntries(entryObject)
            .then(() => {
                apiActions.getEntries()
                .then(domOperations.renderVacations)
                .then(clearForm)
            })
        })
    }
}

export default saveEntryButton
