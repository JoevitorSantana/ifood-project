import {resolve} from 'path';
import path from 'path';
import multer from 'multer';
import crypto from 'crypto';

const tmpFolder = resolve(__dirname, '..', '..', 'tmp');

export default {
    tmpFolder: tmpFolder,
    uploadsFolder: path.resolve(tmpFolder, 'uploads'),    
    //categoriesFolder: path.resolve(tmpFolder, 'categories'),

    storage: multer.diskStorage({
        destination: tmpFolder,
        filename: (request, file, callback) => {
            const fileHash = crypto.randomBytes(10).toString(`hex`);
            const fileName = `${fileHash}+${file.originalname}`;
            return callback(null, fileName);
        }
    })
}