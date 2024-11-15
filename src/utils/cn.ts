import { withFluid } from "@fluid-tailwind/tailwind-merge";
import clsx, { ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
export const cn = (...args: ClassValue[]) => {
	const extTWMerge = extendTailwindMerge(withFluid);
	return extTWMerge(clsx(args));
};
