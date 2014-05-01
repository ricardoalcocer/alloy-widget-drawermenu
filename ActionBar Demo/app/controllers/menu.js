var args = arguments[0] || {};

function menuclick(e){
	console.log(e.rowData.rowId);
	Alloy.CFG.drawermenu.showhidemenu();
}