declare module wordfind {
    /**
      * Generates a new word find (word search) puzzle.
      *
      * Settings:
      *
      * height: desired height of the puzzle, default: smallest possible
      * width:  desired width of the puzzle, default: smallest possible
      * orientations: list of orientations to use, default: all orientations
      * fillBlanks: true to fill in the blanks, default: true
      * maxAttempts: number of tries before increasing puzzle size, default:3
      * maxGridGrowth: number of puzzle grid increases, default:10
      * preferOverlap: maximize word overlap or not, default: true
      *
      * Returns the puzzle that was created.
      *
      * @param {[String]} words: List of words to include in the puzzle
      * @param {options} settings: The options to use for this puzzle
      * @api public
      */
    function newPuzzle(words: string[], settings: object): string[][];
}