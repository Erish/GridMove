#pragma strict

/*
var stage = [
		[0,0,0,0,0,0,0],
		[0,0,1,0,1,0,0],
		[0,0,1,0,1,0,0],
		[0,0,1,0,1,0,0],
		[0,0,1,1,1,0,0],
		[0,0,1,1,1,0,0],
		[0,0,0,0,0,0,0]
	];
	*/

var stage = [
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,1,1,0,0,0,0],
		[0,0,0,1,1,1,1,0,0,0],
		[0,0,1,1,1,1,1,1,0,0],
		[0,1,1,1,1,1,1,1,1,0],
		[0,1,1,1,1,1,1,1,1,0],
		[0,0,1,1,1,1,1,1,0,0],
		[0,0,0,1,1,1,1,0,0,0],
		[0,0,0,0,1,1,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0]
	];
	
	
var blocklist : GameObject[];

var WallBlockObj :	GameObject;
var BaseBlockObj :	GameObject;
var p_parent	 :	GameObject;
var obj_parent	 :	GameObject;
var selectedObject : Transform;


private var DoubleTimer: float		= 0.00;


  var ray : Ray;
  var hit : RaycastHit;
var MapMax_X : int;
var MapMax_Y : int;
private var showswitch = true;

/* touch sousa you */
var Blocks : GameObject[];
var BlockPos : Vector3[];
var FixedRotate : float[];

var FocusObject	 :	GameObject;
	
function Start () {


//Debug.Log(blocklist.length);
    
 for(var i:int = 0; i < stage.length; i++){

            for(var j:int = 0; j < 10; j++){

               // if(stage[i][j] == 0 ){
                //var wall = Instantiate(WallBlockObj, Vector3((-1 * j),1,(-1 * i)), Quaternion.identity )as GameObject;
                //wall.transform.parent = p_parent.transform;
               // }
                if(stage[i][j] == 1 ){
                var base = Instantiate(BaseBlockObj, Vector3((-1 *j),0,(-1 * i)), Quaternion.identity )as GameObject;
                base.transform.parent = p_parent.transform;
                }
                //var base = Instantiate(BaseBlockObj, Vector3((-1 *j),0,(-1 * i)), Quaternion.identity )as GameObject;
                //base.transform.parent = p_parent.transform;
            }

        }
        
        
 for(var k:int = 0; k < blocklist.length; k++){
 		
 		/*
 		if(showswitch == true){
                var BlockObj1 = Instantiate(blocklist[k], Vector3(4,2,(-3 * k)-1), Quaternion.identity )as GameObject;
                //BlockObj1.transform.parent = obj_parent.transform;
                showswitch = false;
                }
         
 		else if(showswitch == false){
                var BlockObj = Instantiate(blocklist[k], Vector3(8,2,(-1 * k)), Quaternion.identity )as GameObject;
                //BlockObj.transform.parent = obj_parent.transform;
                showswitch = true;
                }
                */
                if(showswitch == true){
                var BlockObj = Instantiate(blocklist[k], BlockPos[k], Quaternion.AngleAxis(FixedRotate[k], Vector3.up))as GameObject;
                //BlockObj1.transform.eulerAngles.y = FixedRotate[k];
                showswitch = false;
                }
         
 		else if(showswitch == false){
 				var BlockObj1 = Instantiate(blocklist[k], BlockPos[k], Quaternion.AngleAxis(FixedRotate[k], Vector3.up))as GameObject;
                //var BlockObj1 = Instantiate(blocklist[k], BlockPos[k], Quaternion.identity )as GameObject;
                //BlockObj1.transform.eulerAngles.y = FixedRotate[k];
                //BlockObj.transform.parent = obj_parent.transform;
                showswitch = true;
                }
}

if( !Blocks ) Blocks = GameObject.FindGameObjectsWithTag("Block");
}




function Update () {

if(DoubleTimer > 0){
	DoubleTimer -= Time.deltaTime;
	}

}

function selected (obj:Transform)
{
if(DoubleTimer > 0.10){
	selectedObject.transform.eulerAngles.z -= 180.0;
	DoubleTimer = 0.00;
	}
	//selectedObject.SendMessage ("unFocus");
	//selectedObject = null;
	//selectedObject = obj;
	//selectedObject = GameObject.Find(obj);
	selectedObject = obj;
	Debug.Log("Tapped " + obj);
	DoubleTimer = 0.40;

}

function hoge(obj:int){
Debug.Log("Test!!");

}

function TapEvent(roll:int){
switch (roll){
  case 1:
  selectedObject.transform.eulerAngles.y -= 90.0;
    break;
  case 2:
   selectedObject.transform.eulerAngles.y += 90.0;
    break;
	}
}