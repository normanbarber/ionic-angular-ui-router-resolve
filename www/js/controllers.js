'use strict';
angular.module('musiclibrary.controllers', [])
	.controller('musicSongListController', ['$scope', 'musicService',
		function(scope,  musicService) {
			console.log('init musicSongListController');
			scope.songlist = musicService;
		}
	])
	.controller('musicBandListController', ['$scope', 'musicService',
		function(scope, musicService) {
			console.log('init musicBandListController');
			scope.artists = _.uniq(musicService, 'artist');
		}
	])
	.controller('musicArtistDetailsController', ['$scope',  '$location', '$stateParams', 'musicService',
		function(scope, location, $stateParams, musicService) {
			console.log('init musicArtistDetailsController');
			scope.artists = musicService;
			var key = _.findIndex(scope.artists,{song:$stateParams.song});
			var category = scope.artists[key].category;
			scope.artist = scope.artists[key];
			scope.imageuri = scope.artist.img;
		}
	]);
