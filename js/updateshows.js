/*
@Brian/ Whomever it may concern:
To remove a show, just take it off the list. 
IMPORTANT: DO NOT ADD A COMMA TO THE LAST ITEM ON THE LIST. IT WILL CAUSE AN ERROR.
Otherwise, add a comma to the new show. 
*/
var shows = [

{"date": "Every other Wednesday", "time": "9pm-12pm", "place": " Abbey Road Pub, Virginia Beach"},
{"date": "Every Thursday", "time": "9pm - 1", "place": "Bayside Bar, Virginia Beach"},
{"date": "6/6", "time": "9:30pm-1:30", "place": "Abbey Road Pub, Virginia Beach"},
{"date": "6/20", "time": "10:30pm - 1:30", "place": "Miller's Downtown, Charlottesville"},
{"date": "6/21", "time": "", "place": "Private Party"},
{"date": "7/5", "time": "9:30pm - 1:30", "place": "Abbey Road Pub, Virginia Beach"},
{"date": "7/12", "time": "10pm-2", "place": "Crozet Pizza, Charlottesville"},
{"date": "7/18", "time": "10pm - 2", "place": "Boylan Heights, Charlottesville"},
{"date": "7/19", "time": "9pm-12", "place": "Froggies Cantina, Virginia Beach"},
{"date": "7/26", "time": "9:30pm - 1:30", "place": "Abbey Road Pub, Virginia Beach"},
{"date": "8/15", "time": "9:30pm - 1:30", "place": "Abbey Road Pub, Virginia Beach"},
{"date": "8/16", "time": "9:30pm - 1:30", "place": "Abbey Road Pub, Virginia Beach"},
{"date": "8/22", "time": "10:30pm - 1:30", "place": "Miller's Downtown, Charlottesville"}

];

var update_shows = function(){
	$("#show-list .list-inline li").remove();
	$.each(shows, function(index, show){
		$("#show-list .list-inline").append('<li><span class="main_nav">' + show.date +', ' + show.time + ', ' + show.place
				+'</span></li>');
	});
}