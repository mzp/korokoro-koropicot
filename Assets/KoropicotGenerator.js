#pragma strict

var prefab : GameObject;

function Start () {

}

function Update () {
  if (Input.GetMouseButtonDown(0)) {
    Instantiate(prefab, Vector3(Random.Range(-0.1,0.1), 3, Random.Range(-0.1,0.1)), Quaternion.identity);
  }
}
