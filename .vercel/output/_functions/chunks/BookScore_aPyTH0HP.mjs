import { c as createComponent, m as maybeRenderHead, b as renderTemplate } from './astro/server_C9PmLUE-.mjs';
import { s as setOnSetGetEnv } from './runtime_BaX0UJyD.mjs';

// @ts-check

setOnSetGetEnv(() => {
	
});
const SCORE_API_ENDPOINT = "https://www.random.org/integers/?num=1&min=40&max=50&col=1&base=10&format=plain&rnd=new";

const $$BookScore = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch(SCORE_API_ENDPOINT);
  const scoreValue = await res.text();
  return renderTemplate`${maybeRenderHead()}<span class="text-xs" id="score">
⭐ Puntuación: ${scoreValue.trim()}/50
</span>`;
}, "D:/InfoUser/Desktop/Astro_Books/src/components/BookScore.astro", void 0);

const $$file = "D:/InfoUser/Desktop/Astro_Books/src/components/BookScore.astro";
const $$url = undefined;

export { $$BookScore as default, $$file as file, $$url as url };
