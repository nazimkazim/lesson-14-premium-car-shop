import Router from 'express';
import carController from '../controller/car.controller.js';
const router = Router();

router.get('/', carController.getAllCars);
router.get('/:id', carController.getOneCar);
router.post('/', carController.createCar);
router.put('/:id', carController.updateCar);
router.delete('/:id', carController.deleteCar);

export default router;