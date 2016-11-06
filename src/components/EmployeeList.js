import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { ListView } from 'react-native';
import { employeeFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeeFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // next set of props that this compnent will bee rendered with
        // this.props is still the old set of props
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        // accepts only array of employees
        // what we get is an object, so first we have to convert the object to
        // array
        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return <ListItem employee={employee} />;
    }

    render() {
        console.log('EmployeeList', this.props);
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    // Convert object to array
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });

    // this method should return with an object
    return { employees };
};

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
