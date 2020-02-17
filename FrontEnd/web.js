var player1 = prompt("Player one: enter your name, you will be blue");

var player1color = "rgb(86,151,255)";

var player2 = prompt("Player two: enter your name, you will be red");

var player2color = "rgb(237,45,73)";

var game_on = true;

var table = $('table tr');

function reportwin(rownum, colnum)
{
    console.log("You won with")
    console.log(rownum, colnum);
}

function changecolor(rowindex, conindex, color)
{
    return table.eq(rowindex).find('td').eq(colinedx).find('button').css('background-color', color);
}

function returncolor(rowindex, colinedx)
{
    return table.eq(rowindex).find('td').eq(colinedx).find('button').css('background-color');
}

function checkbottom(colinedx)
{
    var colorreport = returncolor(5,colinedx);
    for(row = 5; row > -1; row--)
    {
        colorreport = returncolor(row,colinedx);
        if (colorreport == "rgb(128,128,128)" )
        {
            return row;
        }
    }
}

function colorMatchcheck()