import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path'
import router from './routes/routes.js'

dotenv.config();

const __dirname = path.resolve();

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(express.static(path.join(__dirname, './dist')));

server.use('/api', router);

server.use('*', (req, res) => {
  console.log((path.join(__dirname+'/dist/static/')));
  try {
    res.sendFile(path.join(__dirname+'/dist/index.html'));
  } catch (error) {
    return;
  }
});

const port = process.env.PORT || 5000;

server.listen(port, () => { console.log(`Server running on port ${port}`)});
