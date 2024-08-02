import { A_CLI_TYPES__CommandDecoratorConfig } from '../../types/A_CLI_Command.types';
export declare function A_CLI_Command(config: A_CLI_TYPES__CommandDecoratorConfig): <T extends {
    new (...args: any[]): {};
}>(constructor: T) => T;
