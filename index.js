function writeCards(names, occasion) {
    const newArray = []
    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`)
        debugger;
    }
    return newArray;
}

writeCards(names)
function countDown(number) {
    let n = number
    while (n >= 0)
        console.log(n--);
}
countDown(3)
