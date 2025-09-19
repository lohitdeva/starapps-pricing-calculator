# StarApps Pricing Calculator

> **GPT-generated project** — built with ChatGPT to speed up prototyping and polish.

A lightweight web app for **Merchant Support Specialists** to create quick, accurate pricing summaries for merchants based on:

- Their **Shopify plan (tier)**
- The **StarApps app** they use
- **Global** or **per-app** discount rates
- Optional **currency display** (USD is canonical; a converted amount is shown in brackets in the chat message)

---

## 🧭 Who is this for?

Support specialists who need to:

- Quote current app pricing for a merchant
- Apply a global discount _or_ different discounts per app
- Share a ready-to-paste chat message with clear totals and savings
- Optionally show an indicative amount in the merchant’s local currency **in the message only**

---

## 🔗 Live App

**URL:** _TBD — add your production link here (e.g., `https://pricing.starapps.studio`)_

**Browser support:** Latest Chrome, Edge, Firefox, Safari (desktop & mobile).  
**Data:** This tool uses a fixed in-app pricing list; FX rates are fetched live (see below).

---

## 🖥️ How to Use (Step-by-Step)

1. **Merchant Details**

   - **Name (optional):** Type the merchant’s name. If empty, the message will say “Hi there”.
   - **Shopify Plan (tier):** Choose one of: Pause and Build / Shopify Basic / Shopify Grow / Shopify Advanced / Shopify Plus.

2. **Discount Mode**

   - **Discount (%)** — sets a **global** discount for all selected apps.
   - **Use different discount rates per app** — enable to reveal fields for each selected app:
     - Leave an app’s field **blank** to **fallback to the global** discount.
     - Enter a number (0–100) to override for that specific app.

3. **Apps**

   - Tick the apps the merchant is using.
   - The UI shows each app’s **USD price** for the selected tier.

4. **(Optional) Currency**

   - Choose a currency (e.g., **AED**, **INR**, **EUR**) from the selector in the **Pricing Summary** header.
   - The **summary table remains USD-only**, but the **generated chat message** shows converted amounts in brackets, e.g.:
     ```
     SA Variants: Combined Listings: $29.90 (₹2,485.12)
     ```

5. **Review & Copy**
   - The **Pricing Summary** table shows line items + totals (USD).
   - The **Generated Chat Message** shows a complete, paste-ready message:
     - Actual (pre-discount) lines
     - Discounted lines (with **per-app %** when using per-app mode)
     - Monthly totals and savings (USD + optional conversion in brackets)
   - Click **Copy** to put the message on your clipboard.

---

## 🧾 What the App Calculates

- **Per-app actual price**: From the app’s pricing table for the selected Shopify tier.
- **Per-app discount**:
  - Global discount **or**
  - Per-app discount if provided (blank → fallback to global)
- **Per-app discounted price**: `actual × (1 − discount%)`
- **Totals**:
  - **Actual total** = sum of actual prices
  - **Discounted total** = sum of discounted prices
  - **Savings** = actual total − discounted total
- **Currency (optional)**:
  - USD is canonical; converted amounts are **indicative** (see “Exchange Rates” below).
  - In the chat message, USD is shown first, with the converted amount in parentheses.

---

## ✍️ The Generated Chat Message (Example)

Hi John Doe,

I see that you are currently on the Shopify Basic plan, and thus, the pricing for you will be as follows:
Color Swatch King: Variants: $14.90
SA Variants: Combined Listings: $14.90
Variant Descriptions King: $9.90

Once I have applied the discounts, the prices will be revised to:
Color Swatch King: Variants: $13.41 (₹1,120.25) — 10% off
SA Variants: Combined Listings: $13.41 (₹1,120.25) — 10% off
Variant Descriptions King: $8.91 (₹744.35) — 10% off

This means you will pay $35.73 (₹2,984.85) per month instead of $39.70 (₹3,318.85), saving a total of $3.97 (₹334.00)

Please let me know if you would like me to go ahead and apply this discount for you

yaml
Always show details

Copy code

> The header line changes automatically:
>
> - **Global mode**: “Once I have applied the **10%** discount…”
> - **Per-app mode**: “Once I have applied the **discounts**…”

---

## 💱 Exchange Rates (FYI for Support)

- When you pick a currency, the app fetches **USD-base** rates using a resilient fallback chain:
  1. Frankfurter (ECB daily rates)
  2. exchangerate.host
  3. open.er-api.com
  4. jsDelivr currency snapshot
- If a provider doesn’t include a currency (e.g., **AED** often missing in ECB), the app automatically tries the next provider.
- If **all** providers fail (rare), the app shows a small note and continues with **USD only**.
- **Important:** Conversions are **informational only**; **billing remains in USD**.

---

## 🧩 App & Pricing Data

The list of StarApps and their per-tier prices is encoded in the app.  
If pricing changes or a new app is added, ping the maintainer to update the in-app list.

> Tip for maintainers: edit `APPS` in `src/ShopifyPricingCalculator.tsx`, then redeploy.

---

## ✅ Best Practices for Agents

- **Confirm the merchant’s Shopify plan** first; pricing depends on it.
- **Prefer global discount** unless policy requires per-app rates.
- **Leave per-app fields blank** to **use the global discount as fallback**.
- **Use the currency selector** if the merchant prefers a local view; remind them that **USD is billed**.
- **Keep the message intact**; it’s structured to be copy-paste-friendly and transparent.

---

## 🧪 Quick QA Checks

- Toggle **Use different discount rates per app** on/off:
  - With it **off**, all apps should reflect the global percent.
  - With it **on**, blank fields should **fallback** to the global value.
- Pick **AED** in Currency; confirm converted amounts appear (provider fallback working).
- Copy button should include the **entire** message.
- Change tiers and verify line items update correctly.

---

## 🛠️ Troubleshooting

- **No currency appears in brackets**
  - You haven’t selected a currency _or_ FX fetch failed. Try again or switch networks; USD still shows.
- **Numbers look “off”**
  - Check that the **tier** is correct and the right apps are selected.
  - Confirm discount values (no extra spaces; 0–100).
- **Logo/branding looks cramped**
  - SVG `viewBox` might include padding; replace the file with a tighter export.

---

## 🔐 Privacy & Data

- This tool runs **entirely in the browser**.
- It does not send merchant or pricing info to any external servers.
- FX rate requests go to public endpoints; no merchant data is sent with them.

---

## 📣 Feedback & Changes

- **Bug or request?** Create an issue in the repo or ping the maintainer.
- **Pricing updates?** Provide the new per-tier values and the date they take effect.
- **Copy tweaks?** Propose the new wording; we’ll update the generated message template.

---

## 🧑‍💻 Maintainers (Internal)

- Build: `npm run build`
- Preview: `npm run preview`
- Deploy: Vercel / Cloudflare Pages (static `dist/`)

> This is a **GPT-generated project**. The codebase was produced with assistance from ChatGPT and then curated/validated by me.
