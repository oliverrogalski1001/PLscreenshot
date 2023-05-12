// Put all the javascript code here, that you want to execute after page load.


let tbody = document.getElementsByTagName("tbody")
let children = tbody[0].children
let questions = []
for (let i = 0; i < children.length; i++) {
    questions.push(children[i].children[0].children[0].href)
    // console.log(children[i].children[0].children[0].href)
}

// send questions to background script
browser.runtime.sendMessage({message: "questions", questions: questions})
    .then(response => console.log(response))
    .catch(error => console.log(error))

