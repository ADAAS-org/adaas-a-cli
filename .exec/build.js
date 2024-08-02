const {
  A_SDK_Context
} = require('@adaas/a-sdk-types');
const CommandsManager = require('./commands');


(async () => {
  try {
    const customArg = process.argv[2] || 'default';


    // Read the package.json file
    const {
      name,
      version
    } = require('../package.json');

    await A_SDK_Context.ready;

    A_SDK_Context.Logger.log(
      `Building ${name} `,
      `         v${version}`,
      `Started...`);

    const cm = new CommandsManager();

    await cm.build();

    A_SDK_Context.Logger.log(
      '===============================================',
      `  Build: | ${name}`,
      `         | v${version} `,
      '-----------------------------------------------',
      `  Ready  |  `,
      '==============================================='
    );

  } catch (error) {
    A_SDK_Context.Logger.error(error);
  }

})();