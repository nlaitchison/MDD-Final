<div ng-include src="'views/header.tpl'"></div>
<div id="main_content" class="container">

  <aside id="sidebar_nav" class="one-third column">
	<div id="account_info">
	  <div class="account_img">
	    <img src="{{loginObject.user.profile_image_url}}"></a>
	  </div>
	  <h3>{{loginObject.user.name}}</h3>
	  <div class="clear_fix"></div>
	</div>
	<ul>
	  <li class="divider"></li>
	  <li><a href="#/edit/{{loginObject.user.provider}}{{loginObject.user.id}}">EDIT PROFILE</a></li>
	  <li class="divider"></li>
	  <li><a href="#/studio">YOUR STUDIO</a></li>
	  <li class="divider"></li>
	  <li><a ng-controller="LogoutCtrl" ng-click="logoutUser()">LOGOUT</a></li>
	  <li class="divider"></li>
	</ul>
	</aside>

	<form id="search_mobile">
	<input type="text" placeholder="Search for a skill..." ng-model="$root.searchKeywords" id="search" ng-enter="search()">
	</form>

	<section id="edit" class="two-thirds column">
		<h2> Edit Profile </h2>
		<form id="edit_form" ng-submit="save()">
			<fieldset>
				<div class="form_input">
					<label for="name">Name</label>
					<input id="name" type="text" required="required" autofocus="autofocus" name="name" placeholder="Name" ng-model="user.name">
				</div>
				<div class="form_input">
					<label for="age">Age</label>
					<input id="age" type="number" required="required" autofocus="autofocus" name="age" placeholder="Age ex. 22" ng-model="user.age">
				</div>
				<div class="form_input">
					<label for="location">Location</label>
					<input id="location" type="text" required="required" autofocus="autofocus" name="location" placeholder="City, State" ng-model="user.location">
				</div>
				<div class="form_input">
					<label for="email">Email</label>
					<input id="email" type="text" required="required" autofocus="autofocus" name="email" placeholder="example@domain.com" ng-model="user.email">
				</div>
				<div class="form_input">
					<label for="phone">Phone</label>
					<input id="phone" type="number" autofocus="autofocus" name="phone" placeholder="1234567890" ng-model="user.phone">
				</div>
			</fieldset>
			<fieldset>
				<div class="form_input">
					<label for="skills">Skills</label>
					<input id="skills" type="text" autofocus="autofocus" name="skills" placeholder="ex. guitar, vocals, piano" ng-model="user.skills">
				</div>
				<div class="form_input">
					<label for="genres">Genres</label>
					<input id="genres" type="text" autofocus="autofocus" name="genres" placeholder="ex. indie, alternative" ng-model="user.genre">
				</div>
			</fieldset>
			<fieldset>
				<div class="form_input">
					<label for="facebook">facebook.com/</label>
					<input id="facebook" type="text" autofocus="autofocus" name="facebook" placeholder="example123" ng-model="user.facebook">
				</div>
				<div class="form_input">
					<label for="twitter">twitter.com/</label>
					<input id="twitter" type="text" autofocus="autofocus" name="twitter" placeholder="example123" ng-model="user.twitter">
				</div>
				<div class="form_input">
					<label for="soundcloud">soundcloud.com/</label>
					<input id="soundcloud" type="text" autofocus="autofocus" name="soundcloud" placeholder="example123" ng-model="user.soundcloud">
				</div>
				<div class="form_input">
					<label for="youtube">YouTube</label>
					<input id="youtube" type="text" autofocus="autofocus" name="youtube" placeholder="ex. http://www.youtube.com/channel/example123" ng-model="user.youtube">
				</div>
			</fieldset>
			<fieldset class="buttons">
				<input type="submit" class="save_profile" value="Save Profile">
				<input type="submit" class="cancel" value="Cancel">
			</fieldset>
		</form>

	</section> <!-- end edit -->

</div><!-- end main_content -->
