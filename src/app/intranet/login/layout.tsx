// app/intranet/login/layout.tsx
export const metadata = {
  title: 'Login Intranet',
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex justify-center bg-[linear-gradient(135deg,#ffe8f5,#f8e9ff)]
                    min-h-[calc(100vh-64px)] pt-16 pb-12 px-4">
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}