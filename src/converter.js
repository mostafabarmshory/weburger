import WeburgerHtmlDomConverter from './converters/WeburgerHtmlDomConverter';

export default class WeburgerConverter {

	static getInstance(type) {
		switch (type) {
			case 'html':
				return new WeburgerHtmlDomConverter();
			default:
				throw {
					message: 'Unsupported type'
				};
		}
	}
}