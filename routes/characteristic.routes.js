import Router from 'express';
import characteristicController from '../controller/characteristic.controller.js';
const router = Router();

router.get('/', characteristicController.getAllCarCharacteristics);
router.get('/:id', characteristicController.getCarCharacteristicById);
router.post('/', characteristicController.createCarCharacteristic);
router.put('/:id', characteristicController.updateCarCharacteristic);
router.delete('/:id', characteristicController.deleteCarCharacteristic);

export default router;