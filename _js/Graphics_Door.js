function updateDoor(){

    clear_door();
    switch (curDir) {
        case 0:
            door0();
            break;
        case 1:
            door1();
            break;
        case 2:
            door2();
            break;
            
        case 3:
            door3();
            break;
            
    }
}

function door0(){
    //Front side
    //front _*_	
    try {
        switch (curmap[curX][curY - 1].type) {
            case 2:
                if (curmap[curX][curY - 1].door.innerGraphic != null) {
                    $('.doorFront1_inner').css('background-image', 'url(\'' + curmap[curX][curY - 1].door.innerGraphic + '\')');
                }
                else {
                    $('.doorFront1_inner').css('background-image', 'url(\'doorinner_default.png\'');
                }
                disblock('.doorFront1');
                disblock('.doorFront1_inner');
                disblock('.doorFront1_button');
                $('.doorFront1_inner').css('height', curmap[curX][curY - 1].door.position + 'px');
                $('.doorFront1_button').click(function(){
                    curmap[curX][curY - 1].door.openclose(curX, curY - 1);
                });
                break;
            default:
                hideblock('.doorFront1');
                hideblock('.doorFront1_inner');
                hideblock('.doorFront1_button');
                clearevents('.doorFront1_button');
        }
    } 
    catch (err) {
        dbg(err);
    }
    
    try {
        switch (curmap[curX][curY - 2].type) {
            case 2:
                if (curmap[curX][curY - 2].door.innerGraphic2 != null) {
                    $('.doorFront2_inner').css('background-image', 'url(\'' + curmap[curX][curY - 2].door.innerGraphic2 + '\')');
                }
                else {
                    $('.doorFront2_inner').css('background-image', 'url(\'doorinner_default2.png\'');
                }
                disblock('.doorFront2');
                disblock('.doorFront2_inner');
                $('.doorFront2_inner').css('height', (curmap[curX][curY - 2].door.position * 0.67) + 'px');
                
                
                break;
            default:
                hideblock('.doorFront2');
                hideblock('.doorFront2_inner');
                
        }
    } 
    catch (err) {
    }
    
    //front __*	
    try {
        switch (curmap[curX + 1][curY - 1].type) {
            case 2:
                if (curmap[curX + 1][curY - 1].door.innerGraphic != null) {
                    $('.doorSide1_2_inner').css('background-image', 'url(\'' + curmap[curX + 1][curY - 1].door.innerGraphic + '\')');
                }
                else {
                    $('.doorSide1_2_inner').css('background-image', 'url(\'doorinner_default.png\'');
                }
                disblock('.doorSide1_2');
                disblock('.doorSide1_2_inner');
                $('.doorSide1_2_inner').css('height', curmap[curX + 1][curY - 1].door.position + 'px');
                break;
            default:
                hideblock('.doorSide1_2');
                hideblock('.doorSide1_2_inner');
                ;        }
        
    } 
    catch (err) {
    }
    
    try {
        switch (curmap[curX + 1][curY - 2].type) {
            case 2:
                if (curmap[curX + 1][curY - 2].door.innerGraphic != null) {
                    $('.doorSide2_2_inner').css('background-image', 'url(\'' + curmap[curX + 1][curY - 2].door.innerGraphic2 + '\')');
                }
                else {
                    $('.doorSide2_2_inner').css('background-image', 'url(\'doorinner_default2.png\'');
                }
                disblock('.doorSide2_2');
                disblock('.doorSide2_2_inner');
                $('.doorSide2_2_inner').css('height', (curmap[curX + 1][curY - 2].door.position * 0.67) + 'px');
                
                
                break;
            default:
                hideblock('.doorSide2_2');
                hideblock('.doorSide2_2_inner');
        }
        
    } 
    catch (err) {
    }
    
    //front *__	
    try {
        switch (curmap[curX - 1][curY - 1].type) {
            case 2:
                if (curmap[curX - 1][curY - 1].door.innerGraphic != null) {
                    $('.doorSide1_1_inner').css('background-image', 'url(\'' + curmap[curX - 1][curY - 1].door.innerGraphic + '\')');
                }
                else {
                    $('.doorSide1_1_inner').css('background-image', 'url(\'doorinner_default.png\'');
                }
                disblock('.doorSide1_1');
                disblock('.doorSide1_1_inner');
                $('.doorSide1_1_inner').css('height', curmap[curX - 1][curY - 1].door.position + 'px');
                break;
            default:
                hideblock('.doorSide1_1');
                hideblock('.doorSide1_1_inner');
        }
        
    } 
    catch (err) {
    }
    
    try {
        switch (curmap[curX - 1][curY - 2].type) {
            case 2:
                if (curmap[curX - 1][curY - 2].door.innerGraphic != null) {
                    $('.doorSide2_1_inner').css('background-image', 'url(\'' + curmap[curX - 1][curY - 2].door.innerGraphic2 + '\')');
                    
                }
                else {
                    $('.doorSide2_1_inner').css('background-image', 'url(\'doorinner_default2.png\'');
                }
                disblock('.doorSide2_1');
                disblock('.doorSide2_1_inner');
                $('.doorSide2_1_inner').css('height', (curmap[curX - 1][curY - 2].door.position * 0.67) + 'px');
                
                
                break;
            default:
                hideblock('.doorSide2_1');
                hideblock('.doorSide2_1_inner');
        }
        
    } 
    catch (err) {
    }
}

