import moment from 'moment'
export default [
	{
		label: 'ID',
		key: 'id'
	},
	{
		label: 'Flight Number',
		key: 'flight_number'
	},
	{
		label: 'Departure',
		key: 'departure',
		formatter(value) {
			return value.label
		}
	},
	{
		label: 'Departure Datetime (GMT)',
		key: 'departure_time',
	},
	{
		label: 'Destination',
		key: 'destination',
		formatter(value) {
			return value.label
		}
	},
	{
		label: 'Arrival Datetime (GMT)',
		key: 'arrival_time',
	},
	{
		label: '',
		key: 'actions'
	}
]