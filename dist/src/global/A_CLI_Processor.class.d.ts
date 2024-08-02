import { A_CLI_BaseCommand } from "./A_CLI_Command.class";
export declare class A_CLI_Processor {
    private _command;
    private _path;
    private args;
    private handlers;
    constructor(path: string, ...processArgs: string[]);
    use(commands: typeof A_CLI_BaseCommand[]): this;
    private extractArgs;
    process(): Promise<void>;
}
