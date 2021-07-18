


function updateMap(){
    var outstring = '';
    for (var y = 0; y < curmap[0].length; y++) {
        for (var x = 0; x < curmap.length; x++) {
            if (x == curX && y == curY) {
                outstring += 'N';
            }
            else {
                switch (curmap[x][y].type) {
                    case 0:
                        outstring += '()';
                        break;
                    case 1:
                        outstring += '[]';
                        break;
                        
                }
                
            }
        }
        outstring += '<br/>';
        
    }
    
    $('#outer').html(outstring);
}

function updateViewport(){
    switch (curDir) {
        case 0:
            try {
                if (curmap[curX - 1][curY].type == 1) {
                    disblock('.wallLside0');
                }
                else {
                    hideblock('.wallLside0')
                }
            } 
            catch (err) {
                disblock('.wallLside0');
            }
            
            try {
                if (curmap[curX + 1][curY].type == 1) {
                    disblock('.wallRside0');
                }
                else {
                    hideblock('.wallRside0')
                }
            } 
            catch (err) {
                disblock('.wallRside0');
            }
            
            try {
                if (curmap[curX - 1][curY - 1].type == 1) {
                    disblock('.wallLside1');
                }
                else {
                    hideblock('.wallLside1')
                }
            } 
            catch (err) {
                disblock('.wallLside1');
            }
            
            try {
                if (curmap[curX + 1][curY - 1].type == 1) {
                    disblock('.wallRside1');
                }
                else {
                    hideblock('.wallRside1')
                }
            } 
            catch (err) {
                disblock('.wallRside1');
            }
            
            try {
                if (curmap[curX - 1][curY - 2].type == 1) {
                    disblock('.wallLside2');
                }
                else {
                    hideblock('.wallLside2')
                }
            } 
            catch (err) {
                disblock('.wallLside2');
            }
            
            try {
                if (curmap[curX + 1][curY - 2].type == 1) {
                    disblock('.wallRside2');
                }
                else {
                    hideblock('.wallRside2')
                }
            } 
            catch (err) {
                disblock('.wallRside2');
            }
            
            try {
                if (curmap[curX - 1][curY - 3].type == 1) {
                    disblock('.wallLside3');
                }
                else {
                    hideblock('.wallLside3')
                }
            } 
            catch (err) {
                disblock('.wallLside3');
            }
            
            try {
                if (curmap[curX + 1][curY - 3].type == 1) {
                    disblock('.wallRside3');
                }
                else {
                    hideblock('.wallRside3')
                }
            } 
            catch (err) {
                disblock('.wallRside3');
            }
            
            try {
                if (curmap[curX][curY - 1].type == 1) {
                    disblock('.wallFront1');
                }
                else {
                    hideblock('.wallFront1')
                }
            } 
            catch (err) {
                disblock('.wallFront1');
            }
            
            try {
                if (curmap[curX - 1][curY - 1].type == 1) {
                    disblock('.wallSide1_1');
                }
                else {
                    hideblock('.wallSide1_1')
                }
            } 
            catch (err) {
                disblock('.wallSide1_1');
            }
            
            try {
                if (curmap[curX + 1][curY - 1].type == 1) {
                    disblock('.wallSide1_2');
                }
                else {
                    hideblock('.wallSide1_2')
                }
            } 
            catch (err) {
                disblock('.wallSide1_2');
            }
            
            try {
                if (curmap[curX][curY - 2].type == 1) {
                    disblock('.wallFront2');
                }
                else {
                    hideblock('.wallFront2')
                }
            } 
            catch (err) {
                disblock('.wallFront2');
            }
            
            try {
                if (curmap[curX - 1][curY - 2].type == 1) {
                    disblock('.wallSide2_1');
                }
                else {
                    hideblock('.wallSide2_1')
                }
            } 
            catch (err) {
                disblock('.wallSide2_1');
            }
            
            try {
                if (curmap[curX + 1][curY - 2].type == 1) {
                    disblock('.wallSide2_2');
                }
                else {
                    hideblock('.wallSide2_2')
                }
            } 
            catch (err) {
                disblock('.wallSide2_2');
            }
            
            try {
                if (curmap[curX][curY - 3].type == 1) {
                    disblock('.wallFront3');
                }
                else {
                    hideblock('.wallFront3')
                }
            } 
            catch (err) {
                disblock('.wallFront3');
            }
            
            try {
                if (curmap[curX - 1][curY - 3].type == 1) {
                    disblock('.wallSide3_1');
                }
                else {
                    hideblock('.wallSide3_1')
                }
            } 
            catch (err) {
                disblock('.wallSide3_1');
            }
            
            try {
                if (curmap[curX + 1][curY - 3].type == 1) {
                    disblock('.wallSide3_2');
                }
                else {
                    hideblock('.wallSide3_2')
                }
            } 
            catch (err) {
                disblock('.wallSide3_2');
            }
            break;
            
        case 1:
            try {
                if (curmap[curX][curY - 1].type == 1) {
                    disblock('.wallLside0');
                }
                else {
                    hideblock('.wallLside0')
                }
            } 
            catch (err) {
                disblock('.wallLside0');
            }
            
            try {
                if (curmap[curX][curY + 1].type == 1) {
                    disblock('.wallRside0');
                }
                else {
                    hideblock('.wallRside0')
                }
            } 
            catch (err) {
                disblock('.wallRside0');
            }
            
            try {
                if (curmap[curX + 1][curY - 1].type == 1) {
                    disblock('.wallLside1');
                }
                else {
                    hideblock('.wallLside1')
                }
            } 
            catch (err) {
                disblock('.wallLside1');
            }
            
            try {
                if (curmap[curX + 1][curY + 1].type == 1) {
                    disblock('.wallRside1');
                }
                else {
                    hideblock('.wallRside1')
                }
            } 
            catch (err) {
                disblock('.wallRside1');
            }
            
            try {
                if (curmap[curX + 2][curY - 1].type == 1) {
                    disblock('.wallLside2');
                }
                else {
                    hideblock('.wallLside2')
                }
            } 
            catch (err) {
                disblock('.wallLside2');
            }
            
            try {
                if (curmap[curX + 2][curY + 1].type == 1) {
                    disblock('.wallRside2');
                }
                else {
                    hideblock('.wallRside2')
                }
            } 
            catch (err) {
                disblock('.wallRside2');
            }
            
            try {
                if (curmap[curX + 3][curY - 1].type == 1) {
                    disblock('.wallLside3');
                }
                else {
                    hideblock('.wallLside3')
                }
            } 
            catch (err) {
                disblock('.wallLside3');
            }
            
            try {
                if (curmap[curX + 3][curY + 1].type == 1) {
                    disblock('.wallRside3');
                }
                else {
                    hideblock('.wallRside3')
                }
            } 
            catch (err) {
                disblock('.wallRside3');
            }
            
            try {
                if (curmap[curX + 1][curY].type == 1) {
                    disblock('.wallFront1');
                }
                else {
                    hideblock('.wallFront1')
                }
            } 
            catch (err) {
                disblock('.wallFront1');
            }
            
            try {
                if (curmap[curX + 1][curY - 1].type == 1) {
                    disblock('.wallSide1_1');
                }
                else {
                    hideblock('.wallSide1_1')
                }
            } 
            catch (err) {
                disblock('.wallSide1_1');
            }
            
            try {
                if (curmap[curX + 1][curY + 1].type == 1) {
                    disblock('.wallSide1_2');
                }
                else {
                    hideblock('.wallSide1_2')
                }
            } 
            catch (err) {
                disblock('.wallSide1_2');
            }
            
            try {
                if (curmap[curX + 2][curY].type == 1) {
                    disblock('.wallFront2');
                }
                else {
                    hideblock('.wallFront2')
                }
            } 
            catch (err) {
                disblock('.wallFront2');
            }
            
            try {
                if (curmap[curX + 2][curY - 1].type == 1) {
                    disblock('.wallSide2_1');
                }
                else {
                    hideblock('.wallSide2_1')
                }
            } 
            catch (err) {
                disblock('.wallSide2_1');
            }
            
            try {
                if (curmap[curX + 2][curY + 1].type == 1) {
                    disblock('.wallSide2_2');
                }
                else {
                    hideblock('.wallSide2_2')
                }
            } 
            catch (err) {
                disblock('.wallSide2_2');
            }
            
            try {
                if (curmap[curX + 3][curY].type == 1) {
                    disblock('.wallFront3');
                }
                else {
                    hideblock('.wallFront3')
                }
            } 
            catch (err) {
                disblock('.wallFront3');
            }
            
            try {
                if (curmap[curX + 3][curY - 1].type == 1) {
                    disblock('.wallSide3_1');
                }
                else {
                    hideblock('.wallSide3_1')
                }
            } 
            catch (err) {
                disblock('.wallSide3_1');
            }
            
            try {
                if (curmap[curX + 3][curY + 1].type == 1) {
                    disblock('.wallSide3_2');
                }
                else {
                    hideblock('.wallSide3_2')
                }
            } 
            catch (err) {
                disblock('.wallSide3_2');
            }
            break;
            
        case 2:
            try {
                if (curmap[curX + 1][curY].type == 1) {
                    disblock('.wallLside0');
                }
                else {
                    hideblock('.wallLside0')
                }
            } 
            catch (err) {
                disblock('.wallLside0');
            }
            
            try {
                if (curmap[curX - 1][curY].type == 1) {
                    disblock('.wallRside0');
                }
                else {
                    hideblock('.wallRside0')
                }
            } 
            catch (err) {
                disblock('.wallRside0');
            }
            
            try {
                if (curmap[curX + 1][curY + 1].type == 1) {
                    disblock('.wallLside1');
                }
                else {
                    hideblock('.wallLside1')
                }
            } 
            catch (err) {
                disblock('.wallLside1');
            }
            
            try {
                if (curmap[curX - 1][curY + 1].type == 1) {
                    disblock('.wallRside1');
                }
                else {
                    hideblock('.wallRside1')
                }
            } 
            catch (err) {
                disblock('.wallRside1');
            }
            
            try {
                if (curmap[curX + 1][curY + 2].type == 1) {
                    disblock('.wallLside2');
                }
                else {
                    hideblock('.wallLside2')
                }
            } 
            catch (err) {
                disblock('.wallLside2');
            }
            
            try {
                if (curmap[curX - 1][curY + 2].type == 1) {
                    disblock('.wallRside2');
                }
                else {
                    hideblock('.wallRside2')
                }
            } 
            catch (err) {
                disblock('.wallRside2');
            }
            
            try {
                if (curmap[curX + 1][curY + 3].type == 1) {
                    disblock('.wallLside3');
                }
                else {
                    hideblock('.wallLside3')
                }
            } 
            catch (err) {
                disblock('.wallLside3');
            }
            
            try {
                if (curmap[curX - 1][curY + 3].type == 1) {
                    disblock('.wallRside3');
                }
                else {
                    hideblock('.wallRside3')
                }
            } 
            catch (err) {
                disblock('.wallRside3');
            }
            
            try {
                if (curmap[curX][curY + 1].type == 1) {
                    disblock('.wallFront1');
                }
                else {
                    hideblock('.wallFront1')
                }
            } 
            catch (err) {
                disblock('.wallFront1');
            }
            
            try {
                if (curmap[curX + 1][curY + 1].type == 1) {
                    disblock('.wallSide1_1');
                }
                else {
                    hideblock('.wallSide1_1')
                }
            } 
            catch (err) {
                disblock('.wallSide1_1');
            }
            
            try {
                if (curmap[curX - 1][curY + 1].type == 1) {
                    disblock('.wallSide1_2');
                }
                else {
                    hideblock('.wallSide1_2')
                }
            } 
            catch (err) {
                disblock('.wallSide1_2');
            }
            
            try {
                if (curmap[curX][curY + 2].type == 1) {
                    disblock('.wallFront2');
                }
                else {
                    hideblock('.wallFront2')
                }
            } 
            catch (err) {
                disblock('.wallFront2');
            }
            
            try {
                if (curmap[curX + 1][curY + 2].type == 1) {
                    disblock('.wallSide2_1');
                }
                else {
                    hideblock('.wallSide2_1')
                }
            } 
            catch (err) {
                disblock('.wallSide2_1');
            }
            
            try {
                if (curmap[curX - 1][curY + 2].type == 1) {
                    disblock('.wallSide2_2');
                }
                else {
                    hideblock('.wallSide2_2')
                }
            } 
            catch (err) {
                disblock('.wallSide2_2');
            }
            
            try {
                if (curmap[curX][curY + 3].type == 1) {
                    disblock('.wallFront3');
                }
                else {
                    hideblock('.wallFront3')
                }
            } 
            catch (err) {
                disblock('.wallFront3');
            }
            
            try {
                if (curmap[curX + 1][curY + 3].type == 1) {
                    disblock('.wallSide3_1');
                }
                else {
                    hideblock('.wallSide3_1')
                }
            } 
            catch (err) {
                disblock('.wallSide3_1');
            }
            
            try {
                if (curmap[curX - 1][curY + 3].type == 1) {
                    disblock('.wallSide3_2');
                }
                else {
                    hideblock('.wallSide3_2')
                }
            } 
            catch (err) {
                disblock('.wallSide3_2');
            }
            break;
            
        case 3:
            try {
                if (curmap[curX][curY + 1].type == 1) {
                    disblock('.wallLside0');
                }
                else {
                    hideblock('.wallLside0')
                }
            } 
            catch (err) {
                disblock('.wallLside0');
            }
            
            try {
                if (curmap[curX][curY - 1].type == 1) {
                    disblock('.wallRside0');
                }
                else {
                    hideblock('.wallRside0')
                }
            } 
            catch (err) {
                disblock('.wallRside0');
            }
            
            try {
                if (curmap[curX - 1][curY + 1].type == 1) {
                    disblock('.wallLside1');
                }
                else {
                    hideblock('.wallLside1')
                }
            } 
            catch (err) {
                disblock('.wallLside1');
            }
            
            try {
                if (curmap[curX - 1][curY - 1].type == 1) {
                    disblock('.wallRside1');
                }
                else {
                    hideblock('.wallRside1')
                }
            } 
            catch (err) {
                disblock('.wallRside1');
            }
            
            try {
                if (curmap[curX - 2][curY + 1].type == 1) {
                    disblock('.wallLside2');
                }
                else {
                    hideblock('.wallLside2')
                }
            } 
            catch (err) {
                disblock('.wallLside2');
            }
            
            try {
                if (curmap[curX - 2][curY - 1].type == 1) {
                    disblock('.wallRside2');
                }
                else {
                    hideblock('.wallRside2')
                }
            } 
            catch (err) {
                disblock('.wallRside2');
            }
            
            try {
                if (curmap[curX - 3][curY + 1].type == 1) {
                    disblock('.wallLside3');
                }
                else {
                    hideblock('.wallLside3')
                }
            } 
            catch (err) {
                disblock('.wallLside3');
            }
            
            try {
                if (curmap[curX - 3][curY - 1].type == 1) {
                    disblock('.wallRside3');
                }
                else {
                    hideblock('.wallRside3')
                }
            } 
            catch (err) {
                disblock('.wallRside3');
            }
            
            try {
                if (curmap[curX - 1][curY].type == 1) {
                    disblock('.wallFront1');
                }
                else {
                    hideblock('.wallFront1')
                }
            } 
            catch (err) {
                disblock('.wallFront1');
            }
            
            try {
                if (curmap[curX - 1][curY + 1].type == 1) {
                    disblock('.wallSide1_1');
                }
                else {
                    hideblock('.wallSide1_1')
                }
            } 
            catch (err) {
                disblock('.wallSide1_1');
            }
            
            try {
                if (curmap[curX - 1][curY - 1].type == 1) {
                    disblock('.wallSide1_2');
                }
                else {
                    hideblock('.wallSide1_2')
                }
            } 
            catch (err) {
                disblock('.wallSide1_2');
            }
            
            try {
                if (curmap[curX - 2][curY].type == 1) {
                    disblock('.wallFront2');
                }
                else {
                    hideblock('.wallFront2')
                }
            } 
            catch (err) {
                disblock('.wallFront2');
            }
            
            try {
                if (curmap[curX - 2][curY + 1].type == 1) {
                    disblock('.wallSide2_1');
                }
                else {
                    hideblock('.wallSide2_1')
                }
            } 
            catch (err) {
                disblock('.wallSide2_1');
            }
            
            try {
                if (curmap[curX - 2][curY - 1].type == 1) {
                    disblock('.wallSide2_2');
                }
                else {
                    hideblock('.wallSide2_2')
                }
            } 
            catch (err) {
                disblock('.wallSide2_2');
            }
            
            try {
                if (curmap[curX - 3][curY].type == 1) {
                    disblock('.wallFront3');
                }
                else {
                    hideblock('.wallFront3')
                }
            } 
            catch (err) {
                disblock('.wallFront3');
            }
            
            try {
                if (curmap[curX - 3][curY + 1].type == 1) {
                    disblock('.wallSide3_1');
                }
                else {
                    hideblock('.wallSide3_1')
                }
            } 
            catch (err) {
                disblock('.wallSide3_1');
            }
            
            try {
                if (curmap[curX - 3][curY - 1].type == 1) {
                    disblock('.wallSide3_2');
                }
                else {
                    hideblock('.wallSide3_2')
                }
            } 
            catch (err) {
                disblock('.wallSide3_2');
            }
            break;
    }
    updateDecore();
    updateDoor();
}

