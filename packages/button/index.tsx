import * as React from "react";
import classnames from "classnames";
import styles from "./style.css";
import { IBaseProps } from "../base";

enum ButtonType {
  default = "default",
  primary = "primary",
  danger = "danger"
}

export interface IProps extends IBaseProps<HTMLButtonElement> {
  type?: string;
  children?: Readonly<React.ReactNode>;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.SFC<IProps> = (props: IProps) => {
  const {
    children,
    type = ButtonType.default,
    className,
    ...restProps
  } = props;
  const buttonClass = classnames({
    [className || ""]: className,
    [styles["button-common"]]: true,
    [styles[`button-${type}`]]: true,
  });
  return (
    <button
      className={buttonClass}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Button;