function door1(){
    //Front _*_
    try {
        switch (curmap[curX + 1][curY].type) {
            case 2:
                if (curmap[curX + 1][curY].door.innerGraphic != null) {
                    $('.doorFront1_inner').css('background-image', 'url(\'' + curmap[curX + 1][curY].door.innerGraphic + '\')');
                }
                else {
                    $('.doorFront1_inner').css('background-image', 'url(\'doorinner_default.png\'');
                }
                disblock('.doorFront1');
                disblock('.doorFront1_inner');
                disblock('.doorFront1_button');
                $('.doorFront1_inner').css('height', curmap[curX + 1][curY].door.position + 'px');
                $('.doorFront1_button').click(function(){
                    curmap[curX + 1][curY].door.openclose(curX + 1, curY);
                });
                
                break;
            default:
                hideblock('.doorFront1');
                hideblock('.doorFront1_inner');
                hideblock('.doorFront1_button');
                clearevents('.doorFront1_button');
        }
    } 
    catch (err) {
    }
    
    try {
        switch (curmap[curX + 2][curY].type) {
            case 2:
                if (curmap[curX + 2][curY].door.innerGraphic2 != null) {
                    $('.doorFront2_inner').css('background-image', 'url(\'' + curmap[curX + 2][curY].door.innerGraphic2 + '\')');
                }
                else {
                    $('.doorFront2_inner').css('background-image', 'url(\'doorinner_default2.png\'');
                }
                disblock('.doorFront2');
                disblock('.doorFront2_inner');
                $('.doorFront2_inner').css('height', (curmap[curX + 2][curY].door.position * 0.67) + 'px');
                
                
                break;
            default:
                hideblock('.doorFront2');
                hideblock('.doorFront2_inner');
                
        }
    } 
    catch (err) {
    }
    //front __*	
    try {
        switch (curmap[curX + 1][curY + 1].type) {
            case 2:
                if (curmap[curX + 1][curY + 1].door.innerGraphic != null) {
                    $('.doorSide1_2_inner').css('background-image', 'url(\'' + curmap[curX + 1][curY + 1].door.innerGraphic + '\')');
                }
                else {
                    $('.doorSide1_2_inner').css('background-image', 'url(\'doorinner_default.png\'');
                }
                disblock('.doorSide1_2');
                disblock('.doorSide1_2_inner');
                $('.doorSide1_2_inner').css('height', curmap[curX + 1][curY + 1].door.position + 'px');
                
                
                break;
            default:
                hideblock('.doorSide1_2');
                hideblock('.doorSide1_2_inner');
                ;        }
        
    } 
    catch (err) {
        dbg(err);
    }
	
	    try {
        switch (curmap[curX + 2][curY + 1].type) {
            case 2:
                if (curmap[curX + 2][curY + 1].door.innerGraphic != null) {
                    $('.doorSide2_2_inner').css('background-image', 'url(\'' + curmap[curX + 2][curY + 1].door.innerGraphic2 + '\')');
                }
                else {
                    $('.doorSide2_2_inner').css('background-image', 'url(\'doorinner_default2.png\'');
                }
                disblock('.doorSide2_2');
                disblock('.doorSide2_2_inner');
                $('.doorSide2_2_inner').css('height', (curmap[curX + 2][curY + 1].door.position * 0.67) + 'px');
                
                
                break;
            default:
                hideblock('.doorSide2_2');
                hideblock('.doorSide2_2_inner');
        }
        
    } 
    catch (err) {dgb(err);
    }
    
    //front *__	
    try {
        switch (curmap[curX + 1][curY - 1].type) {
            case 2:
                if (curmap[curX + 1][curY - 1].door.innerGraphic != null) {
                    $('.doorSide1_1_inner').css('background-image', 'url(\'' + curmap[curX + 1][curY - 1].door.innerGraphic + '\')');
                }
                else {
                    $('.doorSide1_1_inner').css('background-image', 'url(\'doorinner_default.png\'');
                }
                disblock('.doorSide1_1');
                disblock('.doorSide1_1_inner');
                $('.doorSide1_1_inner').css('height', curmap[curX + 1][curY - 1].door.position + 'px');
                
                
                break;
            default:
                hideblock('.doorSide1_1');
                hideblock('.doorSide1_1_inner');
                ;        }
        
    } 
    catch (err) {
    }
	
		
	    try {
        switch (curmap[curX + 2][curY - 1].type) {
            case 2:
                if (curmap[curX + 2][curY - 1].door.innerGraphic != null) {
                    $('.doorSide2_1_inner').css('background-image', 'url(\'' + curmap[curX + 2][curY - 1].door.innerGraphic2 + '\')');
                }
                else {
                    $('.doorSide2_1_inner').css('background-image', 'url(\'doorinner_default2.png\'');
                }
                disblock('.doorSide2_1');
                disblock('.doorSide2_1_inner');
                $('.doorSide2_1_inner').css('height', (curmap[curX + 2][curY - 1].door.position * 0.67) + 'px');
                
                
                break;
            default:
                hideblock('.doorSide2_1');
                hideblock('.doorSide2_1_inner');
        }
        
    } 
    catch (err) {dgb(err);
    }
	
    //End of front side

}

