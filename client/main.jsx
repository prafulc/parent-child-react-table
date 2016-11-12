import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import ParentChildTable from '../imports/ParentChildTable.jsx';
import {table, table2} from '/imports/sample-table.js';


Meteor.startup(() => {
  render(
  	<ParentChildTable
  		data = {table}
  		rowDisplayName = "TableRowFormat"
  		formatType = "parentChild"
  		chKey = "child"
  		>
  		<TableRowFormat />
  		<thead>
  			<tr>
  				<th>1. </th>
  				<th>2. </th>
  				<th>3. </th>
  			</tr>
  		</thead>
  	</ParentChildTable>, 
  	document.getElementById('render-target')
  );
});

class TableRowFormat extends React.Component {
	handleClick(e, d){
		console.log(d, "<<<<<< Click Handeled")
	}
	render(){
		return (
			<tr>
				<td><input type="checkbox" onClick={(e)=>this.handleClick(e, this.props)} /></td>
				<td>
					<div>
						{this.props.level}
						<span>{this.props.c}</span>
						<div>{this.props.a}</div>
					</div>
				</td>
				<td>{this.props.b}</td>
			</tr>
		)
	}
}

TableRowFormat.displayName = "TableRowFormat";
TableRowFormat.defaultProps = {
	a: "default a",
	b: "default b",
	c: "default c",
	level: 0
}
