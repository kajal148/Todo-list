var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

document.getElementById('date').textContent = today;

$("ul").on('click', 'li', function(){
	$(this).toggleClass("completed")
})

//click on x to delete

$('ul').on('click', 'span', function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if(event.which==13){
		var text = $(this).val()
		$('ul').append("<li><span><i class='fa fa-trash'></i></span>"+text+"</li>")
		$(this).val("")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});