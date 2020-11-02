import { Router, Request, Response } from 'express'

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

    res.json({
        ok: true,
        message: 'Message save',
        data: {
            autor,
            message
        }
    });

});



router.get('/messages/:id', (req:Request, res: Response) => {

    const id = req.params.id;

    res.json({
        ok: true,
        message: 'Message save',
        data: {
            id: id,
            autor: 'Javier Cruz',
            message: 'Register new message'
        }
    })

});


export default router;