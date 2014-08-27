#pragma strict
var koropicot  : GameObject;
var mainCamera : GameObject;

function FixedUpdate () {
  mainCamera.transform.position.x = koropicot.transform.position.x;
  mainCamera.transform.position.z = koropicot.transform.position.z;
}
