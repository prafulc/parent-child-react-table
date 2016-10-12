import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import ParentChildTable from '../imports/ParentChildTable.jsx';

 

Meteor.startup(() => {
  render(<ParentChildTable />, document.getElementById('render-target'));
});

