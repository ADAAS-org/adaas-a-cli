import { A_CLI_TYPES__CommandDecoratorConfig } from "@adaas/a-sdk/types/A_CLI_Command.types";
import { A_CLI_BaseCommand } from "../../global/A_CLI_Command.class";

export const A_CLI_STORAGE__Commands = Symbol('a-cli-commands');




export const A_CLI_Storage: WeakMap<Symbol, Map<typeof A_CLI_BaseCommand, A_CLI_TYPES__CommandDecoratorConfig>> = new WeakMap()