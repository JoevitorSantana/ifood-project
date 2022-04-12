import { Router } from "express";
import { sessionRoutes } from "./sessions.routes";
import { usersRoutes } from "./users.routes";

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/sessions', sessionRoutes);

export {routes}