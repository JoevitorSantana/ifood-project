import { Router } from "express";
import { CreateUserController } from "../../../../modules/users/services/CreateServiceUseCase/CreateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post('/create', createUserController.create);

export {usersRoutes}