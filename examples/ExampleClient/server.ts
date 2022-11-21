import * as express from 'express';
import * as http from 'http';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import { Feature } from './feature';

const port = 5200;
const app = express();
const router = express.Router();
const server = http.createServer(app);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(router);

const feature = new Feature();
feature.setRoutes(router);

server.listen(port, () => {
    console.log(`ExampleClient running at port ${port}.`);
});