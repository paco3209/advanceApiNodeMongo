import {Router} from 'express'
const router = Router()
import * as productsController from "../controllers/products.controller";
import { authJwt} from '../middleware'


router.get('/',productsController.getProducts);

router.post('/',[authJwt.verifyToken, authJwt.isModerator].createProduct)

router.delete('/:productId',[verifyToken,productsController,authJwt.isModerator].deleteProductById);

router.get('/:productId',productsController.getProductById)

router.put('/:productId',[verifyToken,productsController,authJwt.isModerator].updateProductById)


export default router