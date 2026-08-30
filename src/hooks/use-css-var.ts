"use client";

import * as React from "react";

/**
 * Reads the live computed value of a CSS custom property on <html>,
 * re-reading whenever the element's class/style changes (e.g. light/dark
 * theme toggle) so consumers always show the value that is actually
 * rendered right now.
 */
export function useCssVar(name: string) {
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    const root = document.documentElement;

    const read = () => {
      setValue(getComputedStyle(root).getPropertyValue(name).trim());
    };

    read();

    const observer = new MutationObserver(read);
    observer.observe(root, { attributes: true, attributeFilter: ["class", "style"] });

    return () => observer.disconnect();
  }, [name]);

  return value;
}
