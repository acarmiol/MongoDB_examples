Template.addphotos.events(
{

	'submit .addphotoform': function(){

		let file = $("#myPhoto").get(0).files[0];
		if (file) {
			fsFile = new FS.File(file);
			Photos.insert(fsFile, function(err,result){
				if (error) {
					console.log('there was an error');
				} else{
					toastr.success('File Uploaded');
					Router.go('/');
				}
			} );
		} else{
			toastr.error('No file uploaded ');
			Router.go('/add');
		}
		return false;
	}
});