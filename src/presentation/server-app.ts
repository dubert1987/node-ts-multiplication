

import { CreateTable } from "../domain/use-cases/create-table.use-cause";
import { SaveFile } from "../domain/use-cases/save-file.use-cause";

interface RunOptions {
    base:number;
    limit:number;
    show:boolean;
    destination:string;
    fileName:string;
}

export class ServerApp {
     static run ({base, limit, show, destination, fileName}: RunOptions) {
        
    const table = new CreateTable().execute({ base, limit});
    const wasCreated = new SaveFile().execute({fileContent: table, destination: destination, fileName: fileName });

    if(show){
        console.log(table)        
        }
        
    (wasCreated) ? console.log('file creado') : console.log('no creadp')
    }
}