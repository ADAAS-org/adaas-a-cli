import { A_CLI_TYPES__CommandDecoratorConfig } from "../../types/A_CLI_Command.types";
import { A_CLI_BaseCommand } from "../../global/A_CLI_Command.class";
export declare const A_CLI_STORAGE__Commands: unique symbol;
export declare const A_CLI_Storage: WeakMap<Symbol, Map<typeof A_CLI_BaseCommand, A_CLI_TYPES__CommandDecoratorConfig>>;
