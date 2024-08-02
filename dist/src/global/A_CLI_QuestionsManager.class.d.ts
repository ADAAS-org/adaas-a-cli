export declare class A_CLI_QuestionsManager {
    private rl;
    constructor();
    ask<T extends {
        [key in keyof T]: string;
    }>(questions: T): Promise<T>;
    close(): Promise<void>;
}
