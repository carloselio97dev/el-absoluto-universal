// components/intranet/Shell.tsx
import Topbar from './Topbar';
import Sidebar from './Sidebar';

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <div className="flex h-screen flex-col overflow-hidden" style={{ paddingLeft: 240 }}>
        <Topbar />
        <div className="flex-1 overflow-y-auto custom-scroll px-10 py-10">
          <div className="mx-auto max-w-5xl">{children}</div>
        </div>
      </div>
    </>
  );
}
