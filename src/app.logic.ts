import fs from 'fs';
import { yarg as argv } from "./config/plugins/args.plugin";

let outputMsg = '';
const base:number = argv.b;
const maxIterate:number = argv.l;
const header:string = `
=================================================
                Tabla del ${base}
=================================================\n
`;

for(let i=1; i <= maxIterate; i++) {
    outputMsg += `${base} x ${i} = ${base * i}\n`;
}

outputMsg = header + outputMsg;

const outputPath = 'outputs';
fs.mkdirSync(outputPath, {recursive: true});
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMsg);

if (argv.s){
    console.log(outputMsg);
}

console.log('file created');