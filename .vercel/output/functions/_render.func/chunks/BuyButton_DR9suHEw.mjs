import { c as createComponent, m as maybeRenderHead, b as renderTemplate, a as createAstro, d as addAttribute, r as renderComponent } from './astro/server_C9PmLUE-.mjs';

const $$AmazonLogo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,24.000000) scale(0.02500000,-0.02500000)" fill="#000000" stroke="none"> <path d="M380 860 c-18 -18 -20 -33 -20 -160 l0 -140 -87 0 -88 0 148 -147
147 -148 147 148 148 147 -88 0 -87 0 0 140 c0 177 -2 180 -120 180 -67 0 -83
-3 -100 -20z m140 -220 l0 -160 32 0 33 0 -53 -52 -52 -53 -52 53 -53 52 33 0
32 0 0 160 0 160 40 0 40 0 0 -160z"></path> <path d="M80 120 l0 -40 400 0 400 0 0 40 0 40 -400 0 -400 0 0 -40z"></path> </g> </svg>`;
}, "C:/Users/Ruben Dario/Desktop/Proyecto1/Astro_Books/src/components/AmazonLogo.astro", void 0);

const $$Astro = createAstro();
const $$BuyButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BuyButton;
  const SPAIN = "ES";
  const country = Astro2.request.headers.get("X-Vercel-IP-Country") ?? "ES";
  const storeCountry = country === SPAIN ? "spain" : "usa";
  const countryName = country === SPAIN ? "espa\xF1ol" : "ingles";
  const { buy } = Astro2.props;
  const url = buy[storeCountry];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} title="Comprar libro" target="_blank" rel="noopener noreferrer" class="text-balance inline-flex gap-2 items-center bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg border border-yellow-500 transition duration-200 ease-in-out hover:scale-105 justify-center text-center">
Descarga en ${countryName} ${renderComponent($$result, "AmazonLogo", $$AmazonLogo, {})} </a>`;
}, "C:/Users/Ruben Dario/Desktop/Proyecto1/Astro_Books/src/components/BuyButton.astro", void 0);

const $$file = "C:/Users/Ruben Dario/Desktop/Proyecto1/Astro_Books/src/components/BuyButton.astro";
const $$url = undefined;

export { $$BuyButton as default, $$file as file, $$url as url };
