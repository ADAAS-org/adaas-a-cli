import { A_CLI_BaseCommand } from "../../global/A_CLI_Command.class";
export declare const A_CLI_SdkInitCommand_RequiredArgs: string[];
export declare class A_CLI_SdkInitCommand extends A_CLI_BaseCommand<typeof A_CLI_SdkInitCommand_RequiredArgs> {
    protected questions: {
        name: string;
        version: string;
        description: string;
    };
    protected main(): Promise<void>;
}
