export default function Button({
  children,
  title,
  className = "",
}: {
  children: React.ReactNode;
  title?: string;
  className?: string;
}) {
  return (
    <button className={`default-button gap-2 ${className}`} title={title}>
      {children}
    </button>
  );
}
