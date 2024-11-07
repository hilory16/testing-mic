// commitlint.config.js
module.exports = {
	extends: ["@commitlint/config-conventional"],
	rules: {
		// Define custom rules here
		"type-enum": [
			2,
			"always",
			[
				"feat", // A new feature
				"fix", // A bug fix
				"docs", // Documentation only changes
				"style", // Changes that do not affect the meaning of the code (white-space, formatting, etc.)
				"refactor", // A code change that neither fixes a bug nor adds a feature
				"perf", // A code change that improves performance
				"test", // Adding missing tests or correcting existing tests
				"build", // Changes that affect the build system or external dependencies
				"ci", // Changes to our CI configuration files and scripts
				"chore", // Other changes that don’t modify src or test files
				"revert", // Reverts a previous commit
				"custom-type", // Add any custom type you want here
			],
		],
		// Optional: enforce a max subject length
		"subject-max-length": [2, "always", 50],
		// Optional: require a scope with every commit
		"scope-enum": [2, "always", ["core", "docs", "ui", "backend"]],
	},
};
