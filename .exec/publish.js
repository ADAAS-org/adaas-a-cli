const {
  A_SDK_Context
} = require('@adaas/a-sdk-types');
const CommandsManager = require('./commands');


(async () => {
  try {
    const versionOption = process.argv[2] || 'patch';

    await A_SDK_Context.ready;

    if (versionOption !== 'patch' && versionOption !== 'minor' && versionOption !== 'major') {
      A_SDK_Context.Logger.error(
        ' Invalid version option.',
        ' Please use one of the following: patch, minor, major'
      );
      return;
    }

    // npm run build && git add . 
    // && git commit -m \"new version created :: $(cat package.json | grep version | head -1  | awk -F: '{ print $2 }'  | sed 's/[\",]//g')\" && npm version patch 
    // && npm publish --access public


    const cm = new CommandsManager();

    const args = cm.extractArgs(process.argv);

    if (args.verbose || args.v) {
      A_SDK_Context.Logger.log('Verbose mode enabled');
      A_SDK_Context.Logger.log('Command arguments', args);
    }

    A_SDK_Context.Logger.log(`Publishing new version...`);


    await cm.npmVersion(versionOption);

    // Read the package.json file
    const {
      name,
      version
    } = require('../package.json');


    await cm.build();

    A_SDK_Context.Logger.log(
      '===============================================',
      `  Build: | ${name}`,
      `         | v${version} `,
      '-----------------------------------------------',
      `  Ready  |  `,
      '==============================================='
    );


    await cm.gitCommit(args.m || args.message || `New version created :: ${version}`);

    await cm.gitTag(version, args.m || args.message || `New version created :: ${version}`);

    await cm.gitPush();

    await cm.gitTagPush();

    await cm.npmPublish();


    A_SDK_Context.Logger.log(
      '===============================================',
      `  New Version Published: | ${name}`,
      `       [${versionOption}]           | v${version} `,
      '-----------------------------------------------',
      `  Ready                  |  `,
      `  Check it out at:       |  https://www.npmjs.com/package/${name}`,
      '==============================================='
    );


  } catch (error) {
    A_SDK_Context.Logger.error(error);
  }

})();