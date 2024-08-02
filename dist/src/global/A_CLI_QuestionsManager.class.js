"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.A_CLI_QuestionsManager = void 0;
const readline = __importStar(require("readline"));
class A_CLI_QuestionsManager {
    constructor() {
        // Create readline interface
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    ask(questions) {
        return __awaiter(this, void 0, void 0, function* () {
            let answers = {};
            for (const key in questions) {
                const question = questions[key];
                const answer = yield new Promise(resolve => this.rl.question(question, resolve));
                answers[key] = answer;
            }
            return answers;
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            this.rl.close();
        });
    }
}
exports.A_CLI_QuestionsManager = A_CLI_QuestionsManager;
//# sourceMappingURL=A_CLI_QuestionsManager.class.js.map