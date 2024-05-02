export default function Button({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <button className="default-button gap-2" title={title}>
      {children}
    </button>
  );
}
