const baseUrl = "http://localhost:8088/interests"

const apiActions = {

    getEntries: () => {
        return fetch(`${baseUrl}?_expand=place`)
            .then(resp => resp.json())
    },
    saveEntries: entryObject => {
        return fetch(`${baseUrl}?_expand=place`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryObject)
        }).then(resp => resp.json());
    },
    updateEntry(entry) {
        return fetch(`${baseUrl}${entry.placeId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "applcation/json"
            },
            body: JSON.stringify(entry)
        })
    }
}

export default apiActions