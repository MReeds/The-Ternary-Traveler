const baseUrl = "http://localhost:8088/interests"

const apiActions = {

    getEntries: () => {
        return fetch(`${baseUrl}?_expand=place`)
            .then(resp => resp.json())
    }
}

export default apiActions