function decore0(){
    //Front side
    try {
        if (curmap[curX][curY - 1].s.length > 0) {
            for (x in curmap[curX][curY - 1].s) {
                switch (curmap[curX][curY - 1].s[x].objType) {
                
                    case 'wallText':
                        $('.wallFront1').html(curmap[curX][curY - 1].s[x].text);
                        break;
                }
            }
            
        }
        else {
        }
    } 
    catch (err) {
    }
    try {
        if (curmap[curX][curY - 2].s.length > 0) {
            for (x in curmap[curX][curY - 2].s) {
                switch (curmap[curX][curY - 2].s[x].objType) {
                
                    case 'wallText':
                        disblock_decor('.wallFront2_walldecor', 'wallFront2_text.png');
                        break;
                }
            }
            
        }
        else {
        }
    } 
    
    catch (err) {
    }
    //Right side		
    try {
        if (curmap[curX + 1][curY].w.length > 0) {
            for (x in curmap[curX + 1][curY].w) {
                switch (curmap[curX + 1][curY].w[x].objType) {
                
                    case 'wallText':
                        disblock_decor('.wallRside0_walldecor', 'wallRSide0_text.png');
                        break;
                }
            }
            
        }
        else {
        }
    } 
    catch (err) {
    }
    
    try {
        if (curmap[curX + 1][curY - 1].w.length > 0) {
            for (x in curmap[curX + 1][curY - 1].w) {
                switch (curmap[curX + 1][curY - 1].w[x].objType) {
                
                    case 'wallText':
                        disblock_decor('.wallRside1_walldecor', 'wallRSide1_text.png');
                        break;
                }
            }
            
        }
        else {
        }
    } 
    catch (err) {
    }
    //end of right side
    //left side
    try {
        if (curmap[curX - 1][curY].e.length > 0) {
            for (x in curmap[curX - 1][curY].e) {
                switch (curmap[curX - 1][curY].e[x].objType) {
                
                    case 'wallText':
                        disblock_decor('.wallLside0_walldecor', 'wallLSide0_text.png');
                        break;
                }
            }
            
        }
        else {
        }
    } 
    catch (err) {
    }
    
    try {
        if (curmap[curX - 1][curY - 1].e.length > 0) {
            for (x in curmap[curX - 1][curY - 1].e) {
                switch (curmap[curX - 1][curY - 1].e[x].objType) {
                
                    case 'wallText':
                        disblock_decor('.wallLside1_walldecor', 'wallLSide1_text.png');
                        break;
                }
            }
            
        }
        else {
        }
    } 
    catch (err) {
    }
    //end of left side



}

