"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import CtaButton from "@/components/ui/cta-button";
import SparksButton from "@/components/ui/sparks-button";
import { MessageCircle, Globe } from "lucide-react";

export default function CommunitySection() {
  const open = (url: string) => {
    if (!url || url === "#") return;
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className=" py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Opere con inteligencia y gane
          </h2>
          <p className="text-zinc-300">
            Únase hoy mismo a LordFound y viva una comunidad de trading como ninguna otra
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card: Asistencia 24/7 */}
          <Card className="relative overflow-hidden border-amber-500/30 bg-gradient-to-br from-zinc-900/60 to-zinc-900/30">
            {/* flare top */}
            <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-400/80 to-transparent blur-sm" />
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-amber-400" />
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">Asistencia humana 24/7</h3>
                  <p className="text-zinc-300 text-sm md:text-base">
                    Ofrecemos asistencia las 24 horas del día, los 7 días de la semana, lo que garantiza que siempre dispondrá de ayuda en tiempo real.
                  </p>
                  <CtaButton
                    onClick={() => open("#")}
                    className="mt-2 w-full sm:w-fit"
                  >
                    Contactar con soporte
                  </CtaButton>
                </div>
              </div>
            </CardContent>
            {/* flare bottom */}
            <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-amber-400/80 to-transparent blur-sm" />
          </Card>

          {/* Card: Únase a la comunidad */}
          <Card className="relative overflow-hidden border-amber-500/30 bg-gradient-to-br from-zinc-900/60 to-zinc-900/30">
            <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-400/80 to-transparent blur-sm" />
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-amber-400" />
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">Únase a la comunidad</h3>
                  <p className="text-zinc-300 text-sm md:text-base">
                    De día o de noche, nuestro equipo está listo para ayudarle con cualquiera de sus necesidades comerciales.
                  </p>
                  <SparksButton
                    onClick={() => open("#")}
                    className="mt-2 w-full sm:w-fit"
                  >
                    Abrir Discord
                  </SparksButton>
                </div>
              </div>
            </CardContent>
            <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-amber-400/80 to-transparent blur-sm" />
          </Card>
        </div>
      </div>
    </section>
  );
}