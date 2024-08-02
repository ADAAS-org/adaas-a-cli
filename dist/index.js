#!/usr/bin/env node
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
const init_command_1 = require("./src/commands/sdk/init.command");
const A_CLI_Processor_class_1 = require("./src/global/A_CLI_Processor.class");
// Main function to handle CLI commands
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('CLI Processor started', process.execArgv);
    yield new A_CLI_Processor_class_1.A_CLI_Processor(process.cwd(), ...process.argv)
        .use([
        init_command_1.A_CLI_SdkInitCommand,
    ])
        .process();
});
main();
//# sourceMappingURL=index.js.map