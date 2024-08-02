import { A_CLI_Storage, A_CLI_STORAGE__Commands } from "../commands/storage/A_CLI_Storage";
import { A_CLI_TYPES__ProcessorParsedArgs } from "../types/A_CLI_Router.types";
import { A_CLI_BaseCommand } from "./A_CLI_Command.class";
import { A_CLI_TYPES__CommandDecoratorConfig } from "../types/A_CLI_Command.types";



export class A_CLI_Processor {

    private _command!: string;
    private _path!: string;

    private args!: A_CLI_TYPES__ProcessorParsedArgs;

    private handlers: Map<string, {
        command: typeof A_CLI_BaseCommand,
        config: A_CLI_TYPES__CommandDecoratorConfig
    }> = new Map();


    constructor(
        path: string,
        ...processArgs: string[]
    ) {
        console.log('Processor:', processArgs);
        console.log('Path:', path);

        const targetArgs = processArgs.slice(2);

        this._command = targetArgs[0];

        console.log('Command:', this._command);

        this._path = path;

        this.args = this.extractArgs(processArgs);
    }


    use(commands: typeof A_CLI_BaseCommand[]): this {

        for (const command of commands) {
            const commandConfig = A_CLI_Storage.get(A_CLI_STORAGE__Commands);

            if (!commandConfig) {
                throw new Error('Command config not found');
            }

            const config = commandConfig.get(command);

            if (!config) {
                throw new Error('Command target not found');
            }

            this.handlers.set(`${config.namespace}:${config.name}`, {
                command,
                config
            });
        }

        return this;
    }

    private extractArgs(argv: string[]): A_CLI_TYPES__ProcessorParsedArgs {
        const args: A_CLI_TYPES__ProcessorParsedArgs = {};
        let currentKey: string | null = null;

        argv.forEach(arg => {
            if (arg.startsWith('--')) {
                currentKey = arg.slice(2);
                if (!args[currentKey]) {
                    args[currentKey] = [];
                }
            } else if (currentKey) {
                if (Array.isArray(args[currentKey])) {
                    (args[currentKey] as string[]).push(arg);
                } else {
                    args[currentKey] = [arg];
                }
            }
        });

        // Convert single value arrays to strings
        for (const key in args) {
            if (Array.isArray(args[key]) && args[key].length === 1) {
                args[key] = args[key][0];
            }
        }

        return args;
    };

    async process() {
        const command = this.handlers.get(this._command);

        if (!command) {
            throw new Error(`Command not found: ${this.args.namespace}:${this.args.command}`);
        }

        const instance = new command.command(
            command.config.requiredFields,
            this.args
        );

        await instance.execute();

    }

} 