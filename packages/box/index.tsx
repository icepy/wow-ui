import * as React from "react";
import styles from "./style.css";
import classnames from "classnames";

enum BoxType {
  rough = "rough",
  ordinary = "ordinary",
  excellent = "excellent",
  sophisticated = "sophisticated",
  epic = "epic",
  legend = "legend",
  inherited = "inherited"
}

export interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type?: string;
  children?: Readonly<React.ReactNode>;
}

const Box = (props: IProps) => {
  const {
    children,
    type = BoxType.rough,
    className,
    ...restProps
  } = props;
  const boxClass = classnames({
    [className || ""]: className,
    [styles["box-common"]]: true,
    [styles[`box-${type}`]]: true,
  });
  return (
    <div
      className={boxClass}
      {...restProps}
    >
      {children}
    </div>
  )
}

export default Box;
