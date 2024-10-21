import { yarg as argv } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

(async ()=>{
     await main();
})();

async function main(){
    const { b: base, l: limit, s: show, n: fileName, d: destination } = argv
    ServerApp.run({ base, limit, show, fileName, destination });
};