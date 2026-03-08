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
|-----|------|---------|-------------|
| `title` | `React.ReactNode` | **Required** | Content to be displayed inside the tooltip. |
| `children` | `React.ReactElement` | **Required** | The element that triggers the tooltip when hovered or focused. |
| `container` | `HTMLDivElement \| null \| undefined` | `document.body` | Optional container where the tooltip portal will be rendered. |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Position of the tooltip relative to the trigger element. |
| `sideOffset` | `number` | `5` | Distance (in pixels) between the tooltip and the trigger element. |
| `arrow` | `boolean` | `true` | Whether to display the tooltip arrow. |
| `arrowWidth` | `number` | `10` | Width of the tooltip arrow in pixels. |
| `arrowHeight` | `number` | `5` | Height of the tooltip arrow in pixels. |
| `arrowPadding` | `number` | `2` | Padding between the arrow and the edge of the tooltip. |
| `delayDuration` | `number` | `200` | Delay (in milliseconds) before the tooltip appears. |
| `skipDelayDuration` | `number` | `300` | Time window where subsequent tooltips appear instantly without delay. |
| `defaultOpen` | `boolean` | `false` | Whether the tooltip should be open by default. |
| `onOpenChange` | `(open: boolean) => void` | `undefined` | Callback fired when the tooltip open state changes. |
| `style` | `React.CSSProperties` | `{}` | Inline styles applied to the tooltip container. |
| `tooltipClassName` | `string` | `""` | Custom CSS class for styling the tooltip container. |
| `tooltipArrowClassName` | `string` | `""` | Custom CSS class for styling the tooltip arrow. |

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
