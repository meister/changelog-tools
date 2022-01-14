#!/usr/bin/env node

import yargs, { Arguments } from 'yargs';
import { hideBin } from 'yargs/helpers';
import { getVersionLog } from '../lib/changelog-parser';
import { greet } from '../lib/greeter';

type Options = {
	changelog: string
	release: string
};

yargs(hideBin(process.argv))
	// Use the commands directory to scaffold.
	// .commandDir('commands')
	// Enable strict mode.
	.strict()
	.command('print <changelog> [release]', 'Get change log for a version', (yargs) => {
		yargs
			.positional('changelog', {
				describe: 'Path to changelog',
				type: 'string'
			})
			.positional('release', {
				describe: 'Release number to parse (or Unreleased)',
				type: 'string'
			});
	}, async (argv: Arguments<Options>) => {
		const log = await getVersionLog(argv.changelog, argv.release);
		console.log(log);
	})
	.command('hello', 'Hello World', () => {
		console.log(greet());
	})
	// Useful aliases.
	.alias({ h: 'help' })
	.argv;