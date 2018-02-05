import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
	const result = selectExpensesTotal([]);
	expect(result).toBe(0);
});

test('should return correct total for single expense', () => {
	const result = selectExpensesTotal([expenses[1]]);
	expect(result).toBe(expenses[1].amount);
});

test('should return correct total for multiple expenses', () => {
	const result = selectExpensesTotal(expenses);
	expect(result).toBe(114195);
});