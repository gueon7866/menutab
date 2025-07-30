const tabList = document.querySelectorAll('.tab li')
const content = document.querySelectorAll('.content')

let i = 0;

init(i)

function init(q) {
    tabList[q].classList.add('on')
    content[q].classList.add('active')
}

function reset() {
    for (let i = 0; i < tabList.length; i++) {
        tabList[i].classList.remove('on')
        content[i].classList.remove('active')
    }
}


tabList.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        e.preventDefault()

        reset()
        console.log(index)
        init(index)
    })
})
