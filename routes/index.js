import Router from 'express';
const router = Router();

import brandRouter from './brand.routes.js';

router.use('/brand', brandRouter);

export default router;