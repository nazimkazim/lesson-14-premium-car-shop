import Router from 'express';
const router = Router();

import brandRouter from './brand.routes.js';
import producerRouter from './producer.routes.js';
import carRouter from './car.routes.js';

router.use('/brand', brandRouter);
router.use('/producer', producerRouter);
router.use('/car', carRouter);

export default router;