function decore1(){
    //Front side
    //Front _*_
    try {
        if (curmap[curX + 1][curY].w.length > 0) {
            for (x in curmap[curX + 1][curY].w) {
                switch (curmap[curX + 1][curY].w[x].objType) {
                
                    case 'wallText':
                        $('.wallFront1').html(curmap[curX + 1][curY].w[x].text);
                        break;
                }
            }
            
        }
        else {
        }
    } 
    
    
    catch (err) {
    }
    
    
    try {
        if (curmap[curX + 2][curY].w.length > 0) {
            for (x in curmap[curX + 2][curY].w) {
                switch (curmap[curX + 2][curY].w[x].objType) {
                
                    case 'wallText':
                        disblock_decor('.wallFront2_walldecor', 'wallFront2_text.png');
                        break;
                }
            }
            
        }
        else {
        }
    } 
    catch (err) {
    }
    //End of front side
    
    //Right side		
    try {
        if (curmap[curX][curY + 1].n.length > 0) {
            for (x in curmap[curX][curY + 1].n) {
                switch (curmap[curX][curY + 1].n[x].objType) {
                
                    case 'wallText':
                        disblock_decor('.wallRside0_walldecor', 'wallRSide0_text.png');
                        break;
                }
            }
            
        }
        else {
        }
    } 
    catch (err) {
    }
    
    try {
        if (curmap[curX + 1][curY + 1].n.length > 0) {
            for (x in curmap[curX + 1][curY + 1].n) {
                switch (curmap[curX + 1][curY + 1].n[x].objType) {
                
                    case 'wallText':
                        disblock_decor('.wallRside1_walldecor', 'wallRSide1_text.png');
                        break;
                }
            }
            
        }
        else {
        }
    } 
    catch (err) {
    }
    //end of right side
    //left side
    try {
        if (curmap[curX][curY - 1].s.length > 0) {
            for (x in curmap[curX][curY - 1].s) {
                switch (curmap[curX][curY - 1].s[x].objType) {
                
                    case 'wallText':
                        disblock_decor('.wallLside0_walldecor', 'wallLSide0_text.png');
                        break;
                }
            }
            
        }
        else {
        }
    } 
    catch (err) {
    }
    
    try {
        if (curmap[curX + 1][curY - 1].s.length > 0) {
            for (x in curmap[curX + 1][curY - 1].s) {
                switch (curmap[curX + 1][curY - 1].s[x].objType) {
                
                    case 'wallText':
                        disblock_decor('.wallLside1_walldecor', 'wallLSide1_text.png');
                        break;
                }
            }
            
        }
        else {
        }
    } 
    catch (err) {
    }
    //end of left side



}

