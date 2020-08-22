import WeburgerEncoder from './encoder';


export default class WeburgerHtmlDomConverter extends WeburgerEncoder {
	/**
	Encode a weburger object into HTML Dome
	 */
	encode(object) {
		return object;
	}

	/**
	Convert a DOM element into a weburger object
	 */
	decode(wbObject) {
		return wbObject;
	}
}