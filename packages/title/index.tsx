import * as React from "react";
import styles from "./style.css";
import { IBaseProps } from "../base";
import classnames from "classnames";


enum TitleLevel {
  a = 1,
  b = 2,
  c = 3,
  d = 4,
  e = 5,
  f = 6
}

export interface IProps extends IBaseProps<HTMLHRElement> {
  level?: number;
  children?: Readonly<React.ReactNode>;
}

const Title: React.SFC<IProps> = (props: IProps) => {
  const {
    children,
    level = TitleLevel.a,
    className,
    ...restProps
  } = props;
  const titleClass = classnames({
    [styles["title-container"]]: true,
    [className || ""]: className,
  });
  const result = {
    className: titleClass,
    ...restProps
  }
  switch(level) {
    case TitleLevel.b: {
      return (
        <h2
          {...result}
        >
          {children}
        </h2>
      );
    }
    case TitleLevel.c: {
      return (
        <h3
          {...result}
        >
          {children}
        </h3>
      )
    }
    case TitleLevel.d: {
      return (
        <h4
          {...result}
        >
          {children}
        </h4>
      )
    }
    case TitleLevel.e: {
      return (
        <h5
          {...result}
        >
          {children}
        </h5>
      )
    }
    case TitleLevel.f: {
      return (
        <h6
          {...result}
        >
          {children}
        </h6>
      )
    }
    default: {
      return (
        <h1
          {...result}
        >
          {children}
        </h1>
      );
    }
  }
}

export default Title;
