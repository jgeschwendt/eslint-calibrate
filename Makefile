NCU_CMD=yarn npm-check-updates --dep dev,prod --upgrade --packageFile
ncu:
	@${NCU_CMD} ./package.json
	@${NCU_CMD} ./packages/eslint-config/package.json
	@${NCU_CMD} ./packages/eslint-config-jest/package.json
	@${NCU_CMD} ./packages/eslint-config-node/package.json
	@${NCU_CMD} ./packages/eslint-config-react/package.json
	@${NCU_CMD} ./packages/eslint-config-typescript/package.json
	@${NCU_CMD} ./packages/eslint-plugin/package.json
	yarn set version latest
	yarn
	# yarn dlx @yarnpkg/pnpify --sdk

version-patch:
	yarn workspaces foreach version patch
	yarn version apply --all

publish:
	yarn workspaces foreach \
		--exclude eslint-calibrate \
		npm publish --access public 