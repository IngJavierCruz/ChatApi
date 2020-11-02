import { Router, Request, Response } from 'express'
import Server from '../class/server';

const router = Router();


router.get('/messages', (req: Request, res:Response) => {

    res.json({
        ok: true,
        message: 'response ok'
    });

});


router.post('/messages', (req: Request, res: Response) => {

    const autor = req.body.autor;
    const message = req.body.message;
    let data = {
        autor,
        message
    };

    const server = Server.instance;
    server.io.emit('new-message', data)

    res.json({
        ok: true,
        message: 'Message save',
        data
    });

});



router.get('/messages/:id', (req:Request, res: Response) => {

    const id = req.params.id;
    let data = {
        id,
        autor: 'Javier Cruz',
        message: 'Register new message'
    };

    const server = Server.instance;
    server.io.in(id).emit('message-private', data);

    res.json({
        ok: true,
        message: 'Message save',
        data
    });

});


export default router;