function decore2(){
    //Front side
    try {
        if (curmap[curX][curY + 1].n.length > 0) {
            for (x in curmap[curX][curY + 1].n) {
                switch (curmap[curX][curY + 1].n[x].objType) {
                
                    case 'wallText':
                        $('.wallFront1').html(curmap[curX][curY + 1].n[x].text);
                        break;
                }
            }
            
        }
        else {
        }
    } 
    catch (err) {
        dbg(err);
    }
    try {
        if (curmap[curX][curY + 2].n.length > 0) {
            for (x in curmap[curX][curY + 2].n) {
                switch (curmap[curX][curY + 2].n[x].objType) {
                
                    case 'wallText':
                        disblock_decor('.wallFront2_walldecor', 'wallFront2_text.png');
                        break;
                }
            }
            
        }
        else {
        }
    } 
    catch (err) {
    }
    //End of front side
    
    //Right side		
    try {
        if (curmap[curX - 1][curY].e.length > 0) {
            for (x in curmap[curX - 1][curY].e) {
                switch (curmap[curX - 1][curY].e[x].objType) {
                
                    case 'wallText':
                        disblock_decor('.wallRside0_walldecor', 'wallRSide0_text.png');
                        break;
                }
            }
            
        }
        else {
        }
    } 
    catch (err) {
    }
    
    try {
        if (curmap[curX - 1][curY + 1].e.length > 0) {
            for (x in curmap[curX - 1][curY + 1].e) {
                switch (curmap[curX - 1][curY + 1].e[x].objType) {
                
                    case 'wallText':
                        disblock_decor('.wallRside1_walldecor', 'wallrSide1_text.png');
                        break;
                }
            }
            
        }
        else {
        }
    } 
    catch (err) {
    }
    //end of right side
    //left side
    try {
        if (curmap[curX + 1][curY].w.length > 0) {
            for (x in curmap[curX + 1][curY].w) {
                switch (curmap[curX + 1][curY].w[x].objType) {
                
                    case 'wallText':
                        disblock_decor('.wallLside0_walldecor', 'wallLSide0_text.png');
                        break;
                }
            }
            
        }
        else {
        }
    } 
    catch (err) {
    }
    
    try {
        if (curmap[curX + 1][curY + 1].w.length > 0) {
            for (x in curmap[curX + 1][curY + 1].w) {
                switch (curmap[curX + 1][curY + 1].w[x].objType) {
                
                    case 'wallText':
                        disblock_decor('.wallLside1_walldecor', 'wallLSide1_text.png');
                        break;
                }
            }
            
        }
        else {
        }
    } 
    catch (err) {
    }
    //end of left side



}

