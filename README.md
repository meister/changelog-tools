Changelog Tools
===============

Changelog tools is a CLI tool meant to help process changes in CHANGELOG.md and keep the style based on [keepachangelog.com](keepachangelog.com). It helps you squash the RC version logs, but also retrieve the contents of any specific version for public releases (automation with Github releases for example).

## TOC

* [Usage](#usage)
* [Commands](#commands)


## Usage

You can install it either as a `devDependency` for some version control, or just run it directly with `npx`

Install:
```
npm i --save-dev changelog-tools
```

Run from command line:
```
npx changelog-tools help
```

Run from script:
```
changelog-tools help
```

## Commands

Command Parameters | Description
--- | ---
`print <changelog> [release]` | Prints changes of a version from the specified `changelog` file. Default version is `Unreleased`.

## Additional Info

TBD. This tool is meant to help automation of NPM package releases with automated Releases in Github. Check the [examples](/examples) for uses with Github Actions.

## Contributing

This repository is accepting contributions both in term of issue reports and pull requests. If you find an issue, file it under [issues](issues). Feel free to make suggestions and improvements or provide examples for alternate workflows.

As always - be good to others!

## Author

&copy; 2022 [meister](https://github.com/meister)