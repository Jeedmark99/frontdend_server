import express from 'express';
import bodyParser from 'body-parser'

const app = express();
const PORT = 2000;

app.use(bodyParser.json());

//Get request 
app.get('/', (req, res) =>  res.send("Hello from homepage"));

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));