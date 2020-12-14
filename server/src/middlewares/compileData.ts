import { Request, Response, NextFunction } from "express";
import fs, { promises as fsPromise } from "fs";
import readline from "readline";

// Interface of log data.
interface Ilog {
  id: string;
  host: string;
  datetime: {
    day: string;
    hour: string;
    minute: string;
    second: string;
  };
  request: {
    method: string;
    url: string;
    protocol: string;
    protocol_version: string;
  };
  response_code: string;
  document_size: string;
}

// Compiler script
export const compiler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Stream data from .txt file.
    const fileStream = fs.createReadStream("server/epa-http.txt");
    // Read data line by line from stream.
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    // Array for objects.
    const logArr: Array<Ilog> = [];
    // Loop for each readline.
    for await (const line of rl) {
      // Regular expression for split data.
      const re = /[\s"[\]]/g;
      // Split data and remove empty string.
      const data = line.split(re).filter((el) => el.length != 0);
      // Split protocol string.
      const protocol = data[4].split("/");
      // Split time
      const time = data[1].split(":");
      // id generate
      const id = Math.random().toString(36).substr(2, 9);
      // Create log object.
      const log: Ilog = {
        id: id,
        host: data[0],
        datetime: {
          day: time[0],
          hour: time[1],
          minute: time[2],
          second: time[3],
        },
        request: {
          method: data[2],
          url: data[3].split("/.").join("/"),
          protocol: protocol[0] !== "HTTP" ? "" : protocol[0],
          protocol_version: protocol[1] !== "1.0" ? "" : protocol[1],
        },
        response_code: data[5],
        document_size: data[6] === "-" ? "0" : data[6],
      };
      // Push object to array.
      logArr.push(log);
    }
    // Save the data in json file.
    await storeData(logArr);

    next();
  } catch (err) {
    console.log(err);
  }
};
// Method for save data.
const storeData = async (data: Array<Ilog>): Promise<void> => {
  try {
    new Promise((resolve, reject) => {
      if (fs.existsSync("./server/dist/data.json")) {
        fs.writeFile(
          "./server/dist/data.json",
          JSON.stringify(""),
          (writeErr) => {
            if (writeErr) reject(writeErr);
            else resolve(null);
          }
        );
        return fs.writeFile(
          "./server/dist/data.json",
          JSON.stringify(data, null, 2),
          (writeErr) => {
            if (writeErr) reject(writeErr);
            else resolve(null);
          }
        );
      } else {
        fs.writeFile(
          "./server/dist/data.json",
          JSON.stringify(data, null, 2),
          (writeErr) => {
            if (writeErr) reject(writeErr);
            else resolve(null);
          }
        );
      }
    });
  } catch (err) {
    console.log(err);
  }
};
