function door(xnsew,xposition,xislocked,xref_useskey)
{
	this.dir = xnsew;
	this.position = 166;
	this.doortimer = null;
	this.islocked = xislocked;
	this.unlockswith = null;
	this.innerGraphic = null;
	this.innerGraphic2 = null;
}

	door.prototype.opendoor = function(x,y)
	{
		{

			try {
				clearInterval(curmap[x][y].door.doortimer)
			} 
			catch (ex) {
				dbg(ex);
			}
			if (curmap[x][y].door.position > 0) {
			
				curmap[x][y].door.doortimer = setInterval(function(){
					curmap[x][y].door.position = curmap[x][y].door.position - 30;
					updateDoor();
					dbg(curmap[x][y].door.position.toString());
					if (curmap[x][y].door.position - 30 < 0) {
					
						curmap[x][y].door.position = 0;
						updateDoor();
						
						clearInterval(curmap[x][y].door.doortimer);
						curmap[x][y].door.doortimer = null;
					}
					
					
				}, 150)
				
			}
			
		}
	}
	
door.prototype.closedoor = function(x,y)
	{

		try {clearInterval(curmap[x][y].door.doortimer)}catch (ex){}
		if (curmap[x][y].door.position != 166)
		{
	
			curmap[x][y].door.doortimer = setInterval(function()
			{
				curmap[x][y].door.position = curmap[x][y].door.position + 30;
				updateDoor();
				dbg(curmap[x][y].door.position.toString());
				if (curmap[x][y].door.position +30 > 166  )
				{
					
					curmap[x][y].door.position = 166 ;
					updateDoor();
					clearInterval(curmap[x][y].door.doortimer);
					curmap[x][y].door.doortimer = null;
				}
				
				
				},150)
			
		}

			
	}
	
door.prototype.openclose = function (x,y)
	{
		if (curmap[x][y].door.position > 0)
		{
			curmap[x][y].door.opendoor(x,y);
		}
		else {curmap[x][y].door.closedoor(x,y);}
		
	}
	
	door.prototype.manualposition = function(x,y,pos)
	{
		{

			try {
				clearInterval(curmap[x][y].door.doortimer)
			} 
			catch (ex) {
				dbg(ex);
			}
			if (curmap[x][y].door.position > pos) {
			
				curmap[x][y].door.doortimer = setInterval(function(){
					curmap[x][y].door.position = curmap[x][y].door.position - 30;
					updateDoor();
					dbg(curmap[x][y].door.position.toString());
					if (curmap[x][y].door.position - 30 < pos) {
					
						curmap[x][y].door.position = pos;
						updateDoor();
						clearInterval(curmap[x][y].door.doortimer);
						curmap[x][y].door.doortimer = null;
					}
					
					
				}, 150)
				
			}
			
			if (curmap[x][y].door.position < pos) {
			
				curmap[x][y].door.doortimer = setInterval(function(){
					curmap[x][y].door.position = curmap[x][y].door.position + 30;
					updateDoor();
					dbg(curmap[x][y].door.position.toString());
					if (curmap[x][y].door.position + 30 > pos) {
					
						curmap[x][y].door.position = pos;
						updateDoor();
						clearInterval(curmap[x][y].door.doortimer);
						curmap[x][y].door.doortimer = null;
					}
					
					
				}, 150)
				
			}
			
		}
	}