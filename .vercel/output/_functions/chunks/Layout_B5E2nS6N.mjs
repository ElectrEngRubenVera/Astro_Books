import { c as createComponent, b as createAstro, d as addAttribute, f as renderScript, a as renderTemplate, r as renderComponent, g as renderHead, h as renderSlot } from './astro/server_Bo4kRbgQ.mjs';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "D:/InfoUser/Desktop/Astro_Books/node_modules/.pnpm/astro@5.4.2_jiti@2.4.2_ligh_af2a02823ee4a6cad4f023a2a3c29a90/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/InfoUser/Desktop/Astro_Books/node_modules/.pnpm/astro@5.4.2_jiti@2.4.2_ligh_af2a02823ee4a6cad4f023a2a3c29a90/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body> <div> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "D:/InfoUser/Desktop/Astro_Books/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
