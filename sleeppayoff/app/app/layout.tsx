import { BottomNav, TransicionRuta } from '@/components/app/AppUI';

export const metadata = { title: 'Tu plan — SleepPayoff' };

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex min-h-dvh flex-col text-[var(--text-primary)] [font-family:var(--font-body)]"
      style={{
        background:
          'radial-gradient(600px 460px at 8% -8%, color-mix(in oklab, var(--accent) 26%, transparent), transparent 65%), radial-gradient(560px 520px at 100% 55%, color-mix(in oklab, var(--accent-2, var(--accent)) 22%, transparent), transparent 68%), radial-gradient(500px 400px at 50% 115%, color-mix(in oklab, black 30%, transparent), transparent 70%), var(--bg)',
      }}
    >
      <div className="flex-1 pb-6">
        <TransicionRuta>{children}</TransicionRuta>
      </div>
      <BottomNav />
    </div>
  );
}
