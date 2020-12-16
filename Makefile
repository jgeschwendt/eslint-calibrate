NCU_CMD=ncu --dep dev,prod --upgrade
ncu:
	@npx ${NCU_CMD} --packageFile ./package.json
	@npx ${NCU_CMD} --packageFile ./packages/eslint-config/package.json
	@npx ${NCU_CMD} --packageFile ./packages/eslint-config-jest/package.json
	@npx ${NCU_CMD} --packageFile ./packages/eslint-config-node/package.json
	@npx ${NCU_CMD} --packageFile ./packages/eslint-config-react/package.json
	@npx ${NCU_CMD} --packageFile ./packages/eslint-config-typescript/package.json
	yarn set version latest
	yarn
	# yarn dlx @yarnpkg/pnpify --sdk
