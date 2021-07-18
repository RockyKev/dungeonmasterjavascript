function dbg(_string){document.getElementById('dbug').innerHTML += '<br/>' + _string;}
function cell()
{
this.type = 0;
this.n = new Array();
this.e = new Array();
this.s = new Array();
this.w = new Array();
this.onWalkover = null;
this.door = null;
}

function cellEvent(hasrun, runonce, funct,callback)
{
this.onEvent_hasrun = hasrun;
this.onEvent_runonce = runonce;
this.myEvent = funct;
this.myCallback = callback;

}

function wallText(xstring)
{
this.objType = 'wallText';
this.text = '<div class=\'wallfrontTEXT\'>'+xstring+'</div>';	
}


function wallDecor(ximgF,ximgL,ximgR, xfunc_click)
{
		
}

var cells = new Array 
(
"00000000000000000000000000000000000",
"01111111101111101110000100111101100",
"02001001001000111111110111100101100",
"01100001011110001110010110001110000",
"00101111011010110000010101110011000",
"00111000011110111111110101011110000",
"01101111111111101111001101000000000",
"01001000011110110111111001100000100",
"01111011100101110111111000101111100",
"01001010100101111111110111101010100",
"00111010101101110111111100001010100",
"00400010001011010010000111111010100",
"01111110101011111010101000100010000",
"01000000111010000000101110111011000",
"01111111100010000111111011001000000",
"00100000000110110111110001101111100",
"00111111111100100111110100100010100",
"00011100000001100111110111111110100",
"00000001111001000111110000111110100",
"01111111001001010001000100000000000",
"01111111011001011111111100001111000",
"01011111010111000001000001111111100",
"01110000110111011101111111111100100",
"00100000100100010111010000000000100",
"00111011110111110000000000101111100",
"00001011110000000000111011101010000",
"00001000111110111000101010111011000",
"00001001011011101111101010000000000",
"00001001001101000100001011111111000",
"00001001001101110100011100100001000",
"00001001110001110000011111111111000",
"00011110010001011000011100000000000",
"00011011110000011000000000000000000",
"00000000000000000000000000000000000",
"00000000000000000000000000000000000");
var mwidth = cells[0].length;
var mheight = cells.length;

var curmap = new Array();
	

for (var xi = 0; xi < mwidth; xi++)
{
	for (var yi = 0; yi < mheight; yi++)
	{
	curmap[xi] =  new Array();
	}
}



	for (var x = 0; x < mwidth; x++)
	{
		for ( var y = 0; y< mheight; y++)
		{
		
		curmap[x][y] = new cell();
		switch (cells[y].charAt(x))
		{
			case is = '0':
				curmap[x][y].type = 1;
			break;
			case is = '1' :
				curmap[x][y].type = 0;
			break;
			case is = '2':
				curmap[x][y].type = 2;
			break;
		}
		}


	}
	curmap[1][4].n.push(new wallText('Go Left to Switch the lights<br/><img src=\'_Level1GFX/TurnLeft.png\'/>'));
	curmap[5][5].w.push(new wallText('Doors with distance<br/> and a <span style="color:black;text-decoration:underline">scary face</span>'));
	curmap[2][7].n.push(new wallText('And there was light/dark'));
	curmap[2][2].n.push(new wallText('Walk right to open the door a jar' ));	
	
   curmap[2][3].onWalkover = (new cellEvent(false,false,function(data){tmpLightswitch();}));
	curmap[2][4].onWalkover = (new cellEvent(false,false,function(data){tmpLightswitch();}));
		curmap[2][6].onWalkover = (new cellEvent(false,false,function(data){tmpLightswitch();}));
	curmap[1][1].onWalkover = (new cellEvent(false,false,function(data){curmap[1][2].door.manualposition(1,2,80);}));
		var moodoor = new door(0,166,false,null);
		moodoor.innerGraphic = 'doorinner_drow.png';moodoor.innerGraphic2 = 'doorinner_drow2.png';
	curmap[18][11].door = moodoor;  curmap[18][11].type = 2
	
		/*	var moodoor2 = new door(0,166,false,null);
		moodoor2.innerGraphic = 'doorinner_thatcher.png';
	curmap[3][8].door = moodoor2;  curmap[3][8].type = 2
//urmap[3][8].door =  new door(0,166,false,null)*/
	
	var entrancedoor = new door(0,166,false,null);entrancedoor.innerGraphic = 'doorinner_drow.png';entrancedoor.innerGraphic2 = 'doorinner_drow.png';
	curmap[1][2].door =  entrancedoor;
	
	var scarydoor = new door(0,166,false,null);curmap[3][5].type = 2
	scarydoor.innerGraphic = 'doorinner_thatcher.png';scarydoor.innerGraphic2 = 'doorinner_thatcher2.png'; 
	curmap[3][5].door = scarydoor;
	
	var scarydoor = new door(0,166,false,null);curmap[6][6].type = 2
	scarydoor.innerGraphic = 'doorinner_thatcher.png';scarydoor.innerGraphic2 = 'doorinner_thatcher2.png'; 
	curmap[6][6].door = scarydoor;
	
	curmap[13][6].door = new door(0,166,false,null);curmap[13][6].type = 2 

