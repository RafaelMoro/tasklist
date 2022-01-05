const generateRandomId = () => {
    const random_number = Math.random()
    return Math.floor(random_number*10000)
}

export {generateRandomId}