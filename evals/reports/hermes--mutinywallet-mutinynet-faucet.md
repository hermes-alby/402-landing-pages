# Landing page eval: hermes / mutinywallet-mutinynet-faucet

- Score: **84/100**
- Threshold: **75**
- Verdict: **PASS**
- Judge: **Hermes manual LLM review**

## Overall summary

This rewrite is a real improvement and now reads like a credible landing page rather than internal review notes pasted into public copy. The main problems from the earlier draft are fixed: the support-state leakage is gone, the evidence-gathering language is gone, and the phrasing is far more direct. It still has room to become more vivid and desirable, but it is now comfortably above the pass threshold.

## Source facts

- Provider: MutinyWallet
- Service: Mutinynet Faucet
- Endpoint: https://faucet.mutinynet.com/api/l402
- Support status: coming-soon
- Result label: Get testnet sats from a Lightning-gated faucet for Mutinynet workflows

## Criteria

### Specificity and usefulness — 24/30

The page is much clearer now. It speaks directly to a concrete user problem — getting testnet sats into a Mutinynet workflow — and most of the copy now feels specific to this faucet instead of generic landing-page filler.

Evidence:
- The caption focuses on a concrete outcome: `keep a Bitcoin test workflow moving without a browser detour or manual faucet hunt.`
- The best hero bullet is specific and useful: `Perfect for Bitcoin development and testing workflows that need testnet sats before the next step can run.`
- The table now uses `What you get` instead of internal labels.

Issues:
- The main description still leans a little functional rather than vivid.
- The hero copy could still feel more desirable and less mechanical if we want a stronger public page.

### Factual discipline and confidence calibration — 25/30

This is a major improvement. The page now states facts directly instead of narrating how they were reviewed. Most of the internal-review leakage is gone.

Evidence:
- `No account required` now appears directly instead of `The live site is explicit that no account is required.`
- The old checked-date language is gone from the details list.
- The page no longer explains the service with lines about being `easy to explain honestly before paid activation is complete`.

Issues:
- The line `The faucet page also links refund details, faucet node details, federation data, and Cashu mint context for the wider Mutinynet stack` is factual, but it still reads more like documentation inventory than public copy.
- A few lines remain descriptive in a documentation tone rather than fully polished landing-page prose.

### User-facing positioning — 22/25

The page now stays focused on the user outcome much better. It no longer drags internal support-state commentary into the value proposition, and the briefing copy is more useful to readers.

Evidence:
- The public copy no longer says things like `coming-soon page` inside value bullets.
- The briefing now emphasizes workflow relief: `Get testnet sats without leaving an agent workflow for a browser faucet detour.`
- The why-it-works section is now about funding a test environment, not about internal activation posture.

Issues:
- Because the page is still on the coming-soon path, there is a natural limit on how confident the CTA experience can feel.
- The description could do a little more to make the faucet feel attractive rather than simply practical.

### Structure and consistency — 13/15

The page is structurally solid and now uses cleaner section copy. It follows the expected landing-page shape and no longer undermines itself with obviously bad labels.

Evidence:
- The page keeps the expected Example prompt, Use cases, and FAQ sections.
- The table label and details list are cleaner than before.
- The page remains complete and easy to scan.

Issues:
- The details list still mixes strong user-facing items with a more technical ecosystem-context line that feels less polished than the rest.

## Red flags

- **low** — `The faucet page also links refund details, faucet node details, federation data, and Cashu mint context for the wider Mutinynet stack`
  - Reason: This is factual, but it reads more like documentation inventory than polished user-facing copy.
  - Suggestion: Either tighten it into a shorter ecosystem-context line or remove it if it does not help the user decide.

## Recommended edits

- **medium** / details — `The faucet page also links refund details, faucet node details, federation data, and Cashu mint context for the wider Mutinynet stack`
  - Problem: The line is informative but a little dry and documentation-heavy for a landing page.
  - Suggestion: Shorten it or replace it with one concise benefit-oriented line about broader Mutinynet ecosystem context.
- **medium** / metadata — `Enable Hermes to unlock Mutinynet testnet sats through MutinyWallet for ~$0.04 (50 sats) per faucet request, without stopping for a browser-only faucet flow.`
  - Problem: The description is clear, but still slightly mechanical.
  - Suggestion: Consider a tighter and more inviting phrasing that still keeps the concrete price and workflow benefit.

## Strengths

- The page now states key facts directly and cleanly.
- The copy is focused on a concrete Bitcoin testing workflow instead of internal process narration.
- The strongest lines make it easy to understand why this faucet matters in an agent flow.

## Needs more human examples

- Add a good example showing concise, factual copy for a Bitcoin testing utility page.
- Add a good example of a details list that stays useful without drifting into documentation inventory.
