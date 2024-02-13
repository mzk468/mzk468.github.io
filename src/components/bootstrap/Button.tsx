import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

export function Button({ href, children }: Props) {
  return <a href={href}>{children}</a>;
}
