const notifCount = document.querySelector("#notifCount");
const markAllReadBtn = document.querySelector("#markAllRead");
const unread = document.querySelectorAll(".unread");


const refreshNotifCount = function() {
    const unread = document.querySelectorAll(".unread");
    if(unread.length > 0) {
        notifCount.innerHTML = unread.length;
        notifCount.classList.add("count");
    } else {
        notifCount.remove();
    }
}

const removeMarkAsReadBtn = function() {
    const unread = document.querySelectorAll(".unread");
    if(unread.length === 0) {
        markAllReadBtn.classList.add("hidden");
    }
}

const addDot = function() {
    const unread = document.querySelectorAll(".card.unread");
    unread.forEach(card => {
        const paragraph = card.querySelector("p");
        const dot = document.createElement("div");
        dot.className = "dot";
        paragraph.append(dot)
    })
}

const removeDot = function(card) {
    card.querySelector(".dot") ? card.querySelector(".dot").remove() : false;
}

const markAllAsRead = function() {
    const unread = document.querySelectorAll(".unread");
    unread.forEach(e => {
        e.querySelector(".dot").remove();
        e.classList.remove("unread");
    })
    refreshNotifCount();
    removeMarkAsReadBtn();
}

const markOneAsRead = function(e) {
    e.classList.contains("unread") ? e.classList.remove("unread") : false;
    removeDot(e)
    refreshNotifCount();
    removeMarkAsReadBtn();
}


unread.forEach(e => {
    e.addEventListener("click", () => {
        markOneAsRead(e);
    })
})


markAllReadBtn.addEventListener("click", markAllAsRead)

addDot()
refreshNotifCount();