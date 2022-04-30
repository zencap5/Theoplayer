<!-- Chromecast SDK -->
<script type="text/javascript" src="//www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"></script>
<!-- THEOplayer library and css -->
<script type="text/javascript" src="https://cdn.myth.theoplayer.com/64a78580-bcca-4e30-b693-1e50b596d8f6/THEOplayer.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.myth.theoplayer.com/64a78580-bcca-4e30-b693-1e50b596d8f6/ui.css" />
<!-- CSS customization style -->
<style>
/* Customization css style */
  .theo-primary-color,
  .vjs-selected 
    {
    color: #ffffff !important;
    }
  .theo-primary-background 
    {
    color: #000000 !important;
    background-color: #000000 !important;
    }
  .theo-primary-color, .vjs-selected 
    {
    color: #FFFFFF!important;
		}
</style>

<div class="theoplayer-container video-js theoplayer-skin vjs-16-9"></div>
    <script>
        var element = document.querySelector(".theoplayer-container");
        var player = new THEOplayer.Player(element, {
            libraryLocation: "https://cdn.myth.theoplayer.com/64a78580-bcca-4e30-b693-1e50b596d8f6",
            license: "sZP7IYe6T6frCK31CSet3mzo0S36FSacCSa-TSetC6keCSIeIQfk3o0oCDC6FOPlUY3zWokgbgjNIOf9fKCLCDaoTu4lFS363KB-3uXlTmk1CKC_FSCtIKhrIlfi3SI6I6fVfK4_bQgZCYxNWoryIQXzImf90SCzTSCt0Sfi0u5i0Oi6Io4pIYP1UQgqWgjeCYxgflEc3laz3uh_3uCz0LbLFOPeWok1dDrLYtA1Ioh6TgV6v6fVfKcqCoXVdQjLUOfVfGxEIDjiWQXrIYfpCoj-fgzVfKxqWDXNWG3ybojkbK3gflNWf6E6FOPVWo31WQ1qbta6FOPzdQ4qbQc1sD4ZFK3qWmPUFOPLIQ-LflNWfK1zWDikfgzVfG3gWKxydDkibK4LbogqW6f9UwPkIYz",
        mutedAutoplay: "all"
        //MutedAutoplayConfiguration = 'none' | 'all' | 'content';
        });
				player.autoplay = true;
        // OPTIONAL CONFIGURATION
				//https://docs.theoplayer.com/api-reference/web/theoplayer.chromelessplayer.md#a-idautoplayaautoplay
        // Customized video player parameters
        player.source = {
            sources: [{
                "src": "https://cdn3.wowza.com/1/UEFudmh0MmhFNS9P/d1duK1VN/hls/live/playlist.m3u8",
                "type": "application/x-mpegurl"
            }],
            // Poster image
            poster: ""
        };
 			  player.preload = preload;      
    </script>
