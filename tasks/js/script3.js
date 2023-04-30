function getRundomNum(min = 1, max = 800) {
    return min + Math.floor(Math.random() * (max - min + 1))
}
function createArr(length) {
    let arr = []
    for (let i = 0; i < length; i++) {
        arr.push(getRundomNum())
    }
    return arr
}

function getTimeOfSortByBulbashka() {
    const arr = createArr(1000)
    const start = new Date()
    let changes    
    do {
        changes = false
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                let temp = arr[i - 1]
                arr[i - 1] = arr[i]
                arr[i] = temp
                changes = true
            }
        }
    } while (changes)
    const end = new Date()
    const diff = end - start
    console.log(diff)
    return diff
}

function getTimeOfSortByVstavka() {
    const arr = createArr(1000)
    const start = new Date()
    let key, i
    for (let k = 1; k < arr.length; k++) {
        key = arr[k]
        i = k - 1
        while (i >= 0 && arr[i] > key) {
            arr[i + 1] = arr[i]
            i -= 1
        }
        arr[i + 1] = key
    }
    const end = new Date()
    const diff = end - start
    console.log(diff)
    return diff
}

document.getElementById('res').innerText = `Sort by "Bulbashka" = ${getTimeOfSortByBulbashka()} ms
Sort by "Vstavka" = ${getTimeOfSortByVstavka() } ms`
