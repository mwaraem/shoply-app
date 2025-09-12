import { Router } from 'express';
import { listProducts, createProduct, updateProduct, getProductById, deleteProduct } from '../controllers/product.controller.js';
import { protect, requireAdmin } from '../middleware/auth.js';

const router = Router();

router.get("/", listProducts);
router.get("/:id", getProductById);
router.post("/", protect, requireAdmin, createProduct);
router.put("/:id", protect, requireAdmin, updateProduct);
router.delete("/:id", protect, requireAdmin, deleteProduct);

export default router;

