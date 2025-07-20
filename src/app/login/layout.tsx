export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(135deg,#ffe8f5,#f8e9ff)] p-6">
      {children}
    </div>
  );
}
