/**
 *   M-RPG Maker source file InfoDialog,
 *   Copyright (C) 2016 James M Adams
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Lesser General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Lesser General Public License for more details.
 *
 *   You should have received a copy of the GNU Lesser General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

function InfoDialog(url){

//data
this.url;
this.title;

//constructor
this._constructor = function(){
	this.url=url;

	this._resolveTemplate();
}

/**
 *
 */
this._resolveTemplate=function(){
	$.get('html/'+this.url+'.html',$.proxy(function(data){
		var dialog =$(data.trim()).insertBefore('.page');
		this._setupForm(dialog);
	},this));
}

/**
 *
 */
this._setupForm=function(dialog){
	this._setupHandle(dialog);
	this._offsetDialogs();
}

/**
 *
 */
this._setupHandle=function(dialog){
		dialog.draggable({handle:'.handle',stop:function(event,ui){
			//console.log('moved dialog');
			$(this).addClass('moved');
		}});
		dialog.find('.key').text(this.key);
}

/**
 *
 */
this._offsetDialogs=function(){
	$('.dialog').each(function(index,item){
		if($(item).hasClass('moved')==false){
			var top = 150+(index*10);
			var left = 200+(index*10);
			$(item).css('left',left+'px');
			$(item).css('top',top+'px');
		}
	});
};


//main
	this._constructor();

}
