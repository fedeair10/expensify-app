import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
	state = {
		calendarFocused: null
	};

	onDateChange = ({ startDate, endDate }) => {
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	};

	onFocusChange = (calendarFocused) => {
		this.setState(() => ({ calendarFocused }));
	};

	onTextChange = (e) => {
		this.props.setTextFilter(e.target.value);
	};

	onSortChange = (e) => {
		if( e.target.value === 'amount' )
			this.props.sortByAmount();
		else if( e.target.value === 'date' )
			this.props.sortByDate();
	};

	render() {
		return (
			<div>
				<input
					type="text"
					value={this.props.filters.text}
					onChange={this.onTextChange}
				/>
				<select
					value={this.props.filters.sortBy}
					onChange={this.onSortChange}
				>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>
				<DateRangePicker
					startDate={this.props.filters.startDate}
					startDateId='start_date_filter'
					endDate={this.props.filters.endDate}
					endDateId='end_date_filter'
					onDatesChange={this.onDateChange}
					focusedInput={this.state.calendarFocused}
					onFocusChange={this.onFocusChange}
					showClearDates={true}
					numberOfMonths={1}
					isOutsideRange={() => false}
				/>
			</div>
		);
	};
};

const mapStateToProps = (state) => ({
	filters : state.filters
});

const mapDispatchToProps = (dispatch) => ({
	setTextFilter : (text) => dispatch(setTextFilter(text)),
	setStartDate : (date) => dispatch(setStartDate(date)),
	setEndDate : (date) => dispatch(setEndDate(date)),
	sortByAmount : () => dispatch(sortByAmount()),
	sortByDate : () => dispatch(sortByDate())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);