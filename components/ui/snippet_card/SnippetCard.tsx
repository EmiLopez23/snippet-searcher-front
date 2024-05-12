"use client";
import { Compliance } from "@/utils/snippets";
import { MouseEventHandler, useEffect, useRef, useState } from "react";

const complianceColors: Record<Compliance, string> = {
  compliant: "text-green-500",
  "not-compliant": "text-red-500",
  pending: "text-yellow-500",
};

export default function SnippetCard({
  name,
  compliance,
  content,
}: {
  name: string;
  compliance: Compliance;
  content: string;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove: MouseEventHandler = (e) => {
    const bounding = cardRef.current?.getBoundingClientRect();
    setPosition({
      x: e.clientX - (bounding?.left ?? 0),
      y: e.clientY - (bounding?.top ?? 0),
    });
  };

  const handleClick = () => {};

  return (
    <div
      onMouseMove={handleMouseMove}
      ref={cardRef}
      style={
        {
          "--circle-x": `${position.x}px`,
          "--circle-y": `${position.y}px`,
        } as React.CSSProperties
      }
      className="card grid grid-cols-2 grid-rows-2 items-center p-5 font-inter text-sm text-white"
    >
      <h2 className="text-xl font-bold">{name}</h2>
      <p className={`${complianceColors[compliance]} text-end capitalize`}>
        {compliance}
      </p>
      <p className="col-span-full max-w-[380px] overflow-hidden text-ellipsis text-nowrap text-ds-gray-600">
        {content}
      </p>
    </div>
  );
}
