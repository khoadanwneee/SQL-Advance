import express from 'express';

import * as authController from '../../controllers/admin/auth.controller.js';

const router = express.Router();

router.post('/login', authController.login);

export default router;