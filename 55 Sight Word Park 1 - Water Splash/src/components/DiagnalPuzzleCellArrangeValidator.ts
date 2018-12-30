class DiagnalPuzzleCellArrangeValidator implements PuzzleCellArrangeValidator {
	public validate(cells: PuzzleCell[]): boolean
	{
		if (cells.length <= 1) {
			return true;
		}
		
		//rowIndex是等差数列，相差1
		Array.from(Array().keys())
		if (!cells.map(cell => cell.rowIndex).equals(Array.range(cells[0].rowIndex, cells.length))) {
			return false;
		}

		//columnIndex是等差数列，相差1
		if (!cells.map(cell => cell.columnIndex).equals(Array.range(cells[0].columnIndex, cells.length))) {
			return false;
		}

		return true;
	}
}