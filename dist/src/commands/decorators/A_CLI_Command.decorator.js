"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_CLI_Command = A_CLI_Command;
const A_CLI_Storage_1 = require("../storage/A_CLI_Storage");
function A_CLI_Command(config) {
    return function (constructor) {
        console.log('targetClass.constructor: ', constructor);
        const existedConfigurations = A_CLI_Storage_1.A_CLI_Storage.get(A_CLI_Storage_1.A_CLI_STORAGE__Commands) || new Map();
        const currentConfig = existedConfigurations.get(constructor) || {};
        existedConfigurations.set(constructor, Object.assign(Object.assign({}, currentConfig), config));
        A_CLI_Storage_1.A_CLI_Storage.set(A_CLI_Storage_1.A_CLI_STORAGE__Commands, existedConfigurations);
        return constructor;
    };
}
//# sourceMappingURL=A_CLI_Command.decorator.js.map