import * as fs from "fs";

/**
 * Parses a .structjs file into a simple ladder logic representation.
 * This is a basic regex-based parser — can be upgraded to AST parsing later.
 */
export function parseRestructuredJS(filePath: string): string[] {
    if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
    }

    const content = fs.readFileSync(filePath, "utf-8").trim();
    const lines = content.split("\n");

    const ladder: string[] = [];

    lines.forEach((line, index) => {
        const trimmed = line.trim();
        if (!trimmed) return;

        // Convert IF statements to normally open contacts
        if (/^if\s*\(/i.test(trimmed)) {
            ladder.push(`Rung ${index + 1}: ⎯[ ]⎯ ${trimmed.replace(/^if\s*/i, "")}`);
        }
        // Convert ELSE statements to normally closed contacts
        else if (/^else/i.test(trimmed)) {
            ladder.push(`Rung ${index + 1}: ⎯[ / ]⎯ ${trimmed.replace(/^else\s*/i, "")}`);
        }
        // Default: treat as output/action
        else {
            ladder.push(`Rung ${index + 1}: ${trimmed}`);
        }
    });

    return ladder;
}
