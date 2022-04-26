import { Router } from "express";
import multer from "multer";
import uploadConfig from "../../../../config/upload";
import { CarouselController } from "../../../../modules/restaurants/services/CreateCarouselUseCase/CarrouselController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureIsSuperAdmin } from "../middlewares/ensureIsAdmin";

const carouselRoutes = Router();

const upload = multer(uploadConfig)

const carouselController = new CarouselController();

carouselRoutes.post('/create', ensureAuthenticated, ensureIsSuperAdmin, upload.single('image'),carouselController.create);
carouselRoutes.get('/', carouselController.list);

export {carouselRoutes}