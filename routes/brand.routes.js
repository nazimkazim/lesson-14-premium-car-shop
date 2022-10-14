import Router from 'express';
import brandController from '../controller/brand.controller.js';
const router = Router();

router.get('/', brandController.getAllBrands);
router.get('/:id', brandController.getOneBrand);
router.post('/', brandController.createBrand);
router.put('/:id', brandController.updateBrand);
router.delete('/:id', brandController.deleteBrand);

export default router;