import {confirm, select, Separator} from '@inquirer/prompts';
import {exec} from 'shelljs';

main();

async function main() {
  const mode = await select({
    message: 'Select MK600 logger primary mode',
    choices: [
      {
        name: 'store',
        value: 'store',
        description: 'store MK600 logs',
      },
      {
        name: 'load',
        value: 'load',
        description: 'load MK600 logs',
      },
      new Separator(),
      {
        name: 'analyze',
        value: 'analyze',
        description: 'analyze MK600 logs',
      },
    ],
  });

  const isLegacy = await confirm({message: 'Use legacy format?'});

  exec(`mk600logger ${mode} ${isLegacy ? '--legacy' : '--native'} --dir logs`);
}
