import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export function ROICalculator() {
    const { t } = useLanguage();
    const [calls, setCalls] = useState(500);
    const [missed, setMissed] = useState(30);
    const [dealValue, setDealValue] = useState(200);

    const missedCalls = Math.round(calls * (missed / 100));
    const monthlyLoss = missedCalls * dealValue;
    const yearlyLoss = monthlyLoss * 12;

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
            maximumFractionDigits: 0,
        }).format(value);
    };

    return (
        <section className="py-24 md:py-32 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/[0.05] to-transparent" />

            <div className="container relative">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] mb-4">
                        {t("roi.title")}
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                        {t("roi.subtitle")}
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-8 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            {/* Calls per month */}
                            <div>
                                <label className="block text-[11px] uppercase tracking-[0.15em] font-medium text-gray-500 mb-3">
                                    {t("roi.callsPerMonth")}
                                </label>
                                <input
                                    type="range"
                                    min={50}
                                    max={2000}
                                    step={50}
                                    value={calls}
                                    onChange={(e) => setCalls(Number(e.target.value))}
                                    className="w-full h-1 bg-white/[0.1] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-400 [&::-webkit-slider-thumb]:cursor-pointer"
                                />
                                <div className="text-2xl font-bold text-white mt-2">{calls}</div>
                            </div>

                            {/* Missed % */}
                            <div>
                                <label className="block text-[11px] uppercase tracking-[0.15em] font-medium text-gray-500 mb-3">
                                    {t("roi.missedPercent")}
                                </label>
                                <input
                                    type="range"
                                    min={5}
                                    max={80}
                                    step={5}
                                    value={missed}
                                    onChange={(e) => setMissed(Number(e.target.value))}
                                    className="w-full h-1 bg-white/[0.1] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-400 [&::-webkit-slider-thumb]:cursor-pointer"
                                />
                                <div className="text-2xl font-bold text-white mt-2">{missed}%</div>
                            </div>

                            {/* Avg deal value */}
                            <div>
                                <label className="block text-[11px] uppercase tracking-[0.15em] font-medium text-gray-500 mb-3">
                                    {t("roi.avgDealValue")}
                                </label>
                                <input
                                    type="range"
                                    min={20}
                                    max={2000}
                                    step={20}
                                    value={dealValue}
                                    onChange={(e) => setDealValue(Number(e.target.value))}
                                    className="w-full h-1 bg-white/[0.1] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-400 [&::-webkit-slider-thumb]:cursor-pointer"
                                />
                                <div className="text-2xl font-bold text-white mt-2">{formatCurrency(dealValue)}</div>
                            </div>
                        </div>

                        {/* Separator */}
                        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent mb-10" />

                        {/* Results */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                            <div className="text-center">
                                <p className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium mb-2">
                                    {t("roi.result.missed")}
                                </p>
                                <p className="text-3xl md:text-4xl font-bold text-red-400">{missedCalls}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium mb-2">
                                    {t("roi.result.revenue")}
                                </p>
                                <p className="text-3xl md:text-4xl font-bold text-red-400">{formatCurrency(monthlyLoss)}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium mb-2">
                                    {t("roi.result.year")}
                                </p>
                                <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                                    {formatCurrency(yearlyLoss)}
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="text-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold text-sm tracking-wide hover:from-blue-400 hover:to-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
                            >
                                {t("roi.cta")}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
