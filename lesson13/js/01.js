const box = document.querySelector(".box")
const userChat = document.querySelector(".chat")
const ajax = (url) => {
    box.classList.add("show")
    if (!url) {
        throw new Error('Помилка з адерсою запиту' + url)
    }

    const request = new XMLHttpRequest()
    request.open("GET", url)
    request.send()
    function chat(list) {
        if (!Array.isArray(list)) return
        const chatText = list.map(e=>{
            return `
            <div class="userContainer">
                <img src="../images/user_icon.png" class="icon">
                <div class="chatUser">
                    <div class="userName">
                    ${e.email}
                    </div>
                    <div class="userText">
                    ${e.body}
                    </div>
                </div>
            </div>
            `
            
        }).join("")
        userChat.insertAdjacentHTML('beforeend', chatText)
    }
    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status >= 200) {
            chat(JSON.parse(request.responseText))
            box.class
        }
    })
    
}
ajax('https://jsonplaceholder.typicode.com/comments')