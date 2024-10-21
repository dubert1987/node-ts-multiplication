
export interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string;
};

export interface CreateTableOptions {
    base: number;
    limit?: number;
}
export class CreateTable {
    constructor (
        /**
         * DI Inyeccion de dependencia
         */
    ) {}

    execute ({ base, limit = 10}: CreateTableOptions) {
        let outputMsg = '';
        for(let i=1; i <= limit; i++) {
            outputMsg += `${base} x ${i} = ${base * i}\n`;
        }

        return outputMsg;
    }
}