import { Router } from "express";
import { carouselRoutes } from "./carousel.routes";
import { categoriesRoutes } from "./categories.routes";
import { citiesRoutes } from "./cities.routes";
import { productRoutes } from "./products.routes";
import { restaurantRoutes } from "./restaurant.routes";
import { sessionRoutes } from "./sessions.routes";
import { usersRoutes } from "./users.routes";

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/sessions', sessionRoutes);
routes.use('/restaurants', restaurantRoutes);
routes.use('/categories', categoriesRoutes);
routes.use('/products', productRoutes);
routes.use('/cities', citiesRoutes);
routes.use('/carousel', carouselRoutes);

export {routes};