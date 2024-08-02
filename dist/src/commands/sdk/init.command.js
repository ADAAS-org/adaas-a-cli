"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.A_CLI_SdkInitCommand = exports.A_CLI_SdkInitCommand_RequiredArgs = void 0;
const A_CLI_Command_class_1 = require("../../global/A_CLI_Command.class");
const A_CLI_Command_decorator_1 = require("../decorators/A_CLI_Command.decorator");
exports.A_CLI_SdkInitCommand_RequiredArgs = ['namespace'];
let A_CLI_SdkInitCommand = class A_CLI_SdkInitCommand extends A_CLI_Command_class_1.A_CLI_BaseCommand {
    constructor() {
        super(...arguments);
        this.questions = {
            name: 'What is the name of your SDK?',
            version: 'What is the version of your SDK?',
            description: 'Please provide a description of your SDK',
        };
    }
    main() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Executing sdk:init command');
        });
    }
};
exports.A_CLI_SdkInitCommand = A_CLI_SdkInitCommand;
exports.A_CLI_SdkInitCommand = A_CLI_SdkInitCommand = __decorate([
    (0, A_CLI_Command_decorator_1.A_CLI_Command)({
        name: 'init',
        namespace: 'sdk',
        description: 'Initialize a new SDK',
        requiredFields: exports.A_CLI_SdkInitCommand_RequiredArgs,
    })
], A_CLI_SdkInitCommand);
//# sourceMappingURL=init.command.js.map