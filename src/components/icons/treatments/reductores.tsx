import { IconBase, type IconProps } from "./icon-base";

export function IconReductores(props: IconProps) {
  return (
    <IconBase title="Reductores" {...props}>
      <path d="M4.5 12h6" />
      <path d="M7 9.5 10.5 12 7 14.5" />
      <path d="M19.5 12h-6" />
      <path d="M17 9.5 13.5 12 17 14.5" />
      <path d="M9 6.8c.9-.5 2-.8 3-.8s2.1.3 3 .8" />
      <path d="M9 17.2c.9.5 2 .8 3 .8s2.1-.3 3-.8" />
    </IconBase>
  );
}
