import Router from 'express';
import brandController from '../controller/brand.controller.js';
import multer from 'multer';
import cloudinary from '../cloudinary/index.js';
const router = Router();

const upload = multer({storage: cloudinary.storage});

router.get('/', brandController.getAllBrands);
router.get('/:id', brandController.getOneBrand);
router.post('/', upload.single('logo'), brandController.createBrand);
router.put('/:id', brandController.updateBrand);
router.delete('/:id', brandController.deleteBrand);

export default router;