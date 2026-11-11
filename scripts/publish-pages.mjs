import { copyFile, cp, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const builtIndex = path.join(root, "dist/src/index.html");
const html = (await readFile(builtIndex, "utf8"))
  .replace(/[ \t]+$/gm, "")
  .replace(/<link rel="icon"[^>]*>\n?/, "");

await writeFile(builtIndex, html);
await copyFile(builtIndex, path.join(root, "dist/index.html"));
await copyFile(builtIndex, path.join(root, "index.html"));
await cp(path.join(root, "dist/assets"), path.join(root, "assets"), {
  recursive: true,
});
