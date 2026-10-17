import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { GALLERY, SERVICES, SERVICE_OPTIONS, SITE } from "../lib/constants.ts";

const publicDir = join(import.meta.dirname, "..", "public");

test("every gallery image exists in public/", () => {
  for (const item of GALLERY) {
    assert.ok(existsSync(join(publicDir, item.image)), `missing ${item.image} (${item.title})`);
  }
});

test("every service image exists in public/", () => {
  for (const service of SERVICES.filter((s) => s.image)) {
    assert.ok(existsSync(join(publicDir, service.image)), `missing ${service.image} (${service.title})`);
  }
});

test("gallery images are unique", () => {
  const images = GALLERY.map((g) => g.image);
  assert.equal(new Set(images).size, images.length);
});

test("site contact data is well formed", () => {
  assert.match(SITE.url, /^https:\/\/[^/]+$/);
  assert.match(SITE.email, /^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  assert.equal(SITE.phoneHref, `tel:${SITE.phone.replace(/\s/g, "")}`);
  assert.equal(SITE.whatsapp, `https://wa.me/${SITE.phone.replace(/\D/g, "")}`);
});

test("contact form offers every service", () => {
  assert.deepEqual(SERVICE_OPTIONS, SERVICES.map((s) => s.title));
});
