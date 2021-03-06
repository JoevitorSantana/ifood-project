import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import uploadConfig from './config/upload';
import cors from 'cors';
import { routes } from './shared/infra/http/routes';
import './shared/container';
import './database';
import { errors } from 'celebrate';
import { AppError } from './shared/errors/AppError';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.use('/files', express.static(uploadConfig.tmpFolder));

app.listen(3334, () => console.log('Server is running'));

app.get('/', (request, response) => {
    return response.json({ message: 'Hello world!' })
});

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError){
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        })
    }

    console.log(err);

    return response.status(500).json({
        status: 'error',
        message: 'internal server error'
    })
})