class VerticalPuzzleCellArrangeValidator implements PuzzleCellArrangeValidator {
	public validate(cells: PuzzleCell[]): boolean
	{
		if (cells.length <= 1) {
			return true;
		}

		//rowIndex都相等
		if (cells.map(cell => cell.columnIndex).distinct().length > 1) {
			return false;
		}

		//rowIndex是等差数列，相差1
		if (!cells.map(cell => cell.rowIndex).equals(Array.range(cells[0].rowIndex, cells.length))) {
			return false;
		}

		return true;
	}
}