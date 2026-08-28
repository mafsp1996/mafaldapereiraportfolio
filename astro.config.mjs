// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const base = process.env.GITHUB_ACTIONS === 'true' ? '/mafaldapereiraportfolio/' : '/';

export default defineConfig({ base });
