var args = arguments[0] || {};

var rows=[];

for (i=0;i<=10;i++){
	var row=Ti.UI.createTableViewRow({
		height: 30,
		rowId: i
	});
	row.add(Ti.UI.createLabel({
		text:'Option ' + i,
		width: Ti.UI.FILL
	}))
	rows.push(row);
}

$.menu.data=rows;