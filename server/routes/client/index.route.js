import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Client Dashboard');
});

export default router;