const express =  require('express');
const monggose = require('mongoose');


const app = express();

// Connect to MongoDB
monggose.connect('mongodb://localhost/todo', {
     useNewUrlParser: true,
     useUnifiedTopology: true 
    })


//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');


//routing 
app.use(require('./routes/index'));
app.use(require('./routes/todo'));


//server node js 
app.listen(3000, () => console.log(`server listening on port 3000`));
