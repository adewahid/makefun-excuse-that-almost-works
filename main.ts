// The Excuse That Almost Works — make.fun entry
// Writes one line a gamer texts the boss to skip work on GTA 6 launch week.
// Gate: /output/entry.txt, UTF-8, 1-140 chars, one line, at most 20 words.
import { mkdirSync, writeFileSync } from "node:fs";

// Fresh angle: not a dead relative, not a flat tyre, not a sudden fever.
// A dentist appointment booked months ago, with a cancellation fee —
// the kind of boring, checkable, money-on-the-line reason a tired manager
// has heard before and almost believes, sent in a hurry before lunch.
// Why this works: the fee makes cancelling costly, the months-old booking
// makes it unplannable-around, and "in after lunch" promises the manager
// the afternoon back — three believability hooks in a single breathless line.
const entry =
  "Sorry, dentist appointment this morning, booked it months ago and they charge if I cancel, in after lunch";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
