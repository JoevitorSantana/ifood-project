import { Router } from "express";
import multer from "multer";
import uploadConfig from "../../../../config/upload";
import { CreateRestaurantController } from "../../../../modules/restaurants/services/CreateRestaurantUseCase/CreateRestaurantController";
import { RestaurantProfileController } from "../../../../modules/restaurants/services/UpdateRestaurantUseCase/UpdateRestaurantController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureIsAdmin } from "../middlewares/ensureIsAdmin";

const restaurantRoutes = Router();
const upload = multer(uploadConfig)

const createRestaurantController = new CreateRestaurantController();
const restaurantProfileController = new RestaurantProfileController();

restaurantRoutes.post('/create', ensureAuthenticated, ensureIsAdmin, createRestaurantController.execute);
restaurantRoutes.get('/:restaurant_id', ensureAuthenticated, restaurantProfileController.show);
restaurantRoutes.put('/update/:restaurant_id', ensureAuthenticated, ensureIsAdmin, upload.single('cover_image_url'),restaurantProfileController.update);
restaurantRoutes.patch('/avatar/:restaurant_id', ensureAuthenticated, ensureIsAdmin, upload.single('avatar'), restaurantProfileController.updateAvatar);


export {restaurantRoutes}