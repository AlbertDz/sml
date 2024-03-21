/**
 * @fileoverview Main file of the package
 * @author Albert Diaz
 */

import Lang from './core/Lang.js';
import dotenv from 'dotenv';
dotenv.config();

const text = ({ property, lang: langValue }) => {
	if (!property || !langValue) {
		throw new Error('Property and lang are required');
	}
	
	const lang = new Lang();
	const text = lang.getText({ property, lang: langValue });
	return text;
};

const createMinifyFromCsv = () => {
	const lang = new Lang();
	lang.createMinifyFile('csv');
};

const createMinifyFromJson = () => {
	const lang = new Lang();
	lang.createMinifyFile('json');
};

export {
	text,
	createMinifyFromCsv,
	createMinifyFromJson
}
