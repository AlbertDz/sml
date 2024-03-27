/**
 * @fileoverview Main file of the package
 * @author Albert Diaz
 */

const Lang = require('./core/Lang.js');
const dotenv = require('dotenv');
dotenv.config();

const text = (property, langValue) => {
	if (!property || !langValue) {
		throw new Error('Property and lang are required');
	}
	
	const lang = new Lang();
	const text = lang.getText(property, langValue);
	return text;
};

const createCryptFromCsv = () => {
	const lang = new Lang();
	lang.createCryptFile('csv');
};

const createCryptFromJson = () => {
	const lang = new Lang();
	lang.createCryptFile('json');
};

module.exports = {
	text,
	createCryptFromCsv,
	createCryptFromJson
};
