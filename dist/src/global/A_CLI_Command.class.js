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
exports.A_CLI_BaseCommand = void 0;
const A_CLI_QuestionsManager_class_1 = require("./A_CLI_QuestionsManager.class");
class A_CLI_BaseCommand {
    constructor(requiredArgs, args) {
        /**
         * The first argument in the class should be received arguments from the command line
         */
        // Check if the required fields are present
        requiredArgs.forEach(field => {
            if (!args[field]) {
                throw new Error(`Missing required field: ${field}`);
            }
            if (!this.args)
                this.args = {};
            this.args[field] = args[field];
        });
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const qm = new A_CLI_QuestionsManager_class_1.A_CLI_QuestionsManager();
            const answers = yield qm.ask(this.questions);
        });
    }
    main() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.A_CLI_BaseCommand = A_CLI_BaseCommand;
//# sourceMappingURL=A_CLI_Command.class.js.map