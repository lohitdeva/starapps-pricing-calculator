import ShopifyPricingCalculator from "./ShopifyPricingCalculator";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white">
        <div className="h-1 bg-black" />
        <div className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="StarApps" className="h-16 w-64" />
            </div>

            <div className="text-2xl font-medium text-gray-800">
              Pricing Calculator
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <ShopifyPricingCalculator />
      </div>
      <Analytics />
      <SpeedInsights />
    </main>
  );
}
