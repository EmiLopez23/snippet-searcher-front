"use client";

import ReactCodeMirror from "@uiw/react-codemirror";
import { useCallback, useState } from "react";
import { typescriptLanguage } from "@codemirror/lang-javascript";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";

export default function CodeBlock() {
  const [value, setValue] = useState("console.log('hola lucho!');");
  const onChange = useCallback((val: string) => {
    setValue(val);
  }, []);

  return (
    <ReactCodeMirror
      theme={tokyoNight}
      value={value}
      height="500px"
      width="100%"
      className="flex-1 max-w-[700px] overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
      onChange={onChange}
      extensions={[typescriptLanguage]}
    />
  );
}
