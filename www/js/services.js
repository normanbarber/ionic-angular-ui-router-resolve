'use strict';
angular.module('musiclibrary.services',[])
	.factory('musicLibraryService', [function() {
		var music = {
			data: [
				{song:'Carry The Zero', album: 'Keep It Like A Secret', artist: 'Built To Spill', released: '1999', details: 'Im not knocking your want / to carry that home / took it with you / when you moved and got it broke', img: 'img/ionic.png', count:1},
				{song:'You Were Right', album: 'Keep It Like A Secret', artist: 'Built To Spill', released: '1999', details: 'You were wrong when you said / Everythings gonna be alright / Yeah, you were right when you said / Everythings gonna be alright', img: 'img/ionic.png', count:1},
				{song:'Big Dipper', album: 'Theres Nothing Wrong With Love', artist: 'Built To Spill', released: '1994', details: 'Bottoms up and this time, wont you let me be? / Bottled up but this time, wont you rescue me? / You should have been here last night / And heard what the big dipper said to me', img: 'img/ionic.png', count:1},
				{song:'The Plan', album: 'Keep It Like A Secret', artist: 'Built To Spill', released: '1999', details: 'The plan keeps coming up again / The plan means nothing stays the same / But the plan wont accomplish anything / If its not implemented', img: 'img/ionic.png', count:1},
				{song:'Car', album: 'Theres Nothing Wrong With Love', artist: 'Built To Spill', released: '1994', details: '', img: 'img/ionic.png', count:1},
				{song:'Range Life', album: 'Crooked Rain, Crooked Rain', artist: 'Pavement', released: '1994', details: 'I want a range life if I could settle down / If I could settle down then I would settle down / I want a range life if I could settle down / If I could settle down then I would settle down...', img: 'img/ionic.png', count:1},
				{song:'Stop Breathin', album: 'Crooked Rain, Crooked Rain', artist: 'Pavement', released: '1994', details: '', img: 'img/ionic.png', count:1},
				{song:'Swallow', album: 'Into The Vortex', artist: 'Hammerhead', released: '1994', details: '', img: 'img/ionic.png', count:1},
				{song:'Award Tour', album: 'Midnight Marauders', artist: 'A Tribe Called Quest', released: '1993', details: 'We on Award Tour with Muhammad my man / Going each and every place with the mic in their hand / New York, NJ, N.C., VA / We on Award Tour with Muhammad my man...', img: 'img/ionic.png', count:1},
				{song:'I Left My Wallet In El Segundo', album: 'Peoples Instinctive Travels and the Paths of Rhythm', artist: 'A Tribe Called Quest', released: '1990', details: 'Left my wallet in El Segundo / Left my wallet in El Segundo / Left my wallet in El Segundo / I gotta get, I got-got ta get it...', img: 'img/ionic.png', count:1},
				{song:'Mr. Suit', album: '!!Destroy-Oh-Boy!!', artist: 'New Bomb Turks', released: '1993', details: 'The New Bomb Turks are an American punk rock band formed at the Ohio State University in Columbus, Ohio in 1990. The founding members are Jim Weber, Eric Davidson, Bill Randt, and Matt Reber. Sam Brown replaced Bill Randt on drums in 1999', img: 'img/ionic.png', count:1},
				{song:'Rebirth Of The Cool', album: 'Uptown Avondale', artist: 'Afghan Whigs', released: '1992', details: '', img: 'img/ionic.png', count:1}]
		};

		return {
			getAll: function() {
				return music.data
			}
		}
	}])
