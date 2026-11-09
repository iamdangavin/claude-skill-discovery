# discovery

A Claude Code skill that interviews you about a plan, decision, or idea until you and Claude reach a shared understanding. Questions are asked as a design tree, a round at a time, using Claude Code's `AskUserQuestion` tool so you answer by picking options instead of typing.

## Install

```bash
npm install -g @iamdangavin/discovery
```

This copies `SKILL.md` to `~/.claude/skills/discovery/` (or `$CLAUDE_CONFIG_DIR/skills/discovery/` if set).

## Update

```bash
npm update -g @iamdangavin/discovery
```

## Use

In Claude Code, say "run discovery on this" or "grill me about this plan."

## Uninstall

```bash
npm uninstall -g @iamdangavin/discovery
rm -rf ~/.claude/skills/discovery
```

## Credit

Based on [grill-me](https://github.com/mattpocock/skills) by Matt Pocock.
