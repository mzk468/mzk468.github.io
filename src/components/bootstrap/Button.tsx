import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
  bootstrapClasses?: string;
  marginRight?: number;
}

export function Button({
  marginRight = 0,
  bootstrapClasses = "",
  href,
  children,
}: Props) {
  return (
    <a
      style={
        marginRight
          ? { marginRight: marginRight, fontFamily: "Inter" }
          : { fontFamily: "Inter Medium" }
      }
      href={href}
      target="_blank"
      className={bootstrapClasses + " btn fs-4"}
      type="submit"
    >
      <strong>{children}</strong>
    </a>
  );
}
