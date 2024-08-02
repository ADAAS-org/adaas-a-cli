export declare class A_CLI_BaseCommand<_RequiredArgs extends Array<string> = []> {
    protected questions: Record<string, string>;
    args: {
        [K in _RequiredArgs[number]]: string | string[];
    };
    constructor(requiredArgs: _RequiredArgs, args: {
        [K in _RequiredArgs[number]]: string | string[];
    });
    execute(): Promise<void>;
    protected main(): Promise<void>;
}
