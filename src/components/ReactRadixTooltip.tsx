import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

export type RadixTooltipProps = {
    title: React.ReactNode;
    children: React.ReactElement<any>;
    container?: HTMLDivElement | null | undefined,
    placement?: 'top' | 'bottom' | 'left' | 'right';
    sideOffset?: number;
    arrow?: boolean;
    arrowWidth?: number;
    arrowHeight?: number;
    arrowPadding?: number;
    delayDuration?: number;
    skipDelayDuration?: number;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    style?: React.CSSProperties;
    tooltipClassName?: string;
    tooltipArrowClassName?: string;
}

export default function RadixTooltip({
    title = <></>,
    children,
    container,
    placement = "top",
    sideOffset = 5,
    arrow = true,
    arrowWidth = 10,
    arrowHeight = 5,
    delayDuration = 700,
    skipDelayDuration = 300,
    defaultOpen = false,
    onOpenChange = undefined,
    style = {},
    tooltipClassName = "bg-gray-800 text-white px-2 py-2 rounded shadow-md text-sm z-100",
    tooltipArrowClassName = "fill-gray-800",
    ...props
}: RadixTooltipProps) {
    const [open, setOpen] = React.useState(false);
    const [isTouch, setIsTouch] = React.useState(false);

    React.useEffect(() => {
        const detectTouch = () =>
            setIsTouch((prev) => {
                if (prev !== true) return true;
                return prev;
            });
        window.addEventListener("touchstart", detectTouch, { once: true });
        return () => window.removeEventListener("touchstart", detectTouch);
    }, []);

    return (
        <Tooltip.Provider delayDuration={delayDuration} skipDelayDuration={skipDelayDuration}>
            <Tooltip.Root
                open={isTouch ? open : undefined}
                onOpenChange={(open) => {
                    setOpen(open);
                    if (onOpenChange) {
                        onOpenChange(open);
                    }
                }}
                defaultOpen={defaultOpen}
            >
                <Tooltip.Trigger asChild>
                    {React.cloneElement(children, {
                        onClick: (e: React.MouseEvent) => {
                            setOpen(true);
                            if (children.props.onClick) {
                                children.props.onClick(e);
                            }
                        },
                    })}
                </Tooltip.Trigger>
                <Tooltip.Portal container={container ?? undefined}>
                    <Tooltip.Content
                        className={tooltipClassName}
                        side={placement}
                        sideOffset={sideOffset}
                        {...props}
                    >
                        <div style={style}>{title}</div>
                        {arrow && <Tooltip.Arrow className={tooltipArrowClassName} width={arrowWidth} height={arrowHeight} />}
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
}

