import fs from 'fs'
import path from 'path'
import {resolve} from 'path'
import upload from '../../../../../config/upload';
import uploadConfig from '../../../../../config/upload';
import { IStorageProvider } from "../models/IStorageProvider";

export class DiskStorageProvider implements IStorageProvider{

    public async save(file: string, folder: string): Promise<string> {
        await fs.promises.rename(
            resolve(upload.tmpFolder, file),
            resolve(`${upload.tmpFolder}/${folder}`, file)
        )

        return file;
    }

    public async delete(file: string, folder: string): Promise<void> {
        const filename = resolve(`${upload.tmpFolder}/${folder}`, file);
        try{
            await fs.promises.stat(filename);
        } catch {
            return;
        }

        await fs.promises.unlink(filename);

    }
    
    public async saveFile(file: string): Promise<string> {
        await fs.promises.rename(
            path.resolve(uploadConfig.tmpFolder, file),
            path.resolve(uploadConfig.uploadsFolder, file),
        )

        return file;
    }
    
    public async deleteFile(file: string): Promise<void> {
        const filePath = path.resolve(uploadConfig.uploadsFolder, file);

        try {
            await fs.promises.stat(filePath)
        } catch {
            return;
        }

        await fs.promises.unlink(filePath);
    }

}