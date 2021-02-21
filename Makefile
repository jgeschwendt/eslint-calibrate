NCU_CMD=npm-check-updates --dep dev,prod --upgrade
ncu:
	@npm i -g npm-check-updates
	@npx ${NCU_CMD} --packageFile ./package.json
	@npx ${NCU_CMD} --packageFile ./packages/eslint-config/package.json
	@npx ${NCU_CMD} --packageFile ./packages/eslint-config-jest/package.json
	@npx ${NCU_CMD} --packageFile ./packages/eslint-config-node/package.json
	@npx ${NCU_CMD} --packageFile ./packages/eslint-config-react/package.json
	@npx ${NCU_CMD} --packageFile ./packages/eslint-config-typescript/package.json
	@npx ${NCU_CMD} --packageFile ./packages/eslint-plugin/package.json
	yarn set version latest
	yarn
	# yarn dlx @yarnpkg/pnpify --sdk

version-patch:
	yarn workspaces foreach version patch
	yarn version apply --all

publish:
	yarn workspaces foreach --exclude eslint-calibrate npm publish --access public 