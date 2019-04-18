import * as React from "react";

export interface IBaseProps<T = any> extends React.DetailedHTMLProps<React.HTMLAttributes<T>, T> {
  children?: Readonly<React.ReactNode>;
}
