import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/routes.js'
dotenv.config();

const server = express();

server.use(cors({
  origin: '',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: '*',
  exposedHeaders:'*',
  credentials: false
}));
server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.use('/api', router);
server.get((req, res) => {
  res.status(404).send('Page not Found');
});

const port = process.env.PORT || 5000;

server.listen(port, () => { console.log(`Server running on port ${port}`)});
