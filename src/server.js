require("dotenv").config();

const path = require('path')
const express = require("express");

const geoCode = require('../utils/geoCode');

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");

app.set("view engine", "ejs");

// requête entrante GET / ==> index.html
app.use(express.static(publicDirectoryPath));
// ici c'est static ce n'est pas ce qu'on veut alors on va mettre des templates engine.

app.get('/', (req, res) => {
    res.render('index', {
        title: "Weather App",
        paragraphe: "Cindy",
        name: "Cindy"
    });
});
// enpoint about --> page html complète
// enpoint temperature --> page html complète

app.get("/temperature/:city", async (req, res) => { // :city = nom de ville qui change, dynamique
    const city = req.params.city;
    const temperature = await geoCode(city); // return a promise
    console.log(temperature);
    res.render('temperature', {
        temperature,
        city
    });
});

// console.log(__dirname);
// console.log(path.join(__dirname, "../public")); // remonte d'un dossier

// const users = [
//     { id: 1, name: "Nissim", city: "Paris"},
//     { id: 2, name: "Morgane", city: "Dinard"},
//     { id: 3, name: "Lola", city: "Rennes"},
//     { id: 4, name: "Beatriz", city: "Biarritz"}
// ]


// empoints = routes

// app.get("/", (req, res) => {
//     res.send("/public/index.html");
// });


// app.get("/temperature", (req, res) => {
//     res.send("La temperature à Paris est de 2 degrés...");
// });

// app.get("/about", (req, res) => {
//     res.send("Je suis une dev et je m'appelle Cindy");
// });

// app.get("/users", (req, res) => {
//     res.send(users);
// });

// //renvoyer du html
// app.get('/html', (req, res) => {
//     res.send('<h1>Calcul de la température</h1>')
// });

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))

