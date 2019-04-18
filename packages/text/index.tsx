import * as React from "react";
import styles from "./style.css";
import classnames from "classnames";
import { IBaseProps } from "../base"

enum TextType {
  default = "default",
  npc = "npc",
  warrior = "warrior",
  rogue = "rogue",
  hunter = "Hunter",
  mage = "mage",
  warlock = "warlock",
  priest = "priest",
  druid = "druid",
  paladin = "paladin",
  shaman = "shaman",
  deathKnight = "deathKnight",
  monk = "monk",
  demonHunter = "demonHunter"
}

export interface IProps extends IBaseProps<HTMLSpanElement>{
  type?: string;
  disabled: boolean;
  underline: boolean;
  strong: boolean;
  mark: boolean;
}

const Text: React.SFC<IProps> = (props: IProps) => {
  const {
    children,
    type = TextType.default,
    className,
    disabled,
    underline,
    strong,
    mark,
    ...restProps
  } = props;
  const textClass = classnames({
    [className || ""]: className,
    [styles["text-container"]]: true,
    [styles[`text-${type}`]]: true,
    [styles["text-disabled"]]: disabled,
    [styles["text-underline"]]: underline,
    [styles["text-strong"]]: strong,
    [styles["text-mark"]]: mark,
    [styles["text-mark-bg"]]: !mark,
  });
  return (
    <span
      className={textClass}
      {...restProps}
    >
      { children }
    </span>
  )
}

export default Text;
