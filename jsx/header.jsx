(function(views){

  views.Header = React.createBackboneClass({

    beerList: function(e) {
      e.preventDefault();
      this.props.onShowBeers();
    },

    categoryList: function(e) {
      e.preventDefault();
      this.props.onShowCategories();
    },

    breweryList: function(e) {
      e.preventDefault();
      this.props.onShowBreweries();
    },

    locationList: function(e) {
      e.preventDefault();
      this.props.onShowLocations();
    },

    blog: function(e) {
      e.preventDefault();
      this.props.onShowBlog();
    },

    favorites: function(e) {
      e.preventDefault();
      this.props.onShowUserInfo();
    },

    render: function(){
      return (
        <div className="header-wrapper">
          <div className="header-upper">
            <div className= "logo">
              <img src="images/BreweryBeeLogo4.svg" alt="Brewery Bee"/>
            </div>
            <div className="login">
              <div>
               <views.TwitterLogin model={this.props.model}/>
              </div>
            </div>
          </div>
          <div className="header-nav">
            <ul className="primary-nav">
            <li><a href="#">Home</a></li>
            <li>Find a Beer
              <ul className="secondary-nav">
                  <li><a href="#" onClick={this.beerList}>List by Name</a></li>
                  <li><a href="#" onClick={this.categoryList}>List by Category</a></li>
              </ul>
            </li>
            <li>Find a Brewery
              <ul className="secondary-nav">
                <li><a href="#" onClick={this.breweryList}>List by Name</a></li>
                <li><a href="#" onClick={this.locationList}>List by Location</a></li>
              </ul>
            </li>
            {/*<li><a href="#" onClick={this.blog}>Blog</a></li>*/}
            <li><a href="#" onClick={this.favorites}>Favorites</a></li>
          </ul>
          </div>
        </div>
      );
    }
  });

})(tiy.views);