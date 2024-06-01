const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    birthYear: {
        type: String,
        required: true,
    },
    eyeColor: {
        type: String,
        required: true,
    },
    films: {
        type: [String],
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    hairColor: {
        type: String,
        required: true,
    },
    height: {
        type: String,
        required: true,
    },
    homeworld: {
        type: String,
        required: true,
    },
    mass: {
        type: String, required: true,
    },
    name: {
        type: String,
        required: true
    },
    skinColor: {
        type: String,
        required: true,
    },
    created: {
        type: Date, required: true,
    },
    edited: {
        type: Date, required: true,
    },
    species: {
        type: [String], required: true,
    },
    starships: {
        type: [String], required: true,
    },
    url: {
        type: String, required: true,
    },
    vehicles: {
        type: [String], required: true,
    },
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
