import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig, { type Colors } from "../../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);

export const colors = fullConfig.theme.colors as unknown as Colors;
