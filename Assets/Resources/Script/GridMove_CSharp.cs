using UnityEngine;
using System.Collections;

public class GridMove_CSharp : MonoBehaviour {

	private Vector3 screenPos;
	private Vector3 offset;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnMouseDown(){
		screenPos = Camera.main.WorldToScreenPoint(this.transform.position);
		offset = this.transform.position - Camera.main.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenPos.z));

		//マウスダウン時にYを他よりあげることでハイライトする
		this.transform.position = new Vector3(this.transform.position.x,2.0f,this.transform.position.z);
	}

	void OnMouseDrag() {
		Vector3 currentScreenPoint = new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenPos.z);
		Vector3 currentPosition = Camera.main.ScreenToWorldPoint(currentScreenPoint) + this.offset;
		this.transform.position = new Vector3(Mathf.RoundToInt(currentPosition.x),Mathf.RoundToInt(currentPosition.y)+1,Mathf.RoundToInt(currentPosition.z));
	}

	void  OnMouseUp() {
		//マウスダウン時にあげたY座標を元の高さに戻す
		this.transform.position = new Vector3(this.transform.position.x,1.0f,this.transform.position.z);
	}
}
