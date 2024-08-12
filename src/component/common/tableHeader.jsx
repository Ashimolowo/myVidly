import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css'; 

class TableHeader extends Component {
    raiseSort = path => {
        console.log("Path:", path); // Log path to confirm it's being passed correctly

        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn.path === path) {
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        } else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.props.onSort(sortColumn);
    };

    renderSortIcon = column => {
        const { sortColumn } = this.props;

        console.log("Column:", column); // Log column to check its properties
        console.log("SortColumn:", sortColumn); // Log sortColumn to check its properties

        if (!column || !sortColumn) return null;
        if (column.path !== sortColumn.path) return null;

        return sortColumn.order === 'asc' 
            ? <i className="fa fa-sort-asc" aria-hidden="true"></i> 
            : <i className="fa fa-sort-desc" aria-hidden="true"></i>;
    };

    render() {
        const { columns } = this.props;

        console.log("Columns:", columns); // Log columns to ensure they are being passed correctly<i class="fas fa-sort-up"></i>

        return (
            <thead>
                <tr>
                    {columns.map(column => (
                        <th
                            key={column.path || column.key}
                            onClick={() => this.raiseSort(column.path)}
                            style={{ cursor: 'pointer' }}
                        >
                            {column.label} {this.renderSortIcon(column)}
                            {console.log(this.renderSortIcon(column))
                            }
                        </th>
                    ))}
                </tr>
            </thead>
        );
    }
}

export default TableHeader;
