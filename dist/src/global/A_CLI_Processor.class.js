"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_CLI_Processor = void 0;
const A_CLI_Storage_1 = require("../commands/storage/A_CLI_Storage");
class A_CLI_Processor {
    constructor(path, ...processArgs) {
        this.handlers = new Map();
        console.log('Processor:', processArgs);
        console.log('Path:', path);
        const targetArgs = processArgs.slice(2);
        this._command = targetArgs[0];
        console.log('Command:', this._command);
        this._path = path;
        this.args = this.extractArgs(processArgs);
    }
    use(commands) {
        for (const command of commands) {
            const commandConfig = A_CLI_Storage_1.A_CLI_Storage.get(A_CLI_Storage_1.A_CLI_STORAGE__Commands);
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
    extractArgs(argv) {
        const args = {};
        let currentKey = null;
        argv.forEach(arg => {
            if (arg.startsWith('--')) {
                currentKey = arg.slice(2);
                if (!args[currentKey]) {
                    args[currentKey] = [];
                }
            }
            else if (currentKey) {
                if (Array.isArray(args[currentKey])) {
                    args[currentKey].push(arg);
                }
                else {
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
    }
    ;
    process() {
        return __awaiter(this, void 0, void 0, function* () {
            const command = this.handlers.get(this._command);
            if (!command) {
                throw new Error(`Command not found: ${this.args.namespace}:${this.args.command}`);
            }
            const instance = new command.command(command.config.requiredFields, this.args);
            yield instance.execute();
        });
    }
}
exports.A_CLI_Processor = A_CLI_Processor;
//# sourceMappingURL=A_CLI_Processor.class.js.map