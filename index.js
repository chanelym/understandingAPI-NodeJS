const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// These routes serves recipes (ideia from last project)

let recipes = [
    {
    name: 'Rabanada',
    cuisine: 'Brazilian French Toast',
    history: 'Rabanada is the Brazilian version of french toast.',
    image: 'https://cdn.tasteatlas.com/images/dishes/5c33b6059a634e6195f80ff37c3f0997.jpg?mw=1300'
    },
];

app.get ('/recipes', (req,res) => {
    res.status('200').send({ recipes, message: 'Welcome' });
});

app.get ('/recipes/:id', (req,res) => {
    const id = req.params.id;
    const recipe = recipes[id];
    
    if (!recipe) {
        res.status('404').send(`Recipe with id ${id} was not found` );
    } else {
        res.status('200').send({ recipe });
    }
});

app.post('/recipes', (req, res) => {
    const recipe = req.body;
    const id = recipes.length;
    recipes.push(recipe);
    res.status('200').send({ message: `Recipe Successfully added! Recipe ID: ${id}` });
});

app.put("/recipes/:id", (req, res) => {
    const id = req.params.id;
    const recipe = req.body;
    const false_id = recipes[id];

    if( !false_id ) { 
        res.status('404').send(`Recipe with id ${id} was not found` );
    } else {
        recipes[id] = recipe;
        res.status('200').send({ message: `Recipe Successfully Modified! Recipe ID: ${id}` });
    }
});

app.delete('/recipes/:id', (req, res) => {
    const id = req.params.id;
    // res.json(recipes[id]);
    const recipe = req.body;
    const false_id = recipes[id];

    if( !false_id ) { 
        res.status('404').send(`Recipe with id ${id} was not found` );
    } else {
        delete recipes.splice(id, 1); 
        res.status('200').send({ message: `Recipe Successfully Deleted! Recipe ID: ${id}` });
    }
});

// These routes serves Musics

let musics = [
    {
        name: 'Falling',
        artist: 'Léon',
        duration: '3:55',
        year: 2019
    },
];

// Check if the song name exists in my array

function checkMusicExists (req, res, next) {
    if (!req.body.name){
        res.status('404').send(`Music with id ${id} was not found` );
    } return next();
};

// Check if the song id exists in my array

function checkMusicInArray (req, res, next) {
    const music = musics[req.params.id];
    if (!music) {
        res.status('404').send(`Music with id ${id} was not found` );
    } return next();
};

app.get ('/musics', (req,res) => {
    res.status('200').send({ musics, message: 'Welcome' });
});

app.get ('/musics/:id', checkMusicInArray, (req,res) => {
    
});

app.post('/musics', checkMusicExists, (req, res) => {
    
});

app.put("/musics/:id", checkMusicInArray, (req, res) => {
    const { id } = req.params;
    
    musics[id] = req.body;

    res.status(200).json({ message: `Song ${musics[id].name} from ${musics[id].artist} successfully modified!`, details: musics[id], redirect: '/musics/:id' });
});

app.delete('/musics/:id', checkMusicInArray, (req, res) => {
    const { id } = req.params;
    musics.splice(id, 1);

    res.status(200).send({ message: 'Song Successfully Deleted!', redirect: '/musics/' });
});

app.listen(port, () => console.info(`Server listening at http://localhost:${port}`));