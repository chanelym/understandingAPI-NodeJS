const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req,res) => {
    res.status(200).send({ message: 'Welcome to my Humble Home. You can go to: /recipes or /musics' }); 
});

const musicsRouter = require('./src/routes/musics'); 
app.use('/musics', musicsRouter); 

const recipesRouter = require('./src/routes/recipes');
app.use('/recipes', recipesRouter);

const booksRouter = require('./src/routes/books');
app.use('/books', booksRouter);

app.listen(port, () => console.info(`Server listening at http://localhost:${port}`));