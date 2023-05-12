
let questions = []

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.message === "questions") {
        questions = message.questions
        sendResponse("questions received")
    }

    if (message.message === "screenshot") {
        changeTabs(questions)
    }
})

// function to change tabs to question links
function changeTabs(questions) {
    if (questions !== undefined) {
        for (let i = 0; i < questions.length; i++) {
            browser.tabs.create({url: questions[i]})
            browser.tabs.saveAsPDF({toFileName: `question-${i + 1}.pdf`})
                .then(status => {console.log(status)})
                .catch(error => {console.log(error)})

            // let currentTabId;
            // browser.tabs.getCurrent()
            //     .then(tab => {currentTabId = tab.id})
            // browser.tabs.remove(currentTabId)
        }
    }
}
