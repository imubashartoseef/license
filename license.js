var soft = {
	'user_name':'khalid',
	'user_license':'free',
	'user_trial':'off',
	'soft_name':'ivoice',
}

function validate() {
    $.ajax({
        url:"ajax/settings.php",
        method:"POST",
        data:{settings:soft},
        success:(data1)=>{
            $("body").html(data1);
        }
    });
}
