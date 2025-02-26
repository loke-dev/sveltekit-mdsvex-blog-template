import { c as create_ssr_component, e as escape, d as add_attribute } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const variant = "right";
  let { prefix = void 0 } = $$props;
  let { title = void 0 } = $$props;
  let { image = void 0 } = $$props;
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  return `<div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"><div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none"><div>${prefix ? `<span class="text-base text-primary font-semibold tracking-wide">${escape(prefix)}</span>` : ``}
      ${title ? `<h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl}">${escape(title)}</h3>` : ``}</div></div>
  <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8"><div class="relative lg:row-start-1 lg:col-start-2"><svg class="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"${add_attribute("width", 404, 0)}${add_attribute("height", 384, 0)} fill="none" viewBox="0 0 404 384" aria-hidden="true"><defs><pattern id="square-pattern"${add_attribute("x", 0, 0)}${add_attribute("y", 0, 0)}${add_attribute("width", 20, 0)}${add_attribute("height", 20, 0)} patternUnits="userSpaceOnUse"><rect${add_attribute("x", 0, 0)}${add_attribute("y", 0, 0)}${add_attribute("width", 4, 0)}${add_attribute("height", 4, 0)} class="text-faded" fill="currentColor"></rect></pattern></defs><rect${add_attribute("width", 404, 0)}${add_attribute("height", 384, 0)} fill="url(#square-pattern)"></rect></svg>
      <div class="relative text-base mx-auto max-w-prose lg:max-w-none"><figure><div class="aspect-w-12 aspect-h-7 lg:aspect-none">${image ? `<picture><source${add_attribute("srcset", `${image}.webp`, 0)} type="image/webp">
                <img class="rounded-lg shadow-lg bg-white object-contain object-center"${add_attribute("src", `${image}.png`, 0)}${add_attribute("alt", title, 0)}${add_attribute("width", 370, 0)}${add_attribute("height", 370, 0)}></picture>` : ``}</div></figure></div></div>
    <div class="mt-8 lg:mt-0"><div class="prose mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">${slots.default ? slots.default({}) : ``}</div></div></div></div>`;
});
export {
  Page as default
};
