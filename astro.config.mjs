// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://hermes-alby.github.io',
  base: '/402-landing-pages',
  output: 'static',
  trailingSlash: 'always',
});
