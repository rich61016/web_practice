var tasks = [];
function doFirst(){
	document.getElementById('theForm').onsubmit = addTask;
	
}

function addTask (){
	var task = document.getElementById('task').value;
	var result = '';
	
	if(task){
		/* tasks[tasks.length] = task;
		result += 'you have ' + tasks.length + ' task in your to do list'; */
		
		tasks.push(task);
		result += '<h3>to do list</h3> ' ;
		result += '<ol><li>';
		result += tasks.join('</li><li>');
		result += '</li></ol>';
		document.getElementById('result').innerHTML = result;
	}
	
	return false;
}

window.addEventListener('load',doFirst);
/* window.onload = doFirst; */