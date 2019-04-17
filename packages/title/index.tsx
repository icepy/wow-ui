import * as React from "react";
import styles from "./style.css";


export interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type?: string;
  children?: Readonly<React.ReactNode>;
}

const Title = (props: IProps) => {
  const {
    children,
    type,
    className,
    ...restProps
  } = props;
  return (
    <div
      {...restProps}
    >
      {children}
    </div>
  )
}

export default Title;
