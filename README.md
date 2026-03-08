# react-radix-tooltip

A streamlined, developer-friendly wrapper for [@radix-ui/react-tooltip](https://www.radix-ui.com). This component simplifies the Radix Tooltip implementation by allowing you to trigger tooltips using a single component and a simplified prop interface.

## Features
- **Simplified Syntax:** No need to manually manage `Provider`, `Root`, `Trigger`, and `Content` wrappers.
- **Highly Customizable:** Easy control over placement, offsets, and arrow dimensions via props.
- **Type Safe:** Fully written in TypeScript for excellent IDE support.
- **Accessible:** Inherits all the WAI-ARIA compliant features of Radix UI.

## Installation

Ensure you have the Radix Tooltip primitive installed:

```bash
npm install react-radix-tooltip
```

---

## Usage

```tsx
import { RadixTooltip } from 'react-radix-tooltip';

const MyComponent = () => (
  <RadixTooltip
    title={
      <div>
        <strong>Hello World</strong>
        <p>This is a custom tooltip content.</p>
      </div>
    }
    placement="bottom"
    sideOffset={8}
    arrow={true}
    style={{ backgroundColor: '#1a1a1a', color: '#fff', borderRadius: '4px' }}
  >
    <button>Hover Me</button>
  </RadixTooltip>
);
```


---

## Props

More Details on [Radix-UI Documentation](https://www.radix-ui.com/primitives/docs/components/tooltip)

| Prop | Type | Default | Description |
|---|---|---|---|
| title | React.ReactNode | — | The content to be displayed inside the tooltip. |
| children | React.ReactElement | — | The trigger element that activates the tooltip on hover/focus. |
| container | HTMLDivElement | null | — | The container element into which the tooltip will be rendered. |
| placement | 'top' \| 'bottom' \| 'left' \| 'right' | 'top' | The preferred side of the trigger to render the tooltip. |
| sideOffset | number | 0 | The distance in pixels from the trigger element. |
| arrow | boolean | false | Whether to render an arrow pointing to the trigger. |
| arrowWidth | number | — | The width of the arrow in pixels. |
| arrowHeight | number | — | The height of the arrow in pixels. |
| arrowPadding | number | — | The padding between the arrow and the edges of the tooltip. |
| delayDuration | number | 700 | The duration in milliseconds to wait before showing the tooltip. |
| skipDelayDuration | number | 300 | The duration to wait before resetting the delay. |
| defaultOpen | boolean | false | The open state of the tooltip when it is initially rendered. |
| onOpenChange | (open: boolean) => void | — | Event handler called when the open state of the tooltip changes. |
| style | React.CSSProperties | — | Custom inline styles for the tooltip content. |
| tooltipClassName | string | — | CSS class for the tooltip content container. |
| tooltipArrowClassName | string | — | CSS class for the tooltip arrow element. |

---


## Compatibility

* ✅ React 18+
* ✅ Next.js (App & Pages Router)
* ✅ Vite / CRA

---

## License

MIT © Abdullah Ibne Alam

---

## Contributing

Pull requests are welcome! <br />
If you have ideas for enhancements or performance improvements, feel free to open an issue.<br />
[https://github.com/RepulsiveCoder/react-radix-tooltip](https://github.com/RepulsiveCoder/react-radix-tooltip)

---

## If you like it…

Drop a ⭐ on the repo and use it to make your UI feel alive!
