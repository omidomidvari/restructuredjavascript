import * as path from "path";
import { parseRestructuredJS } from "./parser";

try {
    const filePath = path.join(__dirname, "example.structjs");
    const ladder = parseRestructuredJS(filePath);

    console.log("=== RestructuredJavaScript → Ladder Logic ===");
    ladder.forEach(rung => console.log(rung));
} catch (error) {
    console.error("Error:", (error as Error).message);
}
