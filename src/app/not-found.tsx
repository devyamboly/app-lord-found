import Link from "next/link";

import MainButton from "@/components/common/MainButton";
import SectionReveal from "@/components/common/SectionReveal";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0b101f] px-6 py-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-amber-500/5" />

      <SectionReveal className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-amber-400/80">
          Error 404
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          No pudimos encontrar la página que buscabas
        </h1>
        <p className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg">
          Es posible que la URL haya cambiado o que la página ya no exista. Vuelve al inicio para explorar nuestros planes de fondeo y recursos para traders profesionales.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/">
            <MainButton
              className="w-full sm:w-auto"
              icon={<span className="mr-2 text-xl">🏠</span>}
            >
              Volver al inicio
            </MainButton>
          </Link>

          <Link href="/challenge">
            <MainButton
              className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-200"
              icon={<span className="mr-2 text-xl">🚀</span>}
            >
              Ver planes de fondeo
            </MainButton>
          </Link>
        </div>
      </SectionReveal>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(circle_at_bottom,_rgba(251,191,36,0.25),_transparent_65%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.15),_transparent_60%)]" />
    </section>
  );
}
