export default function () {
	const context = require(this.resourcePath).default
	return JSON.stringify(context,null,2)
}