import { ShieldCheck } from "lucide-react";

export function TrustBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass-panel flex items-center gap-4 px-5 py-4">
      <div className="rounded-2xl bg-[hsl(var(--secondary))]/10 p-3 text-[hsl(var(--secondary))]">
        <ShieldCheck className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-[hsl(var(--muted-foreground))]">{label}</p>
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
  );
}
