
import * as readline from 'readline';


export class A_CLI_QuestionsManager {

    private rl: readline.Interface

    constructor() {
        // Create readline interface
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

    }



    async ask<T extends {
        [key in keyof T]: string
    }>(questions: T): Promise<T> {
        let answers: T = {} as T;

        for (const key in questions) {
            const question = questions[key];
            const answer: string = await new Promise(resolve => this.rl.question(question, resolve));
            answers[key] = answer as any;
        }

        return answers;
    }


    async close() {
        this.rl.close();
    }
}