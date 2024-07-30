module.exports = function(value = {}, schema = {}) {
	// console.log(`this.validator`, this.validator)
	const validateRes = this.validator.validate(value, schema)
	if (validateRes) {
		delete validateRes.schemaKey
		throw validateRes
	}
}