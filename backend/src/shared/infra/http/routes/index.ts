import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { restaurantRoutes } from "./restaurant.routes";
import { sessionRoutes } from "./sessions.routes";
import { usersRoutes } from "./users.routes";

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/sessions', sessionRoutes);
routes.use('/restaurants', restaurantRoutes);
routes.use('/categories', categoriesRoutes);

export {routes};