function decore3(){

    //Front side
    try {
        if (curmap[curX - 1][curY].e.length > 0) {
            for (x in curmap[curX - 1][curY].e) {
                switch (curmap[curX - 1][curY].e[x].objType) {
                
                    case 'wallText':
                        $('.wallFront1').html(curmap[curX - 1][curY].e[x].text);
                        break;
                }
            }
            
        }
        else {
        }
    } 
    catch (err) {
    }
    try {
        if (curmap[curX - 2][curY].e.length > 0) {
            for (x in curmap[curX - 2][curY].e) {
                switch (curmap[curX - 2][curY].e[x].objType) {
                
                    case 'wallText':
                        disblock_decor('.wallFront2_walldecor', 'wallFront2_text.png');
                        break;
                }
            }
            
        }
        else {
        }
    } 
    catch (err) {
    }
    //End of front side
    
    //Right side		
    try {
        if (curmap[curX][curY - 1].s.length > 0) {
            for (x in curmap[curX][curY - 1].s) {
                switch (curmap[curX][curY - 1].s[x].objType) {
                
                    case 'wallText':
                        disblock_decor('.wallRside0_walldecor', 'wallRSide0_text.png');
                        break;
                }
            }
            
        }
        else {
        }
    } 
    catch (err) {
    }
    
    try {
        if (curmap[curX - 1][curY - 1].s.length > 0) {
            for (x in curmap[curX - 1][curY - 1].s) {
                switch (curmap[curX - 1][curY - 1].s[x].objType) {
                
                    case 'wallText':
                        disblock_decor('.wallRside1_walldecor', 'wallRSide1_text.png');
                        break;
                }
            }
            
        }
        else {
        }
    } 
    catch (err) {
    }
    //end of right side
    //left side
    try {
        if (curmap[curX][curY + 1].n.length > 0) {
            for (x in curmap[curX][curY + 1].n) {
                switch (curmap[curX][curY + 1].n[x].objType) {
                
                    case 'wallText':
                        disblock_decor('.wallLside0_walldecor', 'wallLSide0_text.png');
                        break;
                }
            }
            
        }
        else {
        }
    } 
    catch (err) {
    }
    
    try {
        if (curmap[curX - 1][curY + 1].n.length > 0) {
            for (x in curmap[curX - 1][curY + 1].n) {
                switch (curmap[curX - 1][curY + 1].n[x].objType) {
                
                    case 'wallText':
                        disblock_decor('.wallLside1_walldecor', 'wallLSide1_text.png');
                        break;
                }
            }
            
        }
        else {
        }
    } 
    catch (err) {
    }
    //end of left side



}


