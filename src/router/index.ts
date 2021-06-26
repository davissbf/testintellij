import { Router } from 'express';

const serverRouter = Router();

serverRouter.get('/', (req, res) => {
    res.json({ Message : 'Hello' });
});

const users: Object = [];

serverRouter.get('/user', (req, res) => {
    return res.json(users);
});

serverRouter.post('/user', (req, res) => {

});

export default serverRouter;
