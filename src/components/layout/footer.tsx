import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center gap-4">
        <p className="font-bold text-[#0A2540] dark:text-[#7CA9D6] tracking-widest text-sm">
          — FIND • EXPLORE • OWN —
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} EasyProperty. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <Link href="/about" className="hover:text-[#0070F3] transition-colors">About</Link>
          <Link href="/privacy" className="hover:text-[#0070F3] transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-[#0070F3] transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}