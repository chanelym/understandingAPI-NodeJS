const express = require('express');
const router = express.Router();

// These routes serves Musics

let musics = [
    {
        name: 'Falling',
        artist: 'Léon',
        duration: '3:55',
        year: 2019
    },
];

// Check if the song name is inside Body

function checkMusicExists (req, res, next) {
    if (!req.body.name) {
    return res.status(400).json({ error: 'Music name is required' });   
    }
    return next(); 
}

// Check if the song id exists in my array

function checkMusicInArray(req, res, next) {
    const music = musics[req.params.id];
    if (!music) {
        return res.status(404).json({ error: 'Music does not exists' });
    } 
    req.music = music;
    return next();
}

// Starting Endpoint routing

router.get ('/', (req,res) => {
    res.status(200).send({  message: 'Welcome, we have these songs with us: ', musics });
});

router.get ('/:id', checkMusicInArray, (req,res) => {
    const { id } = req.params;
    const music = musics[id];

    res.status(200).send({ music });
});

router.post('/', checkMusicExists, (req, res) => {
    const name = req.body;
    musics.push(name);

    res.status(200).json({ message: 'Song successfully created!', details: musics, redirect: '/musics/' });
});

router.put("/:id", checkMusicInArray, checkMusicExists, (req, res) => {
    const { id } = req.params;
    musics[id] = req.body;

    res.status(200).json({ message: `Song ${musics[id].name} from ${musics[id].artist} successfully modified!`, details: musics[id], redirect: '/musics/:id' });
});

router.delete('/:id', checkMusicInArray, (req, res) => {
    const { id } = req.params;
    musics.splice(id, 1);

    res.status(200).send({ message: 'Song Successfully Deleted!', redirect: '/musics/' });
});

module.exports = router;