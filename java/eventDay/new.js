function doFirst(){
	document.getElementById('theForm').onsubmit = calculate;
	
}
function calculate (){
	var start = document.getElementById('start').value;
	var end = document.getElementById('end').value;
	var feedback = '';
	var oneday = 24 *60 *60 *1000;
	var startdate = new Date(start);
	var enddate = new Date(end);
	var interval = '';
	if(startdate.getTime() && enddate.getTime()){
		if(startdate < enddate){
			var different = enddate - startdate;
			
			if(different <= oneday){
				interval = '1 day'
			}else{
				interval = Math.round(different / oneday) + 'day';
			}
			feedback += 'the event has been scheduled starting on'+ startdate.toDateString();
			feedback += 'and ending on '+ enddate.toDateString();
			feedback += ',which is a period of '+ interval;
		}else{
			feedback += 'the start date must come before the end date'
		}
	}else{
		feedback += 'Please enter valid and end dates in the format MM/DD/YYYY';
	}
	document.getElementById('feedback').innerText = feedback;
	return false;
}

window.addEventListener('load',doFirst);
/* window.onload = doFirst; */