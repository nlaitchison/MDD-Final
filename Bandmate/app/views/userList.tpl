<section id="results" class="two-thirds column">

	<!-- <button ng-click="saveData()">save</button> -->

	<h2>Your Studio</h2>

	<article class="result" ng-repeat="($id, item) in users">
		<div class="user_img">
			<img ng-src="{{item.imgUrl}}">
		</div>
		<div class="user_info">
			<ul class=" less">
				<li><h3>{{item.name}}</h3></li>
				<li><span class="info_label">A:</span> {{item.age}} years old</li>
				<li><span class="info_label">L:</span> {{item.location}}</li>
				<li><span class="info_label">E:</span> {{item.email}}</li>
			</ul>
			<ul class="more">
				<li><span class="info_label">P:</span> {{item.phone}} </li>
				<li class="divide_info"><span class="info_label">S:</span> {{item.skills}}</li>
				<li><span class="info_label">G:</span> {{item.genre}} </li>
				<li>
					<ul class="social_icons">
						<li><a href="http://facebook.com/{{item.facebook}}"><img src="images/facebook-icon.png" alt="facebook"></a></li>
						<li><a href="http://twitter.com/{{item.twitter}}"><img src="images/twitter-icon.png" alt="twitter"></a></li>
						<li><a href="{{item.youtube}}"><img src="images/youtube-icon.png" alt="youtube"></a></li>
						<li><a href="http://soundcloud.com/{{item.name}}"><img src="images/soundcloud-icon.png" alt="soundcloud"></a></li>
					</ul>
				</li>
			</ul>
		</div>
		<div class="heart">
			<img src="images/heart-btn.png">
		</div>
		<div class="clear_fix"></div>
	</article>  <!-- end ressult -->

</section> <!-- end results -->
