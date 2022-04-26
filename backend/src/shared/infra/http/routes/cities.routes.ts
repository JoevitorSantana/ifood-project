import { Router } from "express";
import { ListCitiesController } from "../../../../modules/restaurants/services/ListCitiesUseCase/ListCitiesController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureIsSuperAdmin } from "../middlewares/ensureIsAdmin";

const citiesRoutes = Router(); 

const listCitiesController = new ListCitiesController();

citiesRoutes.get('/', ensureAuthenticated, ensureIsSuperAdmin, listCitiesController.list);
citiesRoutes.get('/list', listCitiesController.listByRegion);

export {citiesRoutes}