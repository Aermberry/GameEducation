class HorizontalPuzzleCellArrangeValidator implements PuzzleCellArrangeValidator {
	public validate(cells: PuzzleCell[]): boolean
	{
		if (cells.length <= 1) {
			return true;
		}

		//rowIndex都相等
		if (cells.map(cell => cell.rowIndex).distinct().length > 1) {
			return false;
		}

		//columnIndex是等差数列，相差1
		if (!cells.map(cell => cell.columnIndex).equals(Array.range(cells[0].columnIndex, cells.length))) {
			return false;
		}

		return true;
	}
}