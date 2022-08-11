import * as express from 'express';
import * as http from 'http';
import { Request, Response ,Router} from 'express';
import * as bodyParser from 'body-parser';
import { Feature } from './feature';

var port = 5200;
var app = express();
var router = express.Router();
var server = http.createServer(app)
app.use(bodyParser.json());
app.use(router);

let feature : Feature = new Feature();
feature.setRoutes(router);

server.listen(port, () => {
    console.log('server running at ', port);
})