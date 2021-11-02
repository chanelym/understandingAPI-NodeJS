const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req,res) => {
    res.status(200).send({ message: 'Welcome to my Humble Home' }); 
});

const musicsRouter = require('./config/routes/musics'); 
app.use('/musics', musicsRouter); 

const recipesRouter = require('./config/routes/recipes');
app.use('/recipes', recipesRouter);

app.listen(port, () => console.info(`Server listening at http://localhost:${port}`));