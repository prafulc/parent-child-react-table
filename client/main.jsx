import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import ParentChildTable from '../imports/ParentChildTable.jsx';
import {table} from '/imports/sample-table.js';


Meteor.startup(() => {
  render(
  	<ParentChildTable
  		data = {table}
  		indentParams = {['a', 'b']}
  		>
  		<thead>
  			<tr>
	  			<th>1</th>
	  			<th>2</th>
	  			<th>3</th>
	  		</tr>
  		</thead>
  		<tfoot>
  			<tr>
	  			<th>1</th>
	  			<th>2</th>
	  			<th>3</th>
	  		</tr>
  		</tfoot>
  	</ParentChildTable>, 
  	document.getElementById('render-target')
  );
});

