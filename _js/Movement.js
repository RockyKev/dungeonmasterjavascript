function goUp()
{
	var enablestep = false;
    switch (curDir)
    {     
		case  0:switch (curmap[curX][curY - 1].type)
		{
			case 0:curY--;enablestep = true;break;
			case 2:if (curmap[curX][curY -1].door.position < 1) 
			{curY--;enablestep = true;}break;
		}
		break;
        case  1:switch (curmap[curX +1][curY].type )
		{
			case 0:curX++;enablestep = true;break;
			case 2:if (curmap[curX + 1][curY].door.position < 1) 
			{curX++;enablestep = true;}break;
		}
		break;		
        case  2:switch ( curmap[curX][curY + 1].type)
		{
			case 0:curY++;enablestep = true;break;
			case 2:if (curmap[curX][curY +1 ].door.position < 1) 
			{curY++;enablestep = true;}break;
		}
		break;
		
        case  3:switch  ( curmap[curX -1][curY].type)
		{
			case 0:curX--;enablestep = true;break;
			case 2:if (curmap[curX - 1][curY].door.position < 1) 
			{curX--;enablestep = true;}break;
		}
		break;
    }
		if (enablestep)
	{doStep(curDir);}
}
function goRight()
{
	var enablestep = false;
    switch (curDir)
    {
        case  0:switch ( curmap[curX +1][curY].type)	
		{
			case 0:curX++;enablestep = true;break
			case 2:if (curmap[curX + 1][curY].door.position < 1) 
			{curX++;enablestep = true;}break;
		}
		break;
		
        case  1:switch ( curmap[curX][curY + 1].type)	
		{
			case 0:curY++;enablestep = true;break
			case 2:if (curmap[curX][curY +1 ].door.position < 1) 
			{curY++;enablestep = true;}break;
		}
		break;
		
        case  2:switch ( curmap[curX - 1][curY].type)	
		{
			case 0:curX--;enablestep = true;break
			case 2:if (curmap[curX - 1][curY].door.position < 1) 
			{curX--;enablestep = true;}break;
		}
		break;
        case  3:switch ( curmap[curX][curY - 1].type)	
		{
			case 0:curY--;enablestep = true;break
			case 2:if (curmap[curX][curY -1].door.position < 1) 
			{curY--;enablestep = true;}break;
		}
		break;
    }
	if (enablestep)
	{doStep(curDir);}
}
function goLeft()
{
	var enablestep = false;
    switch (curDir)
    {
        case  0:switch ( curmap[curX -1][curY].type)	
		{
			case 0:curX--;enablestep = true;break
			case 2:if (curmap[curX - 1][curY].door.position < 1) 
			{curX--;enablestep = true;}break;
		}
		break;
        case  1:switch ( curmap[curX][curY -+ 1].type)	
		{
			case 0:curY--;enablestep = true;break
			case 2:if (curmap[curX][curY -1].door.position < 1) 
			{curY--;enablestep = true;}break;
		}
		break;
        case  2:switch ( curmap[curX + 1][curY].type)	
		{
			case 0:curX++;enablestep = true;break
			case 2:if (curmap[curX + 1][curY].door.position < 1) 
			{curX++;enablestep = true;}break;
		}
		break;		
        case  3:switch ( curmap[curX][curY + 1].type)	
		{
			case 0:curY++;enablestep = true;break
			case 2:if (curmap[curX][curY +1 ].door.position < 1) 
			{curY++;enablestep = true;}break;
		}
		break;
    }
	if (enablestep)
	{doStep(curDir);}
}
function goDown()
{
	var enablestep = false;
    switch (curDir)
    {     
		case  0:switch (curmap[curX][curY + 1].type)
		{
			case 0:curY++;enablestep = true;break;
			case 2:if (curmap[curX][curY +1 ].door.position < 1) 
			{curY++;enablestep = true;}break;		
		}
		break;
        case  1:switch (curmap[curX -1][curY].type )
		{
			case 0:curX--;enablestep = true;break;
			case 2:if (curmap[curX - 1][curY].door.position < 1) 
			{curX--;enablestep = true;}break;
		}
		break;		
        case  2:switch ( curmap[curX][curY - 1].type)
		{
			case 0:curY--;enablestep = true;break;
			case 2:if (curmap[curX][curY -1].door.position < 1) 
			{curY--;enablestep = true;}break;
		}
		break;
		
        case  3:switch  ( curmap[curX +1][curY].type)
		{
			case 0:curX++;enablestep = true;break;
			case 2:if (curmap[curX + 1][curY].door.position < 1) 
			{curX++;enablestep = true;}break;
		}
		break;
    }
		if (enablestep)
	{doStep(curDir);}
}
function goL90(){if (curDir > 0 ) { curDir--;} else {curDir = 3;}}
function goR90(){if (curDir < 3 ) { curDir++;} else {curDir = 0;}}

function moveMe(povDir)
{
	
    switch (povDir)
    {
        case is = "u":goUp();break;
        case is = "r90":goR90();break;
        case is = "r":goRight();break;
        case is = "d":goDown();break;
        case is = "l":goLeft();break;
        case is = "l90":goL90();break;
    }
    updateCompass();
    updateMap();
	updateViewport();
	
	
}