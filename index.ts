import { A_CLI_SdkInitCommand } from "./src/commands/sdk/init.command";
import { A_CLI_Processor } from "./src/global/A_CLI_Processor.class";

// Main function to handle CLI commands
const main = async () => {
    console.log('CLI Processor started', process.execArgv);

    await new A_CLI_Processor(
        process.cwd(),

        ...process.argv
    )
        .use([
            A_CLI_SdkInitCommand as any,
        ])
        .process();
};

main();
