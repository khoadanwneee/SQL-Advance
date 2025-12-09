import express from 'express';

import authRoute from './auth.route.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Client Dashboard');
});

router.use('/auth', authRoute);

export default router;