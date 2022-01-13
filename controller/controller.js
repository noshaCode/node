
const simple = (req,res)=> {
    res.send(`You are visiting ${req.originalUrl}`)
}

const sendMyName = (req,res)=> {
    res.send(`Hello Nuha, You are visiting ${req.originalUrl}`)
}

module.exports = { simple, sendMyName }