import { Router } from "express";
import { CreateCategoryController } from "../../../../modules/restaurants/services/CreateCategoryUseCase/CreateCategoryController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureIsSuperAdmin } from "../middlewares/ensureIsAdmin";

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post('/create', ensureAuthenticated, ensureIsSuperAdmin,createCategoryController.execute);

export{categoriesRoutes};