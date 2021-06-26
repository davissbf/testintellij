import express from 'express';
import serverRouter from "./router";

const server = express();
server.use(express.json());
server.use(serverRouter);

server.listen(3333, () => {
    console.log('Server is running!');
});
