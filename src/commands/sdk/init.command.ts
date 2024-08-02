import { A_CLI_BaseCommand } from "../../global/A_CLI_Command.class";
import { A_CLI_Command } from "../decorators/A_CLI_Command.decorator";

export const A_CLI_SdkInitCommand_RequiredArgs = ['namespace'];



@A_CLI_Command({
    name: 'init',
    namespace: 'sdk',
    description: 'Initialize a new SDK',
    requiredFields: A_CLI_SdkInitCommand_RequiredArgs,
})
export class A_CLI_SdkInitCommand extends A_CLI_BaseCommand<typeof A_CLI_SdkInitCommand_RequiredArgs> {

    protected questions = {
        name: 'What is the name of your SDK?',
        version: 'What is the version of your SDK?',
        description: 'Please provide a description of your SDK',
    };


    protected async main() {
        console.log('Executing sdk:init command');
    }
}