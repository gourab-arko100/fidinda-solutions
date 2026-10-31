import fs from "node:fs";
import path from "node:path";

/**
 * True if a file exists in /public (checked on the server at build/render time).
 * Lets us show the real logo when you add it, or a clean placeholder until then —
 * never a broken image.
 */
export function publicFileExists(src?: string): src is string {
  if (!src) return false;
  try {
    return fs.existsSync(path.join(process.cwd(), "public", src.replace(/^\//, "")));
  } catch {
    return false;
  }
}
