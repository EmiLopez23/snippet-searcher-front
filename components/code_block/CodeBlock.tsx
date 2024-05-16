"use client";

import ReactCodeMirror from "@uiw/react-codemirror";
import { useCallback, useState } from "react";
import { typescriptLanguage } from "@codemirror/lang-javascript";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function CodeBlock() {
  const [value, setValue] = useState("console.log('hola lucho!');");
  const { user, error, isLoading } = useUser();
  const onChange = useCallback((val: string) => {
    setValue(val);
  }, []);

  return (
    <ReactCodeMirror
      theme={tokyoNight}
      value={value}
      height="500px"
      width="100%"
      editable={user ? true : false}
      className="max-w-[700px] flex-1 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
      onChange={onChange}
      extensions={[typescriptLanguage]}
    />
  );
}
