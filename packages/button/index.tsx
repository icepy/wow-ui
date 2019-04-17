import * as React from "react";
import classnames from "classnames";
import styles from "./style.css";

enum ButtonType {
  default = "default",
  primary = "primary",
  danger = "danger"
}

export interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  type?: string;
  children?: Readonly<React.ReactNode>;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: IProps) => {
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
