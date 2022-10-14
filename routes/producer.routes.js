import Router from 'express';
import producerController from '../controller/producer.controller.js';

const router = Router();

router.get('/', producerController.getAllProducers);
router.get('/:id', producerController.getOneProducer);
router.post('/', producerController.createProducer);
router.put('/:id', producerController.updateProducer);
router.delete('/:id', producerController.deleteProducer);

export default router;



