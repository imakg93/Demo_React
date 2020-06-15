import React, { Fragment } from 'react';
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
import classes from './Grid.module.scss';

const Grid = (props) => {

    return (
        <Fragment>
            <span>
                Checked-In<Switch
                    checked={props.checkedIn}
                    onChange={(event) => props.filterListHandler(event.target.checked, false)}
                    value={true}
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </span>
            <span>
                Not Checked-In<Switch
                    checked={props.notCheckedIn}
                    onChange={(event) => props.filterListHandler(false, event.target.checked)}
                    value={true}
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </span>
            <TableContainer component={Paper}>
                <Table className={classes.Grid} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {props.tableConfig.map((config) => {
                                return (
                                    <TableCell key={config.header}>{config.header}</TableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.rows
                            .slice(props.page * props.rowsPerPage, props.page * props.rowsPerPage + props.rowsPerPage)
                            .map((row, rowIndex) => (
                                <TableRow key={row.id}>
                                    {
                                        props.tableConfig.map((config, index) => {
                                            if (config.header === 'Select') {
                                                return (
                                                    <TableCell key={index + rowIndex + config.key}>
                                                        <Checkbox
                                                            checked={row[config.key] && !row.seatNo}
                                                            onChange={(event) => props.selectPassenger(event, row, props.page * props.rowsPerPage + rowIndex)}
                                                            value={true}
                                                            color="primary"
                                                            disabled={row.seatNo ? true : false}
                                                        />
                                                    </TableCell>
                                                )
                                            }
                                            return (
                                                <TableCell key={index + rowIndex + row[config.key]}>{row[config.key]}</TableCell>
                                            );
                                        })
                                    }
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10]}
                component="div"
                count={props.rows.length}
                rowsPerPage={props.rowsPerPage}
                page={props.page}
                onChangePage={props.handleChangePage}
                onChangeRowsPerPage={props.handleChangeRowsPerPage}
            />
        </Fragment>
    );
}

export default Grid;