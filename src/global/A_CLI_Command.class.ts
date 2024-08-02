import { A_CLI_QuestionsManager } from "./A_CLI_QuestionsManager.class";


export class A_CLI_BaseCommand<_RequiredArgs extends Array<string> = []> {

    protected questions!: Record<string, string>;

    args!: {
        [K in _RequiredArgs[number]]: string | string[];
    }


    constructor(
        requiredArgs: _RequiredArgs,
        args: {
            [K in _RequiredArgs[number]]: string | string[];
        }) {

        /**
         * The first argument in the class should be received arguments from the command line
         */

        // Check if the required fields are present
        requiredArgs.forEach(field => {
            if (!args[field]) {
                throw new Error(`Missing required field: ${field}`);
            }
            if (!this.args)
                this.args = {} as any;
            
            this.args[field] = args[field];
        });


    }


    async execute() {
        const qm = new A_CLI_QuestionsManager();

        const answers = await qm.ask(this.questions);
    }


    protected async main() {

    }
}