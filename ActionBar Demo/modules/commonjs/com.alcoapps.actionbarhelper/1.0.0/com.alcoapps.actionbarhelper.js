/* 
* ActionBar Helper Class for Appcelerator Titanium
* Author: Ricardo Alcocer
* 
* Licensed under the MIT License (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://alco.mit-license.org/
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
module.exports = function(o){
	var actionBarHelper=function(win){
		// make it useable in classic titanium
		var isAndroid = Ti.Platform.osname === 'android';
		if (!isAndroid){
			console.log('This is an Android-only library.');
			this.works = false;
		}else if(Ti.Platform.Android.API_LEVEL <= 11){
			console.log('Needs at least API Level 11.');
			this.works = false;
		}else{
			this.win=win;
			this.activity=win.getActivity();
			this.actionBar=this.activity.actionBar;
			this.works = true;
		}
	};
	actionBarHelper.prototype.setTitle=function(title){
		if (this.works){
			this.actionBar.setTitle(title);
		}else{
			console.log('Error: this does not work');
		}
	};
	actionBarHelper.prototype.setUpAction=function(action){
		if (this.works && 'function' === typeof action){
			this.actionBar.displayHomeAsUp=true;	
			this.actionBar.onHomeIconItemSelected=action;
		}else if(this.works){
			this.actionBar.displayHomeAsUp=false;	
			this.actionBar.onHomeIconItemSelected=null;
		}else{
			console.log('Error: this does not work');
		}
	};
	actionBarHelper.prototype.setBackgroundImage=function(image){
		if (this.works){
			this.actionBar.setBackgroundImage(image);
		}else{
			console.log('Error: this does not work');
		}
	};
	actionBarHelper.prototype.setIcon=function(icon){
		if (this.works){
			this.actionBar.icon=icon;	
			this.actionBar.logo=icon;
		}else{
			console.log('Error: this does not work');
		}
	};
	actionBarHelper.prototype.hide=function(){
		if (this.works){
			this.actionBar.hide();
		}else{
			console.log('Error: this does not work');
		}
	};
	actionBarHelper.prototype.show=function(){
		if (this.works){
			this.actionBar.show();
		}else{
			console.log('Error: this does not work');
		}
	};
	actionBarHelper.prototype.reloadMenu=function(){
		if (this.works){
			this.activity.invalidateOptionsMenu();
		}else{
			console.log('Error: this does not work');
		}
	};
	
	return new actionBarHelper(o);
};