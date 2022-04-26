import { Router } from "express";
import multer from "multer";
import uploadConfig from "../../../../config/upload";
import { CreateProductController } from "../../../../modules/restaurants/services/CreateProductService/CreateProductController";
import { ListProductsByRestaurantController } from "../../../../modules/restaurants/services/ListProductsByRestaurantUseCase/ListProductsByRestaurantController";
import { UploadProductImagesController } from "../../../../modules/restaurants/services/UploadProductImagesUseCase/UploadProductImagesController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureIsAdmin } from "../middlewares/ensureIsAdmin";

const productRoutes = Router();
const upload = multer(uploadConfig)

const createProductController = new CreateProductController();
const listProductsByRestaurantController = new ListProductsByRestaurantController();
const uploadProductsImageController = new UploadProductImagesController();

productRoutes.post('/create/:restaurant_id', ensureAuthenticated, ensureIsAdmin, createProductController.create);
productRoutes.get('/list/', ensureAuthenticated, listProductsByRestaurantController.list); 
productRoutes.post('/images/:id', ensureAuthenticated, ensureIsAdmin, upload.array("images"), uploadProductsImageController.handle);

export {productRoutes}