import cardBuilderObject from "./entryComponent.js"

const entryContainer = document.querySelector(".places-on-dom")

const domOperations = {

    vacationFactory: (name, interests, description, cost, review) => {
        newEntryObject = {
            name: name,
            interests: interests,
            description: description,
            cost: cost,
            review: review
        }
        return newEntryObject
    },

    renderVacations: (vacations) => {
        vacations.forEach(vacation => {
            entryContainer.innerHTML += cardBuilderObject.entryComponent(vacation)
        })
    }
}

export default domOperations