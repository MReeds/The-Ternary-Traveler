import apiActions from "./data.js";
import domOperations from "./domOperator.js";
import saveEntryButton from "./saveEntryBtn.js";
import events from "./addEvent.js";

apiActions.getEntries()
    .then(domOperations.renderVacations)
saveEntryButton.buttonFunction()
events.deleteVacation()