"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, Check } from "lucide-react";

import CtaButton from "@/components/ui/cta-button";
import { RulesTable } from "@/components/challenge-selector/RulesTable";

import { PhaseKind, AccountSize } from "@/types/challenges";
import { sizes, sizeItem, currency } from "@/helpers/challenge-sizes";
import { cn } from "@/lib/utils";

import { CHALLENGE_URL } from "@/config/config";
import { CHALLENGE_CONFIG } from "@/mocks/challenges";

export default function ChallengeSelector() {
  const [phase, setPhase] = useState<PhaseKind>("one");
  const [size, setSize] = useState<AccountSize>("10k");

  const price = CHALLENGE_CONFIG.fees[phase][size];
  const rules = CHALLENGE_CONFIG.rules[phase];
  return (
    <section id="challenge" className="mx-auto w-full max-w-full p-4 md:py-8 md:pl-32 md:pr-24">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left: selectors + pricing card */}
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="flex items-center gap-3">
              <span className="h-full w-1 bg-amber-400 py-4"></span>
              <span className="text-sm font-semibold text-zinc-300">
                Tipo de cuenta
              </span>
            </p>
            <Tabs
              value={phase}
              onValueChange={(v) => setPhase(v as PhaseKind)}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 bg-zinc-900/60 rounded-lg">
                {Object.entries(CHALLENGE_CONFIG.types).map(([key, label]) => (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="data-[state=active]:bg-amber-500 data-[state=active]:text-black text-white cursor-pointer text-xs sm:text-sm py-2"
                  >
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>
              <TabsContent value={phase} />
            </Tabs>
          </div>

          <div className="space-y-3">
            <p className="flex items-center gap-3">
              <span className="h-full w-1 bg-amber-400 py-4"></span>
              <span className="text-sm font-semibold text-zinc-300">
                Tamaño de cuenta
              </span>
            </p>
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={cn(sizeItem({ active: size === s }))}
                >
                  ${s}
                </button>
              ))}
            </div>
          </div>

          <Card className="border-zinc-700 bg-gradient-to-b from-zinc-900/60 to-zinc-900/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-zinc-400 text-base">
                One-Time Fee
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-200">
                {currency(price)}
              </div>
              <CtaButton
                icon={<DollarSign className="h-5 w-5 text-lg" />}
                onClick={() => {
                  window.location.href = CHALLENGE_URL;
                }}
              >
                <span className="text-lg"> Comprar Challenge</span>
              </CtaButton>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <Check className="h-4 w-4" /> Sin suscripciones • Entrega
                inmediata
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right: rules table */}
        <Card className="border-zinc-700 bg-zinc-900/40">
          <CardHeader>
            <CardTitle className="text-zinc-100">Parámetros</CardTitle>
          </CardHeader>
          <CardContent className="overflow-visible">
            <RulesTable phase={phase} rows={rules} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
