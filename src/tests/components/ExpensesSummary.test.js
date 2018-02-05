import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary with one expense', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={123} />);
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with multiple expenses', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={114195} />);
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with empty message', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={0} expensesTotal={0} />);
	expect(wrapper).toMatchSnapshot();
});