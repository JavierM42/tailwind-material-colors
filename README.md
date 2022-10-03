# tailwind-material-colors

Generate and use Material Design 3 color themes with TailwindCSS.

- ✅ Generate a color theme from one, two or three base colors.
- ✅ Automatic dark mode, no need to use the `dark:` variant.
- ✅ Easy and consistent interaction states (hover, press, focus, disabled) with `interactive-bg-`.
- ✅ Extra colors will be harmonized to the primary color (unless disabled).
- ✅ Dynamic Color: update theme dynamically on the client with a single statement of JavaScript.
## Installation & Usage

```
npm install --save-dev tailwind-material-colors
```

### `tailwind.config.js`
```js
require('tailwind-material-colors')({
  // Here, your tailwind config.
  // (Do not specify theme.colors or theme.extend.colors as they will be overwritten).
}, {
  // Here, your base colors as HEX values
  // primary is required
  primary: '#ff0000',
  // secondary and/or tertiary are optional, if not set they will be derived from the primary color
  secondary: '#ffff00',
  tertiary: '#0000ff',
  // extra named colors may also be included
  green: '#00ff00'
  blue: '#0000ff'
});
```

> The colors you supply will be transformed by M3. In the example configuration above, where the provided `primary` _base_ color is pure red (`#ff0000`), the resulting `primary` colors are `#c00100` and `#ffb4a8` for light and dark mode respectively, which are different shades of red. This is an intentional effect of the M3 algorithm in the interest of good contrast ratios and pleasing aesthetics.

If you don't want a color to be _harmonized_ to the primary color, pass `{ hex: "#xxxxxx", harmonize: false }` as the value instead of the plain hex color.

## What does all this get me?

### 1. A Tailwind color palette.

The colors can be used with any of Tailwind's usual utilities (such as `bg-`, `text-`, `border-`, `fill-`, `stroke-`, `shadow-`,...).

The generated colors are:

- Primary: `primary`, `on-primary`, `primary-container`, `on-primary-container`.
- Secondary: `secondary`, `on-secondary`, `secondary-container`, `on-secondary-container`.
- Tertiary: `tertiary`, `on-tertiary`, `tertiary-container`, `on-tertiary-container`.
- Error: `error`, `on-error`, `error-container`, `on-error-container`.
- Background: `background`, `on-background`
- Surface: `surface`, `on-surface`, `surface-variant`, `on-surface-variant`, `inverse-surface`, `on-inverse-surface`.
- Outline: `outline`.
- Some basic that do not depend on the theme: `white`, `black`, `transparent` and `current`.

### 1.1 The `bg-` utilties add default content color.

Setting the background color will also set the default text color to its `on-` counterpart.

For example, if you use `bg-primary`, that will automatically apply `text-on-primary`. If you need to overwrite the text color, you can do so as usual with `text-`.

> Default content color will not be set when using opacity modifiers (such as `bg-primary/50`). You can specify text color or use `bg-primary bg-opacity-50` instead.

### 2. Automatic dark mode.

All the generated colors will automatically switch to their dark mode shades based on your defined [Dark Mode Strategy](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually), be it CSS `prefers-color-scheme` or a custom class. There's no need to use the `dark:` variant.

### 3. Interaction states.

This plugin provides easy to use interaction states that follow the [M3 guidelines](https://m3.material.io/foundations/interaction-states).

For example, `interactive-bg-primary` will apply an 8% overlay of the `on-primary` color to the background when the component is hovered, and a 12% overlay when focused or pressed. It will also apply a disabled state.

The interaction colors are available if you need to apply them manually with `-hover`, `-press`, `-focus`, and `-drag` suffixes.  Since drag states cannot be handled with CSS, if you implement dragging on a `bg-primary` element, you'd apply the `bg-primary-drag` class where needed.

## Dynamic Color

You can update the generated theme at runtime, directly on client-side JavaScript, with the `updateTheme` function.

### Example:

```jsx
import { updateTheme } from "tailwind-material-colors/lib/updateTheme.esm";

const makeThemeRed = () => {
  updateTheme({
    // set a new primary color (and optionally any other colors in your theme)
    primary: '#ff0000',
    green: '#00ff00'
  },
  'media' // your chosen tailwind dark mode strategy (usually 'media' or 'class')
  )
}
```

- It's recommended to set all colors when changing `primary` because the _harmonize_ feature (on by default) will affect the resulting shades.
- `updateTheme` can't create new colors, only update existing ones.

> ⚠️ The updateTheme function is around 100KB. If possible, load it asynchronously to reduce load times.
