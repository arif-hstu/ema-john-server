/*process .env variables*/
require('dotenv').config();


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// import mongodb info
// require mongoClient
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const password = 'pCWt1AYUBfqguj0W';
const uri = `mongodb+srv://arif-hstu:${process.env.DB_PASS}@cluster0.rqnu2.mongodb.net/{process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// setting port
const port = 5000;
app.listen(process.env.PORT || port, () => {
	console.log('liseting you')
});


/***********
*
* server requests go here
*
*************/
// deal with mongodb
client.connect(err => {
	const productsCollection = client.db(process.env.DB_NAME).collection("products");
	console.log('database connection successful');

	// add a single product request
	app.post('/addProduct', (req, res) => {
		console.log(req.body)
		productsCollection.insertOne(req.body);
		res.send(JSON.stringify({message: 'Your product added to the Database!'}))
	})

	// get all products by request
	app.get('/allProducts', (req,res) => {
		productsCollection.find()
		.toArray((err, documents) => {
			res.send(documents)
		})
	})
})


app.get('/', (req, res) => {
	res.send('Your api is working');
})




