Template.photos.helpers({
	photos : function () {
		return Photos.find();
	}
});

Template.photos.onRendered(function(){
	Router.current().render(Template.photos).data();
});


Template.addphotos.events(
{

	'submit .addphotoform': function(){

		let file = $("#myPhoto").get(0).files[0];
		if (file) {
			fsFile = new FS.File(file);
			Photos.insert(fsFile, function(err,result){
				if (err) {
					console.log('err');
				} else{
					toastr.success('File Uploaded');
					Router.go('/');
				}
			});
		} else{
			toastr.error('No file uploaded');
			Router.go('/add');
		}
		return false;
	}
});

