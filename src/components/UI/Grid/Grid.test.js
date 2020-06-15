import React from 'react';
import { configure, shallow } from 'enzyme';
import Grid from './Grid';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import TablePagination from '@material-ui/core/TablePagination';
import Adapter from 'enzyme-adapter-react-16';
import { tableHeaderConfig } from '../../../Constants/passenger.constant';
configure({ adapter: new Adapter() });

describe('<Grid/>', () => {
    let wrapper;
    beforeEach(() => {
        const rows = [{
            id: 'J8989762',
            firstName: 'Maria',
            name: 'Mrs. Maria Jena',
            Gender: 'Male',
            DOB: '22-07-1995',
            age: 24,
            isCheckedIn: false,
            seatNo: '',
            Meals: '',
            wifi: false,
            checkinBag: '',
            cabinBag: '',
            wheelChair: false
        }]
        wrapper = shallow(<Grid tableConfig={tableHeaderConfig} page={0} rowsPerPage={5} rows={rows} filterListHandler={() => { }} />);
    });
    it('should render List,NavLink,ListItem,ListItemIcon,ListItemText', () => {
        // expect(wrapper.find(TableContainer)).toHaveLength(1);
        wrapper.find(Switch).first().simulate('click');
        wrapper.find(Switch).last().simulate('click');
        expect(wrapper.find(Table)).toHaveLength(1);
        expect(wrapper.find(TableHead)).toHaveLength(1);
        expect(wrapper.find(TableBody)).toHaveLength(1);
        expect(wrapper.find(TablePagination)).toHaveLength(1);
    });

});