export interface IStorageProvider{
    saveFile(file: string):Promise<string>;
    deleteFile(file: string):Promise<void>;
    save(file: string, folder: string):Promise<string>;
    delete(file: string, folder: string):Promise<void>;
}