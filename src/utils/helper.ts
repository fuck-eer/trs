export const numberWithCommas = (x: number) =>
	x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "--";

export const trimTill = (str: string, char: number) =>
	str ? str?.substring(0, char - 2) + "..." : "";
