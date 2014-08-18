#pragma strict

var target : Rigidbody;
var basePos : Vector3 = new Vector3(0,0,0);

function Start () {

}

function FixedUpdate () {
  if (Input.GetMouseButtonDown(0)) {
     this.basePos = Input.mousePosition;
  }
  if (Input.GetMouseButton(0)) {
    var y : float = Input.mousePosition.y - basePos.y;
    var x : float = Input.mousePosition.x - basePos.x;

    target.AddForce(new Vector3(y/100, 0, x/100));
  }
}
