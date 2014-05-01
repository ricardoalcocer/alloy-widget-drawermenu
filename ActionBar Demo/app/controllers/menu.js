var args = arguments[0] || {};

function menuclick(e){
	var rowId=e.rowData.rowId;
	
	switch (rowId){
		case "1":
			Alloy.CFG.main.backgroundColor="#BF7070";
			break;
		case "2":
			Alloy.CFG.main.backgroundColor="#3C3F93";
			break;
		case "3":
			Alloy.CFG.main.backgroundColor="#2159B2";
			break;
		case "4":
			Alloy.CFG.main.backgroundColor="#D88922";
			break;
	}
	
	Alloy.CFG.drawermenu.showhidemenu();
}