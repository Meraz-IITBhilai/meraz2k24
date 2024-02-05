import {goto} from "$app/navigation"
import scitechData from "$lib/data/scitech.json"
import culturalData from "$lib/data/culturals.json"

export function load({ params }) {
	if(params.type !== 'scitech' && params.type !== 'culturals'){
		return "404";
	}
	let eventsData = params.type === "scitech" ? scitechData : culturalData;
	for (var i = 0; i < eventsData.length; i++){
		let myEvent = eventsData[i];

		if (myEvent.id === params.event){ 
			return myEvent
		}
	}
	return "404";
}
