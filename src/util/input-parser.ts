import * as fs from 'fs';

export class InputParser {
  /**
   * Reads file from `src/input` and splits on newlines.
   * @param fileName Name of file to parse, including file extension.
   * @returns File contents split on newlines.
   */
  public static readLines(fileName: string): string[] {
    const buffer = fs.readFileSync(`../input/${fileName}`, {
      encoding: 'utf-8'
    });
    return buffer.split(/\r?\n/);
  }
}
