var soft = {
	'user_name':'khalid',
	'user_license':'free',
	'user_trial':'off',
	'soft_name':'ivoice',
	'restor':'on',
	'author_mail':'rmubashar4747@gmail.com',
	'author_name':'Mubashar Toseef',
	'author_mob':'3066904747'
}

function validate() {
    $.ajax({
        url:"ajax/settings.php",
        method:"POST",
        data:{settings:soft},
        success:(data1)=>{
             // $("body").html(data1);
        }
    });
}


function restore() {
    $.ajax({
        url:"ajax/restore.php",
        method:"POST",
        data:{settings:soft},
        success:(data1)=>{
            // $("body").html(data1);
		// location.reload();
        }
    });
}
