angular.module('musiclibrary', ['ionic', 'musiclibrary.controllers', 'musiclibrary.services'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('musiclibrary', {
			url: '/musiclibrary',
			abstract: true,
			templateUrl: "templates/music.html"
		})
		.state('musiclibrary.songs', {
			url: '/musicsongs',
			cache: false,
			views: {
				'musiclibrary-songs': {
					templateUrl: 'templates/music-songs.html',
					controller: 'musicSongListController',
					resolve : {
						musicService : function(musicLibraryService) {
							return musicLibraryService.getAll();
						}
					}
				}
			}
		})
		.state('musiclibrary.musicdetails', {
			  url: '/musicsongs/:song',
			  views: {
				  'musiclibrary-songs': {
					  templateUrl: 'templates/music-details.html',
					  controller: 'musicArtistDetailsController',
					  resolve : {
						  musicService : function(musicLibraryService) {
							  return musicLibraryService.getAll();
						  }
					  }
				  }
			  }
		})
		.state('musiclibrary.bands', {
			url: '/musicbands',
			cache: false,
			views: {
				'musiclibrary-bands': {
					templateUrl: 'templates/music-bands.html',
					controller: 'musicBandListController',
					resolve : {
						musicService : function(musicLibraryService) {
							return musicLibraryService.getAll();
						}
					}
				}
			}
		})
		.state('musiclibrary.bands-songlist', {
			url: '/musicbands/:song',
			views: {
				'musiclibrary-bands': {
					templateUrl: 'templates/music-songs.html',
					controller: 'musicSongListController',
					resolve : {
						musicService : function(musicLibraryService,$stateParams) {
							var artists = musicLibraryService.getAll();
							return _.filter(artists, function(artist){
								return artist.artist === $stateParams.song;
							})

						}
					}
				}
			}
		})
		$urlRouterProvider.otherwise('/musiclibrary/musicsongs');

});
