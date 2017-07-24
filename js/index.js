
$(function(){
//    顶部下拉菜单
    $(".top-xiala").each(function (a,b) {
        $(this).click(function () {
            $(".showList").eq(a).slideDown()
        })
    })
    $(".showList dd").click(function () {
        $(".showList").slideUp()
    })
    $(".showList").parent().mouseleave(function () {
        $(".showList").slideUp()
    })
    
    
    $(".btn1").click(function(){
			$(":checkbox").prop("checked","checked");
	})
	//全不选
	$(".btn2").click(function(){
		$(":checkbox").prop("checked","");
	})
	//反选
	$(".btn3").click(function(){
		var arr=$(":checkbox");
		for(var i=0;i<arr.length;i++){
			arr[i].checked=!arr[i].checked;
		}
	})
	
	$('.searchTxt').click(function(){
		$('.scarchBox ul').slideToggle(100)
	})
	$('.tab_title>li').click(function(){
		$('.tab_title>li').removeClass('active');
		$(this).parent().next().children(".item").removeClass('show')
		$(this).addClass('active');
		$(this).parent().next().children(".item").eq($(this).index()).addClass('show');
	})
	$('.contNav_item').click(function(){
		$('.contNav_item').removeClass('active');
		$(this).parent().next().children(".tabs_item").removeClass('show')
		$(this).addClass('active');
		$(this).parent().next().children(".tabs_item").eq($(this).index()).addClass('show');
	})
	function run(tab){
		$(tab).click(function(){
			$(tab).removeClass('active');
			$(this).parent().parent().next().children(".tabs_item").removeClass('show')
			$(this).addClass('active');
			$(this).parent().parent().next().children(".tabs_item").eq($(this).index()).addClass('show');
	
		})
	}
	run('.day a');
	run('.comTitle_tabs>li');
})
