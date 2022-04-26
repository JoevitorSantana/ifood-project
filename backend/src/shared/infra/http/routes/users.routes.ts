import { Router } from "express";
import multer from "multer";
import uploadConfig from "../../../../config/upload";
import { CreateAdminUserController } from "../../../../modules/users/services/CreateAdminUser/CreateAdminUserController";
import { CreateUserController } from "../../../../modules/users/services/CreateServiceUseCase/CreateUserController";
import { ProfileController } from "../../../../modules/users/services/UpdateProfileUseCase/ProfileController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();

const upload = multer(uploadConfig)

const createUserController = new CreateUserController();
const createBossUserController = new CreateAdminUserController();
const profileController = new ProfileController();

usersRoutes.post('/create', createUserController.create);
usersRoutes.post('/admin/create', createBossUserController.create);
usersRoutes.post('/superadmin/create', createBossUserController.createSuperUser);
usersRoutes.put('/update', ensureAuthenticated, profileController.update);
usersRoutes.get('/', ensureAuthenticated, profileController.show);
usersRoutes.patch('/avatar', ensureAuthenticated, upload.single('avatar'), profileController.updateAvatar);

export {usersRoutes}