import React from 'react';
import { isMobile } from 'react-device-detect';
import * as Tooltip from '@radix-ui/react-tooltip';
import * as Popover from '@radix-ui/react-popover';

type BaseTooltipProps = {
    children: React.ReactElement<any>;
    container?: HTMLDivElement | null | undefined;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    sideOffset?: number;
    arrow?: boolean;
    arrowWidth?: number;
    arrowHeight?: number;
    delayDuration?: number;
    skipDelayDuration?: number;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    style?: React.CSSProperties;
    tooltipClassName?: string;
    tooltipArrowClassName?: string;
    enableForMobile?: boolean;
    popoverForMobile?: boolean;
    enableForTouch?: boolean;
    popoverForTouch?: boolean;
};

export type RadixTooltipProps = BaseTooltipProps & (
    | { content: React.ReactNode; title?: React.ReactNode }
    | { content?: React.ReactNode; title: React.ReactNode; }
);

export function RadixTooltip({
    content = <></>,
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
    enableForMobile = false,
    popoverForMobile = true,
    enableForTouch = false,
    popoverForTouch = true,
    ...props
}: RadixTooltipProps) {
    const [mounted, setMounted] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [isTouch, setIsTouch] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
        const detectTouch = () =>
            setIsTouch((prev) => {
                if (prev !== true) return true;
                return prev;
            });

        if ((enableForMobile && isMobile) || enableForTouch) {
            window.addEventListener("touchstart", detectTouch, { once: true });
        }

        return () => {
            if ((enableForMobile && isMobile) || enableForTouch) {
                window.removeEventListener("touchstart", detectTouch);
            }
        };
    }, []);

    if (!mounted) return children;

    if (isTouch && ((popoverForMobile && isMobile) || popoverForTouch)) {
        return (
            <Popover.Root open={isTouch ? open : undefined}
                onOpenChange={(open) => {
                    setOpen(open);
                    if (onOpenChange) {
                        onOpenChange(open);
                    }
                }}
            >
                <Popover.Trigger asChild>
                    {React.cloneElement(children, {
                        onClick: (e: React.MouseEvent) => {
                            setOpen(true);
                            if (children.props.onClick) {
                                children.props.onClick(e);
                            }
                        },
                    })}
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Content className={tooltipClassName} side={placement} sideOffset={sideOffset} {...props}>
                        <div style={style}>{content ?? title}</div>
                        {arrow && <Popover.Arrow className={tooltipArrowClassName} width={arrowWidth} height={arrowHeight} />}
                    </Popover.Content>
                </Popover.Portal>
            </Popover.Root>
        );
    }

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
                        <div style={style}>{content ?? title}</div>
                        {arrow && <Tooltip.Arrow className={tooltipArrowClassName} width={arrowWidth} height={arrowHeight} />}
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
}

export default RadixTooltip;
