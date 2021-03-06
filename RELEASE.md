# PayID Server Release Process

## Cutting a Release

The full process for cutting a release is as follows:

1. Checkout a new branch:
   `git checkout -b v1.4-release`

2. Run the bump script locally on that branch (the working directory must be clean):
  `cd static`
    `export npm_package_version=$(node -p "require('./package.json').version")`
   `npm run bump minor`

3. Commit the changes, push up the branch, and open a PR:
   `git commit package.json package-lock.json`
   `git push --set-upstream origin HEAD`
   `hub pull-request`

4. Once the PR is merged, checkout the `master` branch:
   `git checkout master`

5. Make a new Git tag that matches the new NPM version (make sure it is associated with the right commit SHA):
   `git tag -a v1.4 f34dcd3`

6. Push up the tag from `master`:
   `git push origin v1.4`

7. Cut a release draft:
   `npm run release`

8. Fill in the release details and publish it in GitHub.

## NPM Scripts Reference

### bump

To compare Git tag & NPM version, and bump the NPM version, run:

`npm run bump <increment>` ( where `<increment>` = `major`, `minor`, or `patch` )

### release

To create a release draft from the command line, run:

`npm run release` ( you may need to setup `hub` locally )

### Version

1 `3h2r983`

3 `h83g382`

2 `&$&@(`
