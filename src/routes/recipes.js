const express = require('express');
const router = express.Router();

// These routes serves recipes (ideia from last project)

let recipes = [
    {
    name: 'Rabanada',
    cuisine: 'Brazilian French Toast',
    history: 'Rabanada is the Brazilian version of french toast.',
    image: 'https://cdn.tasteatlas.com/images/dishes/5c33b6059a634e6195f80ff37c3f0997.jpg?mw=1300'
    },
];

// Rabanada is the BEST, add some banana with it. =D

router.get ('/', (req,res) => {
    res.status(200).send({ recipes, message: 'Welcome' });
});

router.get ('/:id', (req,res) => {
    const id = req.params.id;
    const recipe = recipes[id];
    
    if (!recipe) {
        res.status(404).send(`Recipe with id ${id} was not found` );
    } else {
        res.status(200).send({ recipe });
    }
});

router.post('/', (req, res) => {
    const recipe = req.body;
    const id = recipes.length;
    recipes.push(recipe);
    res.status(200).send({ message: `Recipe Successfully added! Recipe ID: ${id}` });
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const recipe = req.body;
    const false_id = recipes[id];

    if( !false_id ) { 
        res.status(404).send(`Recipe with id ${id} was not found` );
    } else {
        recipes[id] = recipe;
        res.status(200).send({ message: `Recipe Successfully Modified! Recipe ID: ${id}` });
    }
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const false_id = recipes[id];

    if( !false_id ) { 
        res.status(404).send(`Recipe with id ${id} was not found` );
    } else {
        delete recipes.splice(id, 1); 
        res.status(200).send({ message: `Recipe Successfully Deleted! Recipe ID: ${id}` });
    }
});

module.exports = router;