const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    population: {
        type: Number,
        required: true,
    },
    terrain: {
        type: String,
        required: true,
    },
    climate: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Planet', planetSchema);
