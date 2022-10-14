import Router from 'express';
import brandController from '../controller/brand.controller.js';
const router = Router();

router.get('/', brandController.getAllBrands);
router.get('/:id', (req, res) => {});
router.post('/', brandController.createBrand);
router.put('/:id', (req, res) => {});
router.delete('/:id', (req, res) => {});

export default router;