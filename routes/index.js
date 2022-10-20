import Router from 'express';
const router = Router();

import brandRouter from './brand.routes.js';
import producerRouter from './producer.routes.js';
import carRouter from './car.routes.js';
import characteristicRouter from './characteristic.routes.js';

router.use('/brand', brandRouter);
router.use('/producer', producerRouter);
router.use('/car', carRouter);
router.use('/characteristics', characteristicRouter);

export default router;