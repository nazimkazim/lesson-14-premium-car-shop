import Router from "express";
import producerController from "../controller/producer.controller.js";
import multer from "multer";
import cloudinary from "../cloudinary/index.js";
const upload = multer({ storage: cloudinary.storage });

const router = Router();

router.get("/", producerController.getAllProducers);
router.get("/:id", producerController.getOneProducer);
router.post("/", upload.single("logo"), producerController.createProducer);
router.put("/:id", producerController.updateProducer);
router.delete("/:id", producerController.deleteProducer);

export default router;
