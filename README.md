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

| Prop | Type | Default | Description |
|---|---|---|---|
| title | ReactNode | Required | The content to display inside the tooltip. |
| children | ReactElement | Required | The element that triggers the tooltip. |
| placement | top | bottom | left | right | top | Preferred position of the tooltip. |
| sideOffset | number | 4 | Distance between the trigger and the tooltip. |
| arrow | boolean | false | Whether to display the optional arrow component. |
| delayDuration | number | 700 | Delay in ms before tooltip opens. |
| tooltipClassName | string | - | CSS class for the tooltip content. |                    |

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
