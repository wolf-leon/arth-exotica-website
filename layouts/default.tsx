import { Head } from "./head";

import SiteShell from "@/components/site-shell";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head />
      <SiteShell>{children}</SiteShell>
    </>
  );
}
