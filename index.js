const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/memes', (req, res) => res.send("Hello. Welcome to Reddit!"))
app.get('/birthdaycard/:username', (req,res) => {
     let name = req.params.username
     let hasConfetti = req.query.confetti === 'true';
     let confetti =  hasConfetti ? "##$%#$%##$@#$%#$%$#$%#$%" : "";

     res.send(`Happy Birthday ${name}! ${confetti} ${confetti}`)
    })

app.get('/profile', (req,res) => {
    let color = req.query.color;
    let activity = req.query.activity;
    res.send(`Your favorite color is ${color} and your favorite activity is ${activity}`)
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))