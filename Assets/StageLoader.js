#pragma strict

var stageDefinition : TextAsset;
var block  : GameObject;
var player : GameObject;
var parent : Transform;
var goal   : GameObject;

function Start () {
  var x : Number = 0;
  var y : Number = 0;

  for(line in stageDefinition.text.Split('\n'[0])) {
    for(cell in line) {
      if(cell == "*") {
        var b : GameObject = Instantiate(block);
        b.transform.position.x = x;
        b.transform.position.y = 0.4;
        b.transform.position.z = y;
        b.transform.parent = parent;
      } else if (cell == "k") {
        player.transform.position.x = x;
        player.transform.position.z = y;
      } else if(cell == "G") {
        var g : GameObject = Instantiate(goal);
        g.transform.position.x = x;
        g.transform.position.z = y;
        g.transform.parent = parent;
      }
      x += 1;
    }
    x = 0;
    y += 1;

  }
}
