import Router from 'express';
import carController from '../controller/car.controller.js';
import multer from 'multer';
import cloudinary from '../cloudinary/index.js';

const upload = multer({ storage: cloudinary.storage });
const router = Router();

router.get('/', carController.getAllCars);
router.get('/:id', carController.getOneCar);
router.post('/', upload.single('image'), carController.createCar);
router.put('/:id', carController.updateCar);
router.delete('/:id', carController.deleteCar);

export default router;