/*
@Brian/ Whomever it may concern:
To remove a member, just take it off the list. 
IMPORTANT: DO NOT ADD A COMMA TO THE LAST ITEM ON THE LIST. IT WILL CAUSE AN ERROR.
Otherwise, add a comma to the new show. 
*/

var members = [
 {"name": "Louis Smith", "role": "Vocals/Guitar" , "picture": "img/website_photos/Louis_Pic.jpg", "bio": 
 "Born and raised in Virginia Beach, Louis Smith moved to Charlottesville in 2012 and founded Kendall Street Company the following year." },
 {"name": "Brian Roy", "role": "Bass" , "picture": "img/website_photos/Brian_Pic.jpg", "bio": 
 "Brian Roy is a Charlottesville-based musician. He plays upright, electric, and acoustic basses and provides occasional backup vocals." },
 {"name": "Andrew Drehoff" ,"role": "Sax", "picture": "img/website_photos/Andrew_Pic.jpg", "bio":
  "Andrew Drehoff played the saxophone in Virginia Beach before moving to Charlottesville, where he provides Kendall Street Company with some of the best horn playing in town."},
 {"name": "Ryan Wood", "role": "Drums", "picture": "img/website_photos/Ryan_Pic.jpg", "bio":
"Ryan Wood is a drummer from the Washington, DC metropolitan area. He moved to Charlottesville in 2011, joining Kendall Street Company two years later."}

];

var update_members= function(){
	$("#member-boxes .span5").remove();
	$.each(members, function(index, member){
		var html = build_member_html(member);
	//	console.log(html);
	$("#member-boxes").append(html);
	}); 
}

function build_member_html(member){
	var html = '<div class="span5"><div><h4 style="text-align: center;">' + member.name + '</h4></div>  <div class="thumbnail">'
		+ '<img class="img-circle" src="' + member.picture + '" style="height:225px; width:220px;">' +
        '<div class="caption"><p>' +  member.bio	+ '</p></div></div>'+ '</div>' ;
	return html;
}