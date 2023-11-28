const express = require('express')
const mongoose = require('mongoose');
const bodyParser =require('body-parser')

const app = express();
const port = 3000;

const authRoutes=require('./auths/authRoutes')
require('./models/user')
const requireToken = require('./middleware/requireToken')
app.use(bodyParser.json());
app.use(authRoutes)



// MongoDb Connection codes

// Connect to MongoDB Atlas
const dbURI = 'mongodb+srv://rajan8979:Rajan8979@cluster0.br3s96a.mongodb.net/';
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

app.get('/',requireToken,(req,res)=>{
  res.send({email:req.user.email})
})



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
