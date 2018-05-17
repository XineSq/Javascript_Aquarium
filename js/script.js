
$(document).ready(function () {
    moveAround1();
	moveAround2();
	moveBubble1();
	moveBubble2();
	moveBubble3();


});
//orange fish destination
$(document).on('click', function(event) {
	$("#fish1Id").stop();
	var x = event.pageX;
	var y = event.pageY;
	$("#fish1Id").animate({left:x,top:y},1000,function () {
            moveAround1()
        });
});
//fish running away from cursor
$("#fish2Id").on("mouseenter", function(event){
	$("#fish2Id").stop();
	var h = $(window).height() - 50;
	var w = $(window).width() - 50;
	var nh = Math.floor(Math.random() * h);
	var nw = Math.floor(Math.random() * w);
	$("#fish2Id").animate({left:nw,top:nh},1000,function () {
            moveAround2()
        });
});
//orange fish become bigger
$("#fish1Id").dblclick(function () {
    $("#fish1Id").stop();
    $("#fish1Id").animate({width: 350,height: 350}, 1000).
    delay(500).animate({width: 250,height: 250}, function () {
            moveAround1()
        });

});
// orange fish move randomly
function moveAround1() {
    var height = $(window).height() - 250;
    var width = $(window).width() - 250;
    var y = Math.floor((Math.random() * height));
    var x = Math.floor((Math.random() * width));
    $("#fish1Id").animate({
            left: x,
            top: y
        }, 3000,
        function () {
            moveAround1()
        });


};
//blue fish move randomly
function moveAround2() {
    var height = $(window).height() - 250;
    var width = $(window).width() - 250;
    var y = Math.floor((Math.random() * height));
    var x = Math.floor((Math.random() * width));
    $("#fish2Id").animate({
            left: x,
            top: y
        }, 3000,
        function () {
            moveAround2()
        });


};
$('#bubble1Id').hide();
$('#bubble2Id').hide();
$('#bubble3Id').hide();
//moving bubbles
function moveBubble1(){
	var width = $(window).width() - 100;
	var height = $(window).height();
	var x = Math.floor((Math.random() * width));
	var speed = 3000 + Math.floor((Math.random() * 3000));
	$('#bubble1Id').css({
    	position: 'absolute',
    	left: x,
    	top: height -100
	}).show().animate({top:0},speed,
			function () {
            moveBubble1()
    });
};
function moveBubble2(){
	var width = $(window).width() - 100;
	var height = $(window).height();
	var x = Math.floor((Math.random() * width));
	var speed = 3000 + Math.floor((Math.random() * 3000));
	$('#bubble2Id').css({
    	position: 'absolute',
    	left: x,
    	top: height -100
	}).show().animate({top:0},speed,
			function () {
            moveBubble2()
    });
};

function moveBubble3(){
	var width = $(window).width() - 100;
	var height = $(window).height();
	var x = Math.floor((Math.random() * width));
	var speed = 3000 + Math.floor((Math.random() * 3000));
	$('#bubble3Id').css({
    	position: 'absolute',
    	left: x,
    	top: height -100
	}).show().animate({top:0},speed,
			function () {
            moveBubble3()
    });
};
//fading bubbles
$('#bubble1Id').click(function(event){
    $(this).stop(true);
    moveBubble1();
});
$('#bubble2Id').click(function(event) {
   	$(this).stop(true);
    moveBubble2();
});
$('#bubble3Id').click(function(event){
    $(this).stop(true);
    moveBubble3();
});












