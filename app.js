// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))





const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


const port = 5000;



// temp object
const myObj = {
	name: 'arif',
	age: 26
}
app.get('/', (req, res) => {
  res.send(JSON.stringify(myObj));
})


app.listen(port, () =>{
	console.log('liseting you')
});