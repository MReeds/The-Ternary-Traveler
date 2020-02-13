const cardBuilderObject = {
    entryComponent: (places) => {
        return `
            <h1>${places.place.name}</h1>
            <h3>${places.name}</h3>
            <div>
            <p>${places.description}</p>
            <section>Cost: $${places.cost}</section>
            <p>Review: ${places.review}</p>
            </div>
        `
    }
}

export default cardBuilderObject