import { ShieldCheck } from "lucide-react";

export function TrustBadge({ label, value }: { label: string; value: string }) {
  return (
    <div data-reveal className="glass-panel panel-3d mesh-highlight flex items-center gap-4 px-5 py-4">
      <div className="rounded-[20px] border border-white/40 bg-[linear-gradient(135deg,rgba(108,124,255,0.18),rgba(44,214,255,0.12))] p-3 text-[hsl(var(--primary))] dark:border-white/10">
        <ShieldCheck className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-[hsl(var(--muted-foreground))]">{label}</p>
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
  );
}
