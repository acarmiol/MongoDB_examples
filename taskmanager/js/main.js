$(document).ready(function(){
	getTasks();
});

const apiKey = 'dBJId6hlkLeuFhjFqosqMGmeHWT5TbSV';

function getTasks(){

	$.get(`https://api.mlab.com/api/1/databases/taskmanager01/collections/tasks?apiKey=${apiKey}`,function(data){
		console.log(data);
		let output = '<ul class="list-group">';
		$.each(data,function(key,task){
			output+='<li class="list-group-item">';
			output+= task.task_name + ': <span class="due_on">[Due on '+task.due_date+']</span>';

			if(task.is_urgent == "true"){
				output += '<span class="label label-danger">Urgent</span>';
			}
			output +='<div class="pull-right"><a class="btn btn-primary" href="#"">Edit</a> <a class="btn btn-danger" href="#">Delete</a></div>';


		});

		output += '</ul>';
		$('#tasks').html(output) ;
	});

}
