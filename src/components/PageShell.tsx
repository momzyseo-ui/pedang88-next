import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

type Props = {
  title: string;
  intro?: string;
  crumbs: Crumb[];
  children: React.ReactNode;
};

/** Kerangka halaman konten: breadcrumb, satu <h1>, intro, lalu isi bergaya prose-lite. */
export default function PageShell({ title, intro, crumbs, children }: Props) {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-8 pt-10 md:pt-14">
      <Breadcrumbs items={crumbs} />
      <h1 className="font-display mt-6 text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
      {intro ? <p className="mt-5 text-lg text-steel">{intro}</p> : null}
      <div className="prose-lite mt-10">{children}</div>
    </div>
  );
}
