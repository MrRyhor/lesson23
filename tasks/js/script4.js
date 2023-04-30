function getRandomNum(min = 1, max = 100) {
    return min + Math.floor(Math.random() * (max - min + 1))
}

function getAddTask() {
    const num1 = getRandomNum()
    const num2 = getRandomNum()
    const userAnswer = parseInt(prompt(`${num1} + ${num2} = ?`))
    return userAnswer
}

function getDiffStartTimeEndTime() {
    const start = new Date()
    getAddTask()
    const end = new Date()
    const diff = end - start
    const date = new Date(diff)
    document.getElementById('res').innerText = `Задача решена за ${date.getSeconds()} секунд`    
}

getDiffStartTimeEndTime()