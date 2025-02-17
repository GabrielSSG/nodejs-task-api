import fs from "node:fs";
import { parse } from "csv-parse";

const csvFilePath = new URL("./tasks.csv", import.meta.url);

const stream = fs.createReadStream(csvFilePath);

const csvParse = parse({
  fromLine: 2,
  skipEmptyLines: true,
  delimiter: ",",
});

async function run() {
  const linesParse = stream.pipe(csvParse);

  for await (const line of linesParse) {
    const [title, description] = line;

    await fetch("http://localhost:3333/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });
  }
}

run();
