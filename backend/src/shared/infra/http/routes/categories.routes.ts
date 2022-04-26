import { Router } from "express";
import multer from "multer";
import uploadConfig from "../../../../config/upload";
import { CreateCategoryController } from "../../../../modules/restaurants/services/CreateCategoryUseCase/CreateCategoryController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureIsSuperAdmin } from "../middlewares/ensureIsAdmin";

const categoriesRoutes = Router();

const upload = multer(uploadConfig)

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post('/create', ensureAuthenticated, ensureIsSuperAdmin,createCategoryController.execute);
categoriesRoutes.get('/', createCategoryController.listCategories);
categoriesRoutes.patch('/upload/:category_id', ensureAuthenticated, ensureIsSuperAdmin, upload.single('image'),createCategoryController.uploadImage);

export{categoriesRoutes};