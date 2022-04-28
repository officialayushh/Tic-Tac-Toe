<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <title>Tic Tac Toe</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
    <script src="./confetti.js"></script>
</head>

<body class="first" id="body">
    <h1><center><div  class="nihal"> &#127881;   TIC TAC TOE   &#127881;</div></center></h1>
    <h1 id="player">
        <center id="result">Let's Play &#128512;</center>
    </h1>
    
    <table>
        <tr>
            <td id="r1" class="box" onclick="printSign('1')"></td>
            <td id="r2" class="box" onclick="printSign('2')"></td>
            <td id="r3" class="box" onclick="printSign('3')"></td>
            
        </tr>
        <tr>
            <td id="r4" class="box" onclick="printSign('4')"></td>
            <td id="r5" class="box" onclick="printSign('5')"></td>
            <td id="r6" class="box" onclick="printSign('6')"></td>
            
        </tr>
        <tr>
            <td id="r7" class="box" onclick="printSign('7')"></td>
            <td id="r8" class="box" onclick="printSign('8')"></td>
            <td id="r9" class="box" onclick="printSign('9')"></td>
            
        </tr>
    </table>
    <center>
        <button id="btn1" onclick="newStart()"> New Start</button>
        <div>
            <button id="btn2" onclick="changeBackground()">Change Gradient</button>
        </div>
    </center>
  
</body>

</html>
