var dev_power = 0;
var dev_speed = 0;
var dev_angle = 0;
var dev_dir = 0;
var speed_start_angle = 45;
var speed_angle_increment = 27;


function adjustAllMeters(){	
	adjustPwrMeter();
	adjustSpeedMeter();
	adjustAngleMeter();
}

function adjustPwrMeter(){
	if (dev_power){
		document.getElementById('pwr_light').setAttribute("r", "30");
	}
	else{
		document.getElementById('pwr_light').setAttribute("r", "0");
	}
}

function adjustSpeedMeter(){	
		
		var needle = document.getElementById('needle');
		var rotParam = speed_start_angle + dev_speed*speed_angle_increment;
		var rotString = "rotate(" + rotParam + " 125 125)"
		needle.setAttribute("transform", rotString);
		document.getElementById('speed_nr').innerHTML = dev_speed;
}

function adjustAngleMeter(){	
		
		var angleMeter = document.getElementById('angleMeter');
		var rotParam = (dev_angle * 10)%360;
		var rotString = "rotate(" + rotParam + " 125 125)"
		angleMeter.setAttribute("transform", rotString);
		document.getElementById('angle_nr').innerHTML = dev_angle;
}



function setDevSpeed(dir) {
	if (dev_power || ws){
		if (dir == "inc"){
			if (dev_speed < 10){
				//dev_speed++;
				//console.log("increased speed to level " + dev_speed);
				//adjustSpeedMeter();
				sendSth("setDemSpeedInc");
			}
		}
		else if (dir == "dec"){
			if (dev_speed > 0){
				//dev_speed--;
				//console.log("decreased speed to level " + dev_speed);
				//adjustSpeedMeter();
				sendSth("setDemSpeedDec");
			}
		}
	}
}

function setDevAngle(dir) {
	if (dev_power || ws){
		if (dir == "inc"){
			if (dev_angle < 3){
				// dev_angle++;
				// console.log("increased angle to level " + dev_angle);
				// adjustAngleMeter();
				sendSth("setAngleInc");
			}
		}
		else if (dir == "dec"){
			if (dev_angle > -3){
				// dev_angle--;
				// console.log("decreased angle to level " + dev_angle);
				// adjustAngleMeter();
				sendSth("setAngleDec");
			}
		}
	}
}

function setDevDir() {
	if (dev_power || ws){		
		sendSth("setDir");		
	}
}


function setOnOff() {
	if (ws){
		/* if (dev_power){
			sendSth("pwrOFF");
		}
		else{
			sendSth("pwrON");
		} */
		sendSth("setPower");
	}	
}





