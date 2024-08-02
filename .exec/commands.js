const {
    A_SDK_Context
} = require('@adaas/a-sdk-types');
const exec = require('child_process').exec;


module.exports = class CommandsManager {

    constructor() {
        this.exec = require('child_process').exec;
    }


    extractArgs(args) {
        const parsedArgs = {};

        args.forEach((arg, index) => {
            if (arg.startsWith('-')) {
                const key = arg.replace(/^-+/, '');
                const value = args[index + 1] && !args[index + 1].startsWith('-') ? args[index + 1] : true;
                parsedArgs[key] = value;
            }
        });

        return parsedArgs;
    }

    async commandHandler(
        resolve,
        reject,
        successMessage = 'Command executed successfully') {


        return ((err, stdout, stderr) => {
            if (err) {
                // A_SDK_Context.Logger.error(err);
                A_SDK_Context.Logger.error(stdout);
                if (stderr)
                    A_SDK_Context.Logger.error(stderr);

                return reject(err);
            }
            if (stdout)
                A_SDK_Context.Logger.log(stdout);

            A_SDK_Context.Logger.log(successMessage);

            resolve();
        });
    }


    async build() {
        return new Promise(async (resolve, reject) => {
            exec(
                `tsc --declaration --project tsconfig.json && tscpaths -p tsconfig.json -s ./ -o ./dist`,
                await this.commandHandler(resolve, reject, 'Build complete')
            );
        });
    }

    async postVersion() {
        return new Promise(async (resolve, reject) => {
            this.exec(
                `git push --no-verify && git push --tags --no-verify`,
                await this.commandHandler(resolve, reject, 'Post version complete')
            );
        });
    }

    async npmVersion(
        version
    ) {
        return new Promise(async (resolve, reject) => {
            this.exec(
                `npm version ${version} --no-git-tag-version`,
                await this.commandHandler(resolve, reject, 'NPM version complete')
            );
        });
    }

    async npmPublish() {
        return new Promise(async (resolve, reject) => {
            this.exec(
                `npm publish --access public --ignore-scripts`,
                await this.commandHandler(resolve, reject, 'NPM publish complete')
            );
        });
    }

    async removeFolder(folder) {
        return new Promise(async (resolve, reject) => {
            this.exec(
                `rm -r ${folder}`,
                await this.commandHandler(resolve, reject, `Folder ${folder} removed`)
            );
        });
    }


    async gitCommit(
        comment
    ) {
        return new Promise(async (resolve, reject) => {
            this.exec(
                `git add . && git commit -m "${comment}" `,
                await this.commandHandler(resolve, reject, 'Git commit complete')
            );
        });
    }

    async gitPush(
        noVerify = false
    ) {
        return new Promise(async (resolve, reject) => {
            this.exec(
                `git push ${noVerify ? '--no-verify' : ''}`,
                await this.commandHandler(resolve, reject, 'Git push complete')
            );
        });
    }

    async gitTag(
        version,
        message = `Version ${version}`
    ) {
        return new Promise(async (resolve, reject) => {
            this.exec(
                `git tag -a v${version} -m "${message}"`,
                await this.commandHandler(resolve, reject, 'Git tag complete')
            );
        });
    }

    async gitTagPush() {
        return new Promise(async (resolve, reject) => {
            this.exec(
                `git push --tags`,
                await this.commandHandler(resolve, reject, 'Git tag push complete')
            );
        });
    }
}