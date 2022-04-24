import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path'
import router from './routes/routes.js'

dotenv.config();

const __dirname = path.resolve();
console.log(path.join(__dirname, './public'))

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(express.static(path.join(__dirname, './public')));
server.use('/api', router);

server.use('*', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lok1</title>
  </head>
  <body>
    <style>
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
    </style>
    <div id="root"></div>
    <script src="./build/main.js"></script>
  </body>
  </html>`);
});

const port = process.env.PORT || 5000;

server.listen(port, () => { console.log(`Server running on port ${port}`)});
