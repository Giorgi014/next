export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>Inner layouts</h2>
      {children}
    </div>
  );
}
