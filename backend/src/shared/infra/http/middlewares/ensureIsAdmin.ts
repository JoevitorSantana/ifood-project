import { NextFunction, Request, Response } from "express";
import { UsersRepository } from "../../../../modules/users/repositories/UsersRepository";
import { AppError } from "../../../errors/AppError";

export async function ensureIsSuperAdmin(request: Request, response:Response, next:NextFunction){
    const {id} = request.user;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(id);

    if(user?.role !== 'superAdmin'){
        throw new AppError('Access denied');
    }

    return next();
}

export async function ensureIsAdmin(request: Request, response:Response, next:NextFunction){
    const {id} = request.user;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(id);

    if(user?.role !== 'admin'){
        throw new AppError('Access denied');
    }

    return next();
}