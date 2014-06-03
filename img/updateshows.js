/*
@Brian/ Whomever it may concern:
To remove a show, just take it off the list. 
IMPORTANT: DO NOT ADD A COMMA TO THE LAST ITEM ON THE LIST. IT WILL CAUSE AN ERROR.
Otherwise, add a comma to the new show. 
*/
var shows = [
{"date": "April 11", "time": "4-7", "place": "Private Event" },
{"date": "April 11", "time": "", "place": "Boylan Heights"},
{"date": "April 12", "time:": "2:30-5:30", "place": "Private Event"},
{"date": "April 12", "time": "8-12", "place": "Private Event"},
{"date": "April 17", "time": "10:30pm-2am", "place": "Private Event"},
{"date": "April 25", "time": "1-3", "place": "Private Event"},
{"date": "April 25", "time": "6-7", "place": "Private Event"}
];

var update_shows = function(){
	$("#show-list .list-inline li").remove();
	$.each(shows, function(index, show){
		$("#show-list .list-inline").append('<li><span class="main_nav">' + show.date +', ' + show.time + ', ' + show.place
				+'</span></li>');
	});
}