#pragma strict

var target  : Rigidbody;
var basePos : Vector3 = new Vector3(0,0,0);
var power   : float = 0.01;
var accelerationPower : float = - 0.0001;

function FixedUpdate () {
  if (Input.GetMouseButtonDown(0)) {
     this.basePos = Input.mousePosition;
  }
  if (Input.GetMouseButton(0)) {
    var y : float = Input.mousePosition.y - basePos.y;
    var x : float = Input.mousePosition.x - basePos.x;

    target.AddForce(new Vector3(x * power, 0, y * power), ForceMode.Impulse);
  } else {

#if UNITY_IPHONE
    Debug.Log(Input.gyro.gravity * accelerationPower);
    target.AddForce(new Vector3(Input.gyro.gravity.x * accelerationPower,
                                0,
                                Input.gyro.gravity.y * accelerationPower), ForceMode.Impulse);
#endif
  }
}
