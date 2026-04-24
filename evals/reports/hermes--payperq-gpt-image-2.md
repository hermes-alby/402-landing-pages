# Landing page eval: hermes / payperq-gpt-image-2

- Score: **87/100**
- Threshold: **75**
- Verdict: **PASS**
- Judge: **Hermes manual LLM review**

## Overall summary

The original review surfaced two real issues: the page used a generic model name in public copy, and it leaked internal source-attribution language about local examples. Both are now fixed. The page now uses `ChatGPT Images 2.0` consistently and translates official-source research into user-facing benefits and examples. It passes the current rubric with room for a future polish pass around PayPerQ-specific positioning.

## Source facts

- Provider: PayPerQ
- Service: ChatGPT Images 2.0
- Endpoint: https://api.ppq.ai/v1/images/generations/gpt-image-2
- Support status: coming-soon
- Result label: Create launch-ready visuals on demand from one reusable prompt

## Criteria

### Specificity and usefulness — 27/30

The page is specific and useful after the naming fix. It now uses the official public model name, focuses on concrete creative outcomes, and explains the range of useful image types without reducing the page to endpoint metadata.

Evidence:
- The service name is now `ChatGPT Images 2.0` instead of the generic `GPT Image 2`.
- The hero and caption focus on concrete outcomes such as polished campaign-style images, multilingual posters, and layout-heavy editorial work.
- The example prompt is detailed enough to feel like a real creative brief, not a generic image-generation request.

Issues:
- The page could still be slightly more specific about why PayPerQ is the right access path beyond price and no subscription.
- The broad visual-range claim is supported by examples, but should stay tied to visible examples rather than becoming generic image-model hype.

### Factual discipline and confidence calibration — 25/30

The strongest factual issue from the earlier draft is fixed: public copy no longer tells users that examples are local copies sourced from an OpenAI post. The page now turns source research into capabilities and examples instead of exposing the research process.

Evidence:
- The details now say `Service: ChatGPT Images 2.0`.
- The prior line `Main and supporting examples are local copies sourced from...` has been removed.
- The details now present user-relevant capabilities: quality tiers, prompt input, optional image URL input, aspect ratio control, output format, and multi-image generation.

Issues:
- Some capability details still read like API metadata rather than polished marketing copy, but they are materially useful to a technical visitor.
- The official source research should remain documented internally, not in public-facing details.

### User-facing positioning — 22/25

The page is strongly user-facing: it speaks to launch graphics, blog artwork, social images, creative freedom, and avoiding subscription waste. It avoids internal-process language in the main public copy after the rewrite.

Evidence:
- The hero copy says users can `Create polished visuals` and `pay only for the images you actually need.`
- The briefing says `Create polished launch creative without the drag of a monthly subscription. Pay only per image, nothing wasted.`
- The use cases are framed as user outcomes: launch images, blog visuals, and campaign artwork.

Issues:
- The line `Unlock stunning visuals on demand` is acceptable in context, but should be watched so it does not drift into unsupported hype on future pages.
- Because the service is still coming-soon, the page should continue avoiding any supported-now implication.

### Structure and consistency — 13/15

The page follows the expected landing-page structure and the updated official name now propagates through generated titles, headings, details, and FAQ copy.

Evidence:
- The page keeps Example prompt, Use cases, FAQ, example output, supporting images, and CTA sections.
- The service display name now renders as ChatGPT Images 2.0 in generated page copy.
- The image showcase structure is stronger than a single mock image and matches the current image-generation guidance.

Issues:
- There is still some technical-density in the details list, but it is scannable and relevant.

## Red flags

- None

## Recommended edits

- **medium** / summary — `Unlock stunning visuals on demand`
  - Problem: This is warm and useful here, but it is close to hype if reused without concrete examples.
  - Suggestion: Keep it because the page has real supporting examples, but avoid making this phrase a generic default across weaker image pages.
- **low** / details — `Prompt input is required; optional image URL input, aspect ratio control, output format, and multi-image generation are supported`
  - Problem: This is useful but reads like API metadata.
  - Suggestion: If the page needs more warmth later, translate this into a shorter benefit-oriented line about creative control.

## Strengths

- Uses the official public model name consistently after the rewrite.
- Turns official-source research into user-facing examples instead of internal attribution notes.
- The creative brief and supporting image examples make the service easy to imagine using.

## Needs more human examples

- Add a good example showing official model naming used consistently across generated landing-page copy.
- Add a good example of turning official-source examples into user-facing benefits without saying where local assets were sourced.
