import apiActions from "./data.js"
import domOperations from "./domOperator.js"

apiActions.getEntries()
    .then(domOperations.renderVacations)