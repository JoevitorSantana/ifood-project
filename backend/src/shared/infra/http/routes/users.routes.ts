import { Router } from "express";
import { CreateAdminUserController } from "../../../../modules/users/services/CreateAdminUser/CreateAdminUserController";
import { CreateUserController } from "../../../../modules/users/services/CreateServiceUseCase/CreateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const createBossUserController = new CreateAdminUserController();

usersRoutes.post('/create', createUserController.create);
usersRoutes.post('/admin/create', createBossUserController.create);
usersRoutes.post('/superadmin/create', createBossUserController.createSuperUser);

export {usersRoutes}