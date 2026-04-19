# Sats4AI Translate Text — Paid Test Record

**Timestamp:** 2026-04-19T08:20:38Z  
**Provider:** Sats4AI  
**Endpoint:** `https://sats4ai.com/api/l402/translate-text`  
**Purpose:** First real paid provider-activation test for the 402 landing pages workflow.

---

## Request used

```bash
npx -y @getalby/cli@0.6.1 fetch https://sats4ai.com/api/l402/translate-text \
  -X POST \
  -H '{"Content-Type":"application/json"}' \
  -b '{"text":"Hello world from Bitcoin. This is a manual provider activation test for the 402 landing pages project.","targetLanguage":"Spanish"}' \
  --max-amount 100
```

### Request body

```json
{
  "text": "Hello world from Bitcoin. This is a manual provider activation test for the 402 landing pages project.",
  "targetLanguage": "Spanish"
}
```

---

## Result

The Alby CLI completed the L402 payment flow successfully and returned:

```json
{
  "content": "{\"translatedText\":\"Hola mundo desde Bitcoin. Este es un test de activación manual del proveedor para el proyecto de 402 páginas de aterrizaje.\",\"sourceLanguage\":\"auto-detected\",\"targetLanguage\":\"Spanish\"}"
}
```

Parsed response:

```json
{
  "translatedText": "Hola mundo desde Bitcoin. Este es un test de activación manual del proveedor para el proyecto de 402 páginas de aterrizaje.",
  "sourceLanguage": "auto-detected",
  "targetLanguage": "Spanish"
}
```

---

## Payment details

Wallet balance before the test:

```json
{
  "amount_in_sats": 10000
}
```

Wallet balance after the test:

```json
{
  "amount_in_sats": 9998
}
```

Most recent outgoing transaction:

```json
{
  "type": "outgoing",
  "state": "settled",
  "description": "Sats4AI - Translation - Standard - L402",
  "amount_in_sats": 1,
  "fees_paid_in_sats": 1,
  "created_at": 1776586787,
  "settled_at": 1776586800,
  "payment_hash": "81a55015827d720d48aafb83459e3aac4b997abf43996487714455ca621318ee"
}
```

### Cost summary

- service cost: **1 sat**
- routing / payment fees: **1 sat**
- total wallet delta: **2 sats**
- max spend guard used: **100 sats**

---

## Why this endpoint is a good first activation candidate

- very cheap to test
- synchronous request / response
- easy to explain on a landing page
- clear user value
- response format is simple and easy to capture
- easier than async audio / video / file workflows for v1

---

## Takeaways

1. **Sats4AI passed the first real paid test.**
2. **402index health alone is not enough to reject a provider.** The provider had poor health reporting there, but the real L402 payment flow worked.
3. **`translate-text` is a strong first endpoint for provider activation.**
4. We now have a concrete example of the minimal artifact set we should save for future provider activations:
   - endpoint URL
   - exact request
   - exact response
   - actual cost paid
   - transaction evidence
   - brief rationale for why the endpoint is landing-page-worthy
