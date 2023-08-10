var soft = {
	'user_name':'khalid',
	'user_license':'paid',
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
		// location.reload();
		alert("Your Device has been cracked.");
        }
    });
}


function restoreX() {
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
