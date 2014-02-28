<div ng-include src="'views/header.tpl'"></div>
<div id="main_content" class="container" ng-class="{'move_up' : !clicked, 'move_down' : clicked}">

  <aside id="sidebar_nav" class="one-third column">
	<div id="account_info">
	  <div class="account_img">
	    <img src="{{loginObject.user.profile_image_url}}"></a>
	  </div>
	  <h3>{{currentUser.name}}</h3>
	  <div class="clear_fix"></div>
	</div>
	<ul>
	  <li class="divider"></li>
	  <li><a href="#/edit/{{currentUser.id}}">EDIT PROFILE</a></li>
	  <li class="divider"></li>
	  <li><a href="#/studio/{{currentUser.id}}">YOUR STUDIO</a></li>
	  <li class="divider"></li>
	  <li><a ng-controller="LogoutCtrl" ng-click="logoutUser()">LOGOUT</a></li>
	  <li class="divider"></li>
	</ul>
	</aside>

	<form id="search_mobile">
	<input type="text" placeholder="Search for a skill..." ng-model="$root.searchKeywords" id="search" ng-enter="search()">
	</form>

	<section id="results" class="two-thirds column">

		<h2>Your Studio</h2>

		<article class="result" ng-repeat="item in studioUsers">
			<div class="user_img">
				<img ng-src="{{item.imgUrl}}">
			</div>
			<div class="user_info">
				<ul class=" less">
					<li><h3>{{item.name}}</h3></li>
					<li ng-show="item.age"><span class="info_label">A:</span> {{item.age}} years old</li>
					<li ng-show="item.location"><span class="info_label">L:</span> {{item.location}}</li>
					<li ng-show="item.email"><span class="info_label">E:</span> {{item.email}}</li>
				</ul>
				<ul class="more">
					<li ng-show="item.phone"><span class="info_label">P:</span> {{item.phone}} </li>
					<li ng-show="item.skills" class="divide_info"><span class="info_label">S:</span> {{item.skills}}</li>
					<li ng-show="item.genre"><span class="info_label">G:</span> {{item.genre}} </li>
					<li>
						<ul class="social_icons">
							<li ng-show="item.facebook"><a href="http://facebook.com/{{item.facebook}}"><img src="images/facebook-icon.png" alt="facebook"></a></li>
							<li ng-show="item.twitter"><a href="http://twitter.com/{{item.twitter}}"><img src="images/twitter-icon.png" alt="twitter"></a></li>
							<li ng-show="item.youtube"><a href="{{item.youtube}}"><img src="images/youtube-icon.png" alt="youtube"></a></li>
							<li ng-show="item.soundcloud"><a href="http://soundcloud.com/{{item.soundcloud}}"><img src="images/soundcloud-icon.png" alt="soundcloud"></a></li>
						</ul>
					</li>
				</ul>
			</div>
			<!-- <div class="heart" ng-click="myStyle={opacity:'1'}" ng-style="myStyle"> -->
			<div class="heart" ng-class="{'darker' : currentUser.studio[item.id]}">
				<img src="images/heart-btn.png" ng-click="addToStudio(item)">
			</div>
			<div class="clear_fix"></div>
		</article>  <!-- end ressult -->

	</section> <!-- end results -->

</div><!-- end main_content -->
