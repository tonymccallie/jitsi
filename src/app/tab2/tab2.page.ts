import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import 'capacitor-jitsi-meet';
const { Jitsi } = Plugins;

@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

	constructor() {
		this.init();
	}

	async init() {
		const result = await Jitsi.joinConference({
			roomName: 'room1', // room identifier for the conference
			url: 'https://meet.jit.si', // endpoint of the Jitsi Meet video bridge
			channelLastN: '-1', // default -1. see config.js for more info on the last n feature
			startWithAudioMuted: true, // start with audio muted
			startWithVideoMuted: false // start with video muted
		});
		window.addEventListener('onConferenceJoined', () => {
			console.log('onConferenceJoined');
		});
		window.addEventListener('onConferenceLeft', () => {
			console.log('onConferenceLeft');
		});
	}
}
