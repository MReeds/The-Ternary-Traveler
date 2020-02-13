import cardBuilderObject from "./entryComponent.js"

const entryContainer = document.querySelector(".places-on-dom")

const domOperations = {

    vacationFactory: (placeId, name, description, cost) => {
        const newEntryObject = {
            placeId: placeId,
            name: name,
            description: description,
            cost: cost
        }
        return newEntryObject
    },

    renderVacations: (vacations) => {
        entryContainer.innerHTML = "";
        vacations.forEach(vacation => {
            entryContainer.innerHTML += cardBuilderObject.entryComponent(vacation)
        })
    }
}

export default domOperations