#pragma strict

var stageDefinition : TextAsset;
var block  : GameObject;
var player : GameObject;
var parent : Transform;

function Start () {
  var x : Number = 0;
  var y : Number = 0;

  for(line in stageDefinition.text.Split('\n'[0])) {
    for(cell in line) {
      if(cell == "*") {
        var gameObject : GameObject = Instantiate(block);
        gameObject.transform.position.x = x;
        gameObject.transform.position.y = 0.4;
        gameObject.transform.position.z = y;
        gameObject.transform.parent = parent;
      } else if (cell == "k") {
        player.transform.position.x = x;
        player.transform.position.z = y;
      }
      x += 1;
    }
    x = 0;
    y += 1;

  }
}
