const path = require("path");
module.exports = {
	context: __dirname,
	mode: "production",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "react-bundle.js",
		libraryTarget: "commonjs2"
	}
};
