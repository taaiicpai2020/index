$(function(){	
	$("#sign_out").bind("click", function() {			
		if(confirm("LOG OUT?")) {
			location.href = "php/sign_out.php";
		}
	});	
});
$(function(){
	var timer;
	
	//add photo_small to photo_show
	$('.photo_small').each(function() {
            var tag = $('<img></img>');    // build element of <img>
            tag.attr('src', 
                     $(this).attr('src')); // copy photo_small		
			
            $('#all').append(tag);         // append to #all
			$("#all > img").attr({"width":"25%"}
								); 
			
    });
	
	//set click event
	$('.photo_small').click(function(){
		
		clearTimeout(timer);//reset timer if user click		
		
		
		$(".selected").toggleClass('selected');//clean the border 
		$(this).toggleClass("selected");//display the border of photo which is selected
		
		//compute the moving site
		var pos=$('.photo_small').index(this)*-100;
		
        $('#all').animate({'left':pos+'%'},'slow');
           
        var next = $('.photo_small').index(this) + 1;//show index ++            
        if(next == $('.photo_small').length) next=0; //avoid index out of range            
           
		//auto click next photo after 3s
		timer=setTimeout(function(){
			$('.photo_small')[next].click()
		}, 3000);	
	})
	
	$('.photo_small')[0].click();
	
	
});
function sign_up(){
	
	if($("#password").val().length > 25){
		alert('Your password is too long! Need less than 25.');
		return false;
	}
	if($("#email").val().length >25){
		alert('Your email is too long! Need less than 25.');
		return false;
	}	
	if($("#realname").val().length >25){
		alert('Your Real name is too long! Need less than 25.');
		return false;
	}
	if($("#password").val().length == 0 || $("#password").val() != $("#check_password").val()){
		alert('Your password is not equal!');
		return false;
	}	
	
	return true;
	
}

