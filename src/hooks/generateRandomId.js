const generateRandomId = () => {
    const random_number = Math.random()
    return Math.floor(random_number*100)
}

export {generateRandomId}