function updateDecore(){
    clear_decor();
    switch (curDir) {
        case 0:
            decore0();
            break;
        case 1:
            decore1();
            break;
        case 2:
            decore2();
            break;
            
        case 3:
            decore3();
            break;
            
    }
}

function doStep(povDir){
    checkEvent(povDir);
    $("div[class*='side'], div[class*='Side'], .floor, .roof").each(function(index){
        var curbck = $(this).css('background-image')
        
        if (curbck.indexOf('alt') == -1) {
            $(this).css('background-image', curbck.replace('nor.', 'alt.'));
        }
        else {
            $(this).css('background-image', curbck.replace('alt.', 'nor.'));
        }
        
    });
    
}

function disblock(xclass){
    $(xclass).css('display', 'block');
    
}

function hideblock(xclass){
    $(xclass).css('display', 'none');
}

function clearevents(xclass){
    $(xclass).unbind();
}


function disblock_decor(xclass, img){
    $(xclass).css('background-image', 'url(' + img + ')');
    $(xclass).css('display', 'block');
    
}

function clear_decor(){
    $('.wallFront1').html('');
    $('div[class*=decor]').css('background-image', '');
    $('div[class*=decor]').css('display', 'none');
    $('div[class*=door]').css('display', 'none');
    clearevents('.doorFront1_button');
    
    
}


function updateCompass(){
    switch (curDir) {
        case 0:
            document.getElementById('cmp').innerHTML = 'N';
            break;
        case 1:
            document.getElementById('cmp').innerHTML = 'E';
            break;
        case 2:
            document.getElementById('cmp').innerHTML = 'S';
            break;
        case 3:
            document.getElementById('cmp').innerHTML = 'W';
            break;
    }
}

function wallDecor(){

}

function tmpLightswitch(){
    if ($('#overLay').css('display') == 'block') {
        $('#overLay').css('display', 'none');
    }
    else {
        $('#overLay').css('display', 'block');
    }
}

