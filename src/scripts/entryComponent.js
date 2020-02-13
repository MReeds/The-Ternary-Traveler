const cardBuilderObject = {
    entryComponent: (places) => {
        return `
            <h1>${places.place.name}</h1>
            <h3>${places.name}</h3>
            <div>
            <p>${places.description}</p>
            <section>Cost: $${places.cost}</section>
            </div>
            <button id="editPlace--${places.id}">Edit Place</button>
            <button id="deletePlace--${places.id}">Delete Place</button>
        `
    }
}

export default cardBuilderObject