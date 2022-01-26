declare class Format {
	value: string;

	constructor(data: string);

	static red: string;
	static yellow: string;
	static green: string;
	static blue: string;
	static magenta: string;
	static black: string;
	static white: string;

	static bgred: string;
	static bgyellow: string;
	static bggreen: string;
	static bgblue: string;
	static bgmagenta: string;
	static bgblack: string;
	static bgwhite: string;

	static bold: string;
	static italic: string;
	static underline: string;
	static strikethrough: string;

	static blink: string;
	static inverse: string;
	static hidden: string;

	static reset: string;

	Red: Format;
	Yellow: Format;
	Green: Format;
	Blue: Format;
	Magenta: Format;
	Black: Format;
	White: Format;

	bgRed: Format;
	bgYellow: Format;
	bgGreen: Format;
	bgBlue: Format;
	bgMagenta: Format;
	bgBlack: Format;
	bgWhite: Format;

	Bold: Format;
	Italic: Format;
	Underline: Format;
	Strikethrough: Format;

	Blink: Format;
	Inverse: Format;
	Hidden: Format;

	toString(): string;
}

export default Format;

export let red: string;
export let yellow: string;
export let green: string;
export let blue: string;
export let magenta: string;
export let black: string;
export let white: string;

export let bgred: string;
export let bgyellow: string;
export let bggreen: string;
export let bgblue: string;
export let bgmagenta: string;
export let bgblack: string;
export let bgwhite: string;

export let bold: string;
export let italic: string;
export let underline: string;
export let strikethrough: string;

export let blink: string;
export let inverse: string;
export let hidden: string;

export let reset: string;