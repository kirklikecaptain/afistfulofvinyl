import { ActionIcon, Tooltip, ActionIconProps } from "@mantine/core";
import { TablerIconsProps } from "@tabler/icons-react";

export type IconButtonProps = Pick<ActionIconProps, "variant" | "size" | "c"> & {
  icon: (props: TablerIconsProps) => JSX.Element;
  label: string;
  onClick?: () => void;
  className?: string;
};

export function IconButton(props: IconButtonProps) {
  const { icon: Icon, label, onClick, variant = "default", size, c = "bright", className } = props;

  const iconColor = variant === "default" ? "bright" : c;

  return (
    <Tooltip
      withArrow
      label={label}
      className={className}
      events={{ hover: true, focus: true, touch: false }}
    >
      <ActionIcon onClick={onClick} variant={variant} aria-label={label} size={size} c={iconColor}>
        <Icon size="70%" />
      </ActionIcon>
    </Tooltip>
  );
}
