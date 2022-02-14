const monggose = require('mongoose');


const todoSchema = new monggose.Schema({
    todo : {
        type: String,
        required: true
    
    }
});

module.exports = monggose.model('Todo', todoSchema);

