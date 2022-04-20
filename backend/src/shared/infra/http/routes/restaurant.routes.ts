import { Router } from "express";
import { CreateRestaurantController } from "../../../../modules/restaurants/services/CreateRestaurantUseCase/CreateRestaurantController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureIsAdmin } from "../middlewares/ensureIsAdmin";

const restaurantRoutes = Router();

const createRestaurantController = new CreateRestaurantController();

restaurantRoutes.post('/create', ensureAuthenticated, ensureIsAdmin, createRestaurantController.execute);


export {restaurantRoutes}