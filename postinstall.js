const fs = require("fs");
const path = require("path");
const os = require("os");

const base = process.env.CLAUDE_CONFIG_DIR || path.join(os.homedir(), ".claude");
const dest = path.join(base, "skills", "discovery");

fs.mkdirSync(dest, { recursive: true });
fs.copyFileSync(path.join(__dirname, "SKILL.md"), path.join(dest, "SKILL.md"));
console.log(`discovery skill installed to ${dest}`);
