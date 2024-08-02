import { A_CLI_Storage, A_CLI_STORAGE__Commands } from "../storage/A_CLI_Storage"
import { A_CLI_TYPES__CommandDecoratorConfig } from '../../types/A_CLI_Command.types'

export function A_CLI_Command(config: A_CLI_TYPES__CommandDecoratorConfig) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T):T {

        console.log('targetClass.constructor: ', constructor)


        const existedConfigurations = A_CLI_Storage.get(A_CLI_STORAGE__Commands) || new Map();

        const currentConfig = existedConfigurations.get(constructor) || {};

        existedConfigurations.set(constructor, {
            ...currentConfig,
            ...config,
        });

        A_CLI_Storage.set(A_CLI_STORAGE__Commands, existedConfigurations);

        return constructor;
    };
}