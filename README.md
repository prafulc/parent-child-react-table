# Parent Child Table in react

This module provides `<ParentChildTable>` directive and list the output in table like:
```
|- Parent 1
|-- Child 1
|-- Child 2
|---- Child 21
|- Parent 2
|- Parent 3
```

This table will show child just below its parent. 
## How to use:
```
<ParentChildTable { ... } >
	<TableBodyComponent />
</ParentChildTable>
```
Where `<TableBodyComponent />` will be table body defined by you. Within `<ParentChildTable />` component you can also define `<thead></thead>` and `<tfoot></tfoot>`.

Table accepts data in two ways

## Data with Parent ID and parent key in it
ex: 
```
[
	{ id: 1, text: 'One' },
	{ id: 2, text: 'Two' },
	{ id: 3, text: 'Three', parent: 1 },
]
```
For this type of data you have to use
```
<ParentChildTable
	data = {table}
	rowDisplayName = "TableRowFormat"
	formatType = "parentId"
	idKey = "id"
	parentKey = "parent"
	>
	<TableRowFormat />
	<thead>
		<tr>
			<th>1. </th>
			<th>2. </th>
			<th>3. </th>
		</tr>
	</thead>
</ParentChildTable>
```
Where 
- data will be array of JSON
- rowDisplayName will be the name of component you want to use for displaying table body
- formatType will always be "parentId" for such kind of data
- idKey is the main key of object. One can use this as "_id" for data provided by mongodb
- parentKey is the key where you have defined the parent of an object
- mainParentValue is a value of first node from parentKey. You can skip it if you dont have any parentKey in parent node.

## Data with Child within Parent
ex: 
```
[
	{ id: 1, text: 'One', childs: [{ id: 3, text: 'Three', parent: 1 }] },
	{ id: 2, text: 'Two' },
]
```
for this type of data you have to use
```
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
</ParentChildTable>
```
Where 
- data will be array of JSON
- rowDisplayName will be the name of component you want to use for displaying table body
- formatType will always be "parentChild" for such data
- chKey will be the key under which you have your child documents. In above ex chKey will be "childs".


# Basic Example:
Here is the table body component with name `TableRowFormat`. Note that displayName must be present there for this component.
```
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
						<em>{this.props.level} - <span>{this.props.c}</span></em>
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
```

Now for type one data ie data with parent id in it, we have used
```
<ParentChildTable
	data = {table2}
	rowDisplayName = "TableRowFormat"
	formatType = "parentId"
	idKey = "id"
	parentKey = "parent"
	mainParentValue = {undefined}
	>
	<TableRowFormat />
	<thead>
		<tr>
			<th>1. </th>
			<th>2. </th>
			<th>3. </th>
		</tr>
	</thead>
</ParentChildTable>
```

and for type two data ie data with childrens in parent in it
```
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
</ParentChildTable>
```

Finally data we have used
```
export var table = [
  {
    id: 1,
    a: "a1",
    b: "b1",
    c: "c1",
    child: [
      {
        id: 1,
        a: "a11",
        b: "b11",
        c: "c11",
        child: [
          {
            id: 1,
            a: "a111",
            b: "b111",
            c: "c111"
          }
        ]
      }, {
        id: 1,
        a: "a12",
        b: "b12",
        c: "c12",
      }, {
        id: 1,
        a: "a13",
        b: "b13",
        c: "c13",
      }
    ]
  }, {
    id: 2,
    a: "a2",
    b: "b2",
    c: "c2",
    child: [
      {
        id: 2,
        a: "a21",
        b: "b21",
        c: "c21",
      }, {
        id: 1,
        a: "a22",
        b: "b22",
        c: "c22",
      }, {
        id: 1,
        a: "a23",
        b: "b23",
        c: "c23",
      }
    ]
  }, {
    id: 3,
    a: "a3",
    b: "b3",
    c: "c3",
    child: [
      {
        id: 3,
        a: "a31",
        b: "b31",
        c: "c31",
        child: [
          {
            id: 3,
            a: "a311",
            b: "b311",
            c: "c311",
            child: [
              {
                id: 3,
                a: "a3111",
                b: "b3111",
                c: "c3111"
              }
            ]
          }
        ]
      }, {
        id: 1,
        a: "a32",
        b: "b32",
        c: "c32",
      }, {
        id: 1,
        a: "a33",
        b: "b33",
        c: "c33",
      }
    ]
  }
]


export var table2 = [
  {
    id: 1,
    a: "a1",
    b: "b1",
    c: "c1",
  }, {
    id: 2,
    a: "a2",
    b: "b2",
    c: "c2",
  }, {
    id: 3,
    a: "a3",
    b: "b3",
    c: "c3",
  }, {
    id: 4,
    a: "a21",
    b: "b21",
    c: "c21",
    parent: 2
  }, {
    id: 5,
    a: "a31",
    b: "b31",
    c: "c31",
    parent: 3
  }, {
    id: 6,
    a: "a11",
    b: "b11",
    c: "c11",
    parent: 1
  }, {
    id: 7,
    a: "a111",
    b: "b111",
    c: "c111",
    parent: 6
  }, {
    id: 8,
    a: "a22",
    b: "b22",
    c: "c22",
    parent: 2
  }, {
    id: 9,
    a: "a23",
    b: "b23",
    c: "c23",
    parent: 2
  }, {
    id: 10,
    a: "a12",
    b: "b12",
    c: "c12",
    parent: 1
  }, {
    id: 11,
    a: "a13",
    b: "b13",
    c: "c13",
    parent: 1
  }, {
    id: 12,
    a: "a311",
    b: "b311",
    c: "c311",
    parent: 5
  }, {
    id: 13,
    a: "a3111",
    b: "b3111",
    c: "c3111",
    parent: 12
  }, {
    id: 14,
    a: "a32",
    b: "b32",
    c: "c32",
    parent: 3
  }, {
    id: 15,
    a: "a33",
    b: "b33",
    c: "c33",
    parent: 3
  }
]
```

:construction: Currently pagination show all pages, need to restrict pages count to show.