function door2(){
    //Front side
    //front _*_	
    try {
        switch (curmap[curX][curY + 1].type) {
            case 2:
                if (curmap[curX][curY + 1].door.innerGraphic != null) {
                    $('.doorFront1_inner').css('background-image', 'url(\'' + curmap[curX][curY + 1].door.innerGraphic + '\')');
                }
                else {
                    $('.doorFront1_inner').css('background-image', 'url(\'doorinner_default.png\'');
                }
                disblock('.doorFront1');
                disblock('.doorFront1_inner');
                disblock('.doorFront1_button');
                $('.doorFront1_inner').css('height', curmap[curX][curY + 1].door.position + 'px');
                $('.doorFront1_button').click(function(){
                    curmap[curX][curY + 1].door.openclose(curX, curY + 1);
                });
                break;
            default:
                hideblock('.doorFront1');
                hideblock('.doorFront1_inner');
                hideblock('.doorFront1_button');
                clearevents('.doorFront1_button');
        }
    } 
    catch (err) {
        dbg(err);
    }
    
    try {
        switch (curmap[curX][curY + 2].type) {
            case 2:
                if (curmap[curX][curY + 2].door.innerGraphic2 != null) {
                    $('.doorFront2_inner').css('background-image', 'url(\'' + curmap[curX][curY + 2].door.innerGraphic2 + '\')');
                }
                else {
                    $('.doorFront2_inner').css('background-image', 'url(\'doorinner_default2.png\'');
                }
                disblock('.doorFront2');
                disblock('.doorFront2_inner');
                $('.doorFront2_inner').css('height', (curmap[curX][curY + 2].door.position * 0.67) + 'px');
                
                
                break;
            default:
                hideblock('.doorFront2');
                hideblock('.doorFront2_inner');
                
        }
    } 
    catch (err) {
    }
    
    //front __*	
    try {
        switch (curmap[curX - 1][curY + 1].type) {
            case 2:
                if (curmap[curX - 1][curY + 1].door.innerGraphic != null) {
                    $('.doorSide1_2_inner').css('background-image', 'url(\'' + curmap[curX - 1][curY + 1].door.innerGraphic + '\')');
                }
                else {
                    $('.doorSide1_2_inner').css('background-image', 'url(\'doorinner_default.png\'');
                }
                disblock('.doorSide1_2');
                disblock('.doorSide1_2_inner');
                $('.doorSide1_2_inner').css('height', curmap[curX - 1][curY + 1].door.position + 'px');
                break;
            default:
                hideblock('.doorSide1_2');
                hideblock('.doorSide1_2_inner');
                ;        }
        
    } 
    catch (err) {
    }
    
    try {
        switch (curmap[curX - 1][curY + 2].type) {
            case 2:
                if (curmap[curX - 1][curY + 2].door.innerGraphic != null) {
                    $('.doorSide2_2_inner').css('background-image', 'url(\'' + curmap[curX - 1][curY + 2].door.innerGraphic2 + '\')');
                }
                else {
                    $('.doorSide2_2_inner').css('background-image', 'url(\'doorinner_default2.png\'');
                }
                disblock('.doorSide2_2');
                disblock('.doorSide2_2_inner');
                $('.doorSide2_2_inner').css('height', (curmap[curX - 1][curY + 2].door.position * 0.67) + 'px');
                
                
                break;
            default:
                hideblock('.doorSide2_2');
                hideblock('.doorSide2_2_inner');
        }
        
    } 
    catch (err) {
    }
    
    //front *__	
    try {
        switch (curmap[curX + 1][curY + 1].type) {
            case 2:
                if (curmap[curX + 1][curY + 1].door.innerGraphic != null) {
                    $('.doorSide1_1_inner').css('background-image', 'url(\'' + curmap[curX + 1][curY + 1].door.innerGraphic + '\')');
                }
                else {
                    $('.doorSide1_1_inner').css('background-image', 'url(\'doorinner_default.png\'');
                }
                disblock('.doorSide1_1');
                disblock('.doorSide1_1_inner');
                $('.doorSide1_1_inner').css('height', curmap[curX + 1][curY + 1].door.position + 'px');
                break;
            default:
                hideblock('.doorSide1_1');
                hideblock('.doorSide1_1_inner');
        }
        
    } 
    catch (err) {
    }
    
    try {
        switch (curmap[curX + 1][curY + 2].type) {
            case 2:
                if (curmap[curX + 1][curY + 2].door.innerGraphic != null) {
                    $('.doorSide2_1_inner').css('background-image', 'url(\'' + curmap[curX + 1][curY + 2].door.innerGraphic2 + '\')');
                    
                }
                else {
                    $('.doorSide2_1_inner').css('background-image', 'url(\'doorinner_default2.png\'');
                }
                disblock('.doorSide2_1');
                disblock('.doorSide2_1_inner');
                $('.doorSide2_1_inner').css('height', (curmap[curX + 1][curY + 2].door.position * 0.67) + 'px');
                
                
                break;
            default:
                hideblock('.doorSide2_1');
                hideblock('.doorSide2_1_inner');
        }
        
    } 
    catch (err) {
    }
}

function door3(){
    //Front _*_
    try {
        switch (curmap[curX - 1][curY].type) {
            case 2:
                if (curmap[curX - 1][curY].door.innerGraphic != null) {
                    $('.doorFront1_inner').css('background-image', 'url(\'' + curmap[curX - 1][curY].door.innerGraphic + '\')');
                }
                else {
                    $('.doorFront1_inner').css('background-image', 'url(\'doorinner_default.png\'');
                }
                disblock('.doorFront1');
                disblock('.doorFront1_inner');
                disblock('.doorFront1_button');
                $('.doorFront1_inner').css('height', curmap[curX - 1][curY].door.position + 'px');
                $('.doorFront1_button').click(function(){
                    curmap[curX - 1][curY].door.openclose(curX - 1, curY);
                });
                
                break;
            default:
                hideblock('.doorFront1');
                hideblock('.doorFront1_inner');
                hideblock('.doorFront1_button');
                clearevents('.doorFront1_button');
        }
    } 
    catch (err) {
    }
    
    try {
        switch (curmap[curX - 2][curY].type) {
            case 2:
                if (curmap[curX - 2][curY].door.innerGraphic2 != null) {
                    $('.doorFront2_inner').css('background-image', 'url(\'' + curmap[curX - 2][curY].door.innerGraphic2 + '\')');
                }
                else {
                    $('.doorFront2_inner').css('background-image', 'url(\'doorinner_default2.png\'');
                }
                disblock('.doorFront2');
                disblock('.doorFront2_inner');
                $('.doorFront2_inner').css('height', (curmap[curX - 2][curY].door.position * 0.67) + 'px');
                
                
                break;
            default:
                hideblock('.doorFront2');
                hideblock('.doorFront2_inner');
                
        }
    } 
    catch (err) {
    }
    //front __*	
    try {
        switch (curmap[curX - 1][curY - 1].type) {
            case 2:
                if (curmap[curX - 1][curY - 1].door.innerGraphic != null) {
                    $('.doorSide1_2_inner').css('background-image', 'url(\'' + curmap[curX - 1][curY - 1].door.innerGraphic + '\')');
                }
                else {
                    $('.doorSide1_2_inner').css('background-image', 'url(\'doorinner_default.png\'');
                }
                disblock('.doorSide1_2');
                disblock('.doorSide1_2_inner');
                $('.doorSide1_2_inner').css('height', curmap[curX - 1][curY - 1].door.position + 'px');
                
                
                break;
            default:
                hideblock('.doorSide1_2');
                hideblock('.doorSide1_2_inner');
                ;        }
        
    } 
    catch (err) {
        dbg(err);
    }
	
	    try {
        switch (curmap[curX - 2][curY - 1].type) {
            case 2:
                if (curmap[curX - 2][curY - 1].door.innerGraphic != null) {
                    $('.doorSide2_2_inner').css('background-image', 'url(\'' + curmap[curX - 2][curY - 1].door.innerGraphic2 + '\')');
                }
                else {
                    $('.doorSide2_2_inner').css('background-image', 'url(\'doorinner_default2.png\'');
                }
                disblock('.doorSide2_2');
                disblock('.doorSide2_2_inner');
                $('.doorSide2_2_inner').css('height', (curmap[curX - 2][curY - 1].door.position * 0.67) + 'px');
                
                
                break;
            default:
                hideblock('.doorSide2_2');
                hideblock('.doorSide2_2_inner');
        }
        
    } 
    catch (err) {dgb(err);
    }
    
    //front *__	
    try {
        switch (curmap[curX - 1][curY + 1].type) {
            case 2:
                if (curmap[curX - 1][curY + 1].door.innerGraphic != null) {
                    $('.doorSide1_1_inner').css('background-image', 'url(\'' + curmap[curX - 1][curY + 1].door.innerGraphic + '\')');
                }
                else {
                    $('.doorSide1_1_inner').css('background-image', 'url(\'doorinner_default.png\'');
                }
                disblock('.doorSide1_1');
                disblock('.doorSide1_1_inner');
                $('.doorSide1_1_inner').css('height', curmap[curX - 1][curY + 1].door.position + 'px');
                
                
                break;
            default:
                hideblock('.doorSide1_1');
                hideblock('.doorSide1_1_inner');
                ;        }
        
    } 
    catch (err) {
    }
	
		
	    try {
        switch (curmap[curX - 2][curY + 1].type) {
            case 2:
                if (curmap[curX - 2][curY + 1].door.innerGraphic != null) {
                    $('.doorSide2_1_inner').css('background-image', 'url(\'' + curmap[curX - 2][curY + 1].door.innerGraphic2 + '\')');
                }
                else {
                    $('.doorSide2_1_inner').css('background-image', 'url(\'doorinner_default2.png\'');
                }
                disblock('.doorSide2_1');
                disblock('.doorSide2_1_inner');
                $('.doorSide2_1_inner').css('height', (curmap[curX - 2][curY + 1].door.position * 0.67) + 'px');
                
                
                break;
            default:
                hideblock('.doorSide2_1');
                hideblock('.doorSide2_1_inner');
        }
        
    } 
    catch (err) {dgb(err);
    }
	
    //End of front side

}


function clear_door(){
    $('div[class*=door]').css('display', 'none');
    clearevents('.doorFront1_button');
    
    
}
