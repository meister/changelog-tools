import { readFile } from 'fs/promises';

function parseLog(contents: string, version = 'unreleased'): string | null {
	const matcher = new RegExp(`^## \\[${version.replaceAll('.', '\\.')}\\](.+)(## \\[|\n\n\\[)`, 'mis');
	const m = contents.match(matcher);

	if (!m) {
		return null;
	}

	return m[1].trim();
}

async function getVersionLog(filename: string, version: string): Promise<string | null> {
	let contents = '';

	try {
		contents = await readFile(filename, 'utf-8');
	} catch (e) {
		console.error('CHANGELOG not found');
		return;
	}

	return parseLog(contents, version);
}

export {
	getVersionLog
};