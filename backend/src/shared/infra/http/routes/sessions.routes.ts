import { Router } from "express";
import { AuthenticationController } from "../../../../modules/users/services/Authentication/AuthenticationController";

const sessionRoutes = Router();

const authenticationController = new AuthenticationController();

sessionRoutes.post('/auth', authenticationController.create);

export {sessionRoutes};