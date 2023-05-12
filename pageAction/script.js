
document.getElementById("button").addEventListener("click", () => {
    browser.tabs.query({active: true, currentWindow: true}, tabs => {

        browser.runtime.sendMessage({message: "screenshot"})
            .then(response => console.log(response))
            .catch(error => console.log(error))
    })
})
