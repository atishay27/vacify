const url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=195&date=03-05-2021";
printData = "<table><td>CENTER NAME</td><td>PINCODE</td><td>AVAILABLE DOSES</td><td>EARLIEST-DATE</td>";
var count = 0;
async function getCenter(api_url){
	const response = await fetch(api_url,{cache: "reload"});
	const data = await response.json();
	data.centers.forEach(disp);
	if(count>0){
		console.log("DATA FOUND");
	}else{
		console.log("DATA NOT FOUND");
	}
}
function disp(val){
	var filtered_data = {
		centerID : val.center_id,
		centerName : val.name,
		pincode : val.pincode,
	};
	parseData(val.sessions,filtered_data);
}
function parseData(all_sess,filtered_data){
	var len = all_sess.length;
	for (var i = 0; i < len; i++) {
		if(all_sess[i].available_capacity>0 && all_sess[i].min_age_limit==18){
			Object.assign(filtered_data, {availableCapacity: all_sess[i].available_capacity,minAge : all_sess[i].min_age_limit, date: all_sess[i].date});
			console.log(filtered_data);
			addPrintData(filtered_data);
			count = count + 1;
			break;
		}
	}
}
function addPrintData(filtered_data){
	var newLine = "<td>"+filtered_data.centerName+"</td>"+"<td>"+filtered_data.pincode+"</td>"
}
getCenter(url);