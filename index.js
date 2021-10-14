function writeCards(name, occasion) {
    let message = [];
    for (let i = 0; i < name.length; i++) {
        message.push(`Thank you, ${name[i]}, for the wonderful ${occasion} gift!`)
    }
    return message;
}

function countDown(num) {
    for (let i = 0; i <= num; i++) {
        console.log(num - i)
    }
}