import baseUrl from "./data.js"

const editForm = entryId => {
    const hiddeninterestId = document.querySelector("#interestId");
    const interestName = document.querySelector("#interestName");
    const interestDescription = document.querySelector("#interestDescription");
    const interestCost = document.querySelector("#interestCost");
    const interestLocation = document.querySelector("#interestLocation");

    return fetch(`${baseUrl}${entry.placeId}`)
        .then(resp => resp.json())
        .then(entry => {
            hiddeninterestId.value = places.id
            interestName.value = places.place.name
            interestDescription.value = places.description
            interestCost.value = places.cost
            interestLocation.value = places.name
        })
}

export default {
    deleteVacation: () => {
        const entryContainer = document.querySelector(".places-on-dom");

        entryContainer.addEventListener("click", (event) => {
            if(event.target.id.startsWith("deletePlace--")) {
                console.log("been clicked")
            }
        })
    }
}