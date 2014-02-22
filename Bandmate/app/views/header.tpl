<header>
  <div id="main_header">
    <div class="container">
      <div id="logo">
        <a href="#/studio"><h1>Bandmate</h1></a>
      </div>
      <div id="menu">
        <a href="#/studio"><img src="images/menu-btn.png" alt="Menu"></a>
      </div>
      <form id="search_desktop" class="seven columns">
        <input type="text" placeholder="Search for a skill..." ng-model="searchKeywords" id="search" ng-controller="SearchCtrl" ng-enter="search()">
      </form>
    </div>
  </div> <!-- end main_header -->

  <!-- desktop nav -->

  <nav>
    <ul id="mobile">
      <li class="divider"></li>
      <li class="user container"> {{currentUser.name}} </li>
      <li class="divider"></li>
      <li class="container"><a href="#/edit/{{currentUser.id}}">EDIT PROFILE</a></li>
      <li class="divider"></li>
      <li class="container"><a href="#/studio">YOUR STUDIO</a></li>
      <li class="divider"></li>
      <li class="container"><a ng-controller="LogoutCtrl" ng-click="logoutUser()">LOGOUT</a></li>
      <li class="divider"></li>
    </ul>
  </nav>
</header>