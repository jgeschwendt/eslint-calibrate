NCU_CMD=npm-check-updates --dep dev,prod --upgrade
ncu:
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

publish:
	yarn workspace @eslint-calibrate/eslint-config \
		npm publish --access public --tolerate-republish
	yarn workspace @eslint-calibrate/eslint-config-jest \
		npm publish --access public --tolerate-republish
	yarn workspace @eslint-calibrate/eslint-config-node \
		npm publish --access public --tolerate-republish
	yarn workspace @eslint-calibrate/eslint-config-react \
		npm publish --access public --tolerate-republish
	yarn workspace @eslint-calibrate/eslint-config-typescript \
		npm publish --access public --tolerate-republish
	yarn workspace @eslint-calibrate/eslint-config-typescript \
		npm publish --access public --tolerate-republish
	yarn workspace @eslint-calibrate/eslint-plugin \
		npm publish --access public --tolerate-republish