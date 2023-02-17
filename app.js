import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var app = express();
app.use(express.json())
app.use(express.static(__dirname + '/public')); 
app.use(express.urlencoded({ extended: true }))
var port = 8000; 



app.post('/index', (req, res) => {

    var pass = req.body.pass
    if (pass == "zak123") {
        res.send('<h3> You are connected successfuly  </h3>');
    }
    else {
        res.send('<h3>  Informations are wrong : Try again   </h3>');
    }
})

app.listen(port, () => {
    console.log('listening for requests on port 8000')
  })







