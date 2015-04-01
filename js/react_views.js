(function(views){

  views.TwitterLoggedIn = React.createClass({displayName: "TwitterLoggedIn",

    render: function(){
      return (
        React.createElement("div", {className: "logged-in", onClick: tiy.logout.bind(tiy)}, 
          React.createElement("img", {className: "profile-image", src: this.props.img, alt: ""}), 
          " ", 
          React.createElement("span", null, this.props.name), 
          " ", 
          React.createElement(views.Icon, {fa: "sign-out"})
        )
      );
    }

  });//calling logout from tiy.js file

  views.TwitterNotLoggedIn = React.createClass({displayName: "TwitterNotLoggedIn",

    render: function(){
      return (
        React.createElement("div", {className: "not-logged-in", onClick: tiy.twitterLogin.bind(tiy)}, 
          React.createElement("span", null, "Sign In With Twitter"), 
          " ", 
          React.createElement(views.Icon, {fa: "twitter"})
        )
      );
    }

  });//calling twitterLogin from tiy.js file

  views.TwitterLogin = React.createBackboneClass({
    getChild: function(){
      if (this.props.model.id) {
        var name = this.props.model.get("name");
        var img = this.props.model.get("profile_image_url");
        return React.createElement(views.TwitterLoggedIn, {name: name, img: img})
      } else {
        return React.createElement(views.TwitterNotLoggedIn, null)
      }
    },

    render: function(){
      return (
        React.createElement("div", {className: "twitter-login"}, 
        this.getChild()
        )
      );
    }
  });

  views.Header = React.createBackboneClass({
    render: function(){
      return (
        React.createElement("div", null, 
          React.createElement("div", {className: "logo"}, "Taskify"), 
          React.createElement(views.TwitterLogin, {model: this.props.model})
        )
      );
    }
  });

})(tiy.views);

  // views.FacebookLoggedIn = React.createClass({

  //   render: function(){
  //     return (
  //       <div className="logged-in" onClick={tiy.logout.bind(tiy)}>
  //         <img className="profile-image" src={this.props.img} alt=""/>
  //         {" "}
  //         <span>{this.props.name}</span>
  //         {" "}
  //         <views.Icon fa="sign-out"/>
  //       </div>
  //     );
  //   }

  // });//calling logout from tiy.js file

  // views.FacebookNotLoggedIn = React.createClass({

  //   render: function(){
  //     return (
  //       <div className="not-logged-in" onClick={tiy.facebookLogin.bind(tiy)}>
  //         <span>Sign In With FaceBook</span>
  //         {" "}
  //         <views.Icon fa="facebook"/>
  //       </div>
  //     );
  //   }

  // });//calling twitterLogin from tiy.js file

  // views.FacebookLogin = React.createBackboneClass({
  //   getChild: function(){
  //     if (this.props.model.id) {
  //       var name = this.props.model.get("name");
  //       var img = this.props.model.get("profile_image_url");
  //       return <views.FacebookLoggedIn name={name} img={img}/>
  //     } else {
  //       return <views.FacebookNotLoggedIn/>
  //     }
  //   },

  //   render: function(){
  //     return (
  //       <div className="facebook-login">
  //       {this.getChild()}
  //       </div>
  //     );
  //   }
  // });

// })(tiy.views);

//------ console ------ //

//tiy.views;
// tiy.init();
// var c = tiy.views.TwitterLoggedIn;
// var elem = React.createElement(c, {name: "jd", img: "http://lorempixel.com/50/50"});
// React.render(elem, document.body);

// tiy.init();
// tiy.currentUser;
// var c = tiy.views.TwitterLogin;
// var elem = React.createElement(c, {model: tiy.currentUser});
// React.render(elem, document.body);

// tiy.logout();


(function(views){

  views.BeerDetail = React.createClass({displayName: "BeerDetail",
    render: function(){
      return(
        React.createElement("div", {className: "beer"}, 
          React.createElement("h3", null, "Beer: Saison Lafayette"), 
          React.createElement("div", {className: "beer_details"}, 
            React.createElement("ul", null, 
              React.createElement("li", null, "Description:"), 
              React.createElement("li", null, "ABV:"), 
              React.createElement("li", null, "Glassware:"), 
              React.createElement("li", null, "Style:")
            )
          ), 
          React.createElement("div", {className: "beer_image"}, 
            React.createElement("img", {src: "http://lorempixel.com/400/200/"})
          )
        )
      )
    }
  });

//Brewery Detail Information
  views.Brewery = React.createBackboneClass({
    render: function(){
      return (
          React.createElement("div", {className: "brewery"}, 
          React.createElement("h3", null, "Brewery: 3 Daughters Brewing"), 
          React.createElement("div", {className: "brewery_details"}, 
            React.createElement("ul", null, 
              React.createElement("li", null, "Address"), 
              React.createElement("li", null, "Address"), 
              React.createElement("li", null, "Phone"), 
              React.createElement("li", null, "Website")
            )
          ), 
          React.createElement("div", {className: "brewery_image"}, 
            React.createElement("img", {src: "http://lorempixel.com/400/200/"})
          )
        )
      );
    }
  });


})(tiy.views);
(function(views){

  views.Icon = React.createClass({displayName: "Icon",

    render: function() {
      //create font awesome class
      var cssClass= "fa fa-" + this.props.fa;
      //add spin effect
      if (this.props.spin){
        cssClass += " fa-spin";
      }
      return React.createElement("i", {className: cssClass})
    }

  });

  views.Toggle = React.createClass({displayName: "Toggle",
    render: function() {
     var icon = this.props.on ? "toggle-on" : "toggle-off";
      return(
        React.createElement("div", {className: "toggle", onClick: this.props.onToggle}, 
          React.createElement(views.Icon, {fa: icon})
        )
      );
    }
  });

  views.DeleteButton = React.createClass({displayName: "DeleteButton",
    onClick: function(e){
      e.preventDefault();
      e.stopPropagation();
      if(this.props.confirm){
        var confirmed = confirm(this.props.confirm);
        if(!confirmed){
          return;
        }
      }
      this.props.onDelete();
    },

    render: function(){
      return(
        React.createElement("div", {className: "delete-btn", onClick: this.onClick}, 
          React.createElement(views.Icon, {fa: "remove"})
        )
      );
    }
  });

  views.Breadcrumbs = React.createBackboneClass({

    onLinkClick: function(route, e){
      e.preventDefault();
      this.props.onRoute(route);
    },

    build: function(){
      return (this.props.data || []).map(function(crumb, index){
        return (
          React.createElement("a", {
          href: "#", 
          key: index, 
          onClick: this.onLinkClick.bind(this, crumb.route)}, 
            crumb.title
          )
        );
      }, this);
    },

    render: function(){
      if( !tiy.isLoggedIn() ){
        return React.createElement("div", null);
      } 
        return (
          React.createElement("div", {className: "breadcrumbs"}, 
            this.build()
          )
        );
      }
  });

})(tiy.views);
(function(views){

  views.Header = React.createBackboneClass({
    render: function(){
      return (
        React.createElement("div", {className: "header-wrapper"}, 
          React.createElement("div", {className: "header-upper"}, 
            React.createElement("div", {className: "logo"}, 
              React.createElement("h1", null, "Brewery Bee")
            ), 
            React.createElement("div", {className: "login"}, 
              React.createElement("div", null, 
               React.createElement(views.TwitterLogin, {model: this.props.model})
              )
            )
          )
        )
      );
    }
  });

})(tiy.views);
// // --------- HOME PAGE VIEW --------- //

// (function(views){

//   views.Home = React.createClass({
//     render: function(){
//       return (
//          <div className="index">
//           <div>
//             <h2>About Brewery Bee</h2>
//             <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
//             </p>
//           </div>
//           <div className="images">
//             <div className="image_left">
//               <img src="images/beer2.jpg" alt="brewery" />
//               <a href="#">Beer Name</a>
//             </div>
//             <div className="image_right">
//               <img src="images/beer4.jpg" alt="brewery" />
//               <a href="#">Beer Style</a>
//             </div>
//             <div className="image_left">
//               <img src="images/beer_bottles.jpg" alt="brewery" />
//               <a href="#">Brewery Name</a>
//             </div>
//             <div className="image_right">
//               <img src="images/beer3.jpg" alt="brewery" />
//               <a href="#">Brewery Location</a>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   });

//   views.Section = React.createClass({
//     render: function(){
//       return (
//           <views.Home/>
//       );
//     }
//   });

// })(tiy.views);
// ------------ Beer and Brewery Lists ------------ //
(function(views){

//Beer List information
  views.BeerList = React.createClass({displayName: "BeerList",
    render: function(){
      return(
        React.createElement("div", {className: "beer_list brewery_list"}, 
            React.createElement("table", null, 
              React.createElement("thead", null, 
                React.createElement("th", null, "Name"), 
                React.createElement("th", null, "Brewery"), 
                React.createElement("th", null, "Style")
              ), 
              React.createElement("tbody", null, 
                React.createElement("tr", null, 
                  React.createElement("td", null, "Saison Lafayette"), 
                  React.createElement("td", null, "Two Sisters"), 
                  React.createElement("td", null, "IPA")
                )
              )
            )
        )
      )
    }
  });

//Beer List information
  views.BreweryList = React.createClass({displayName: "BreweryList",
    render: function(){
      return(
        React.createElement("div", {className: "beer_list brewery_list"}, 
            React.createElement("table", null, 
              React.createElement("thead", null, 
                React.createElement("th", null, "Name"), 
                React.createElement("th", null, "City"), 
                React.createElement("th", null, "State")
              ), 
              React.createElement("tbody", null, 
                React.createElement("tr", null, 
                  React.createElement("td", null, "Two Sisters"), 
                  React.createElement("td", null, "St. Petersburg"), 
                  React.createElement("td", null, "Florida")
                )
              )
            )
        )
      )
    }
  });


  views.Search = React.createClass({displayName: "Search",
    render: function(){
      return (
        React.createElement("div", {className: "search"}, 
          React.createElement("form", {className: "search-form", action: "", method: ""}, 
            React.createElement("span", null), 
            React.createElement("input", {type: "text", className: "search-field", name: "search", placeholder: "enter keywords"}), 
            React.createElement("input", {type: "submit", className: "search-button", name: "submit", value: "Search"})
          )
        )
      )
    }
  });
  
  views.AlphabetList = React.createClass({displayName: "AlphabetList",
    render: function(){
      return (
        React.createElement("div", {className: "alphabet"}, 
          React.createElement("ul", null, 
            React.createElement("li", null, React.createElement("a", {href: "A"}, "A")), 
            React.createElement("li", null, React.createElement("a", {href: "B"}, "B")), 
            React.createElement("li", null, React.createElement("a", {href: "C"}, "C")), 
            React.createElement("li", null, React.createElement("a", {href: "D"}, "D")), 
            React.createElement("li", null, React.createElement("a", {href: "E"}, "E")), 
            React.createElement("li", null, React.createElement("a", {href: "F"}, "F")), 
            React.createElement("li", null, React.createElement("a", {href: "G"}, "G")), 
            React.createElement("li", null, React.createElement("a", {href: "H"}, "H")), 
            React.createElement("li", null, React.createElement("a", {href: "I"}, "I")), 
            React.createElement("li", null, React.createElement("a", {href: "J"}, "J")), 
            React.createElement("li", null, React.createElement("a", {href: "K"}, "K")), 
            React.createElement("li", null, React.createElement("a", {href: "L"}, "L")), 
            React.createElement("li", null, React.createElement("a", {href: "M"}, "M")), 
            React.createElement("li", null, React.createElement("a", {href: "N"}, "N")), 
            React.createElement("li", null, React.createElement("a", {href: "O"}, "O")), 
            React.createElement("li", null, React.createElement("a", {href: "P"}, "P")), 
            React.createElement("li", null, React.createElement("a", {href: "Q"}, "Q")), 
            React.createElement("li", null, React.createElement("a", {href: "R"}, "R")), 
            React.createElement("li", null, React.createElement("a", {href: "S"}, "S")), 
            React.createElement("li", null, React.createElement("a", {href: "T"}, "T")), 
            React.createElement("li", null, React.createElement("a", {href: "U"}, "U")), 
            React.createElement("li", null, React.createElement("a", {href: "V"}, "V")), 
            React.createElement("li", null, React.createElement("a", {href: "W"}, "W")), 
            React.createElement("li", null, React.createElement("a", {href: "X"}, "X")), 
            React.createElement("li", null, React.createElement("a", {href: "Y"}, "Y")), 
            React.createElement("li", null, React.createElement("a", {href: "Z"}, "Z"))
          )
        )
      );
    }
  });


  views.BeerListView = React.createClass({displayName: "BeerListView",
    render: function(){
      return(
        React.createElement("div", {className: "list_views"}, 
          React.createElement(views.Search, null), 
          React.createElement(views.AlphabetList, null), 
          React.createElement(views.BeerList, null)
        )
      )
    }
  });

  //   views.BreweryListView = React.createClass({
  //   render: function(){
  //     return(
  //       <div className="list_views">
  //         <views.Search/>
  //         <views.AlphabetList/>
  //         <views.BreweryList/>
  //       </div>
  //     )
  //   }
  // });

  views.Section = React.createClass({displayName: "Section",
    render: function(){
      return(
        React.createElement(views.BeerListView, null)
      )
    }
  });


})(tiy.views);
(function(views){

  views.Task = React.createBackboneClass({

    destroy: function(){
      this.props.model.destroy();
    },

    render: function() {
      var d = this.props.model.toJSON();
      return (
        React.createElement("div", {className: "task item", onClick: this.props.onClick}, 
          React.createElement("span", {className: "item-title"}, d.name), 
          React.createElement(views.DeleteButton, {
            confirm: "Really delete task? You will lose all milestones", 
            onDelete: this.destroy}), 
          React.createElement(views.Progress, {percent: d.percent_complete})
        )
      );
    }

  });

  views.Tasks = React.createBackboneClass({

    selectTask: function(model){
      this.props.onSelect(model);
    },

    getItem: function(model, index){
      return (
        React.createElement(views.Task, {
          model: model, 
          onClick: this.selectTask.bind(this, model), 
          key: index})
      );
    },

    add: function(data){
      // console.log("add task", data);
      this.props.collection.add(data);
    },

    render: function(){
      return(
        React.createElement("div", {className: "tasks list"}, 
          React.createElement("div", {className: "heading"}, 
            React.createElement("h2", null, "Tasks")
          ), 
          React.createElement("div", {className: "items"}, 
             this.props.collection.map(this.getItem) 
          ), 
          React.createElement("div", {className: "add-item"}, 
            React.createElement(views.AddForm, {adding: "task", onAdd: this.add})
          )
        )
      );
    }

  });

})(tiy.views);

//backbone class if it has a model that goes with it


// var tasks = new tiy.models.Tasks();
// var t = tasks.first();
// t.toJSON();
// t.set("percent_complete", 1);
// t = tasks.at(1);
// t.attributes.name
// t.set("percent_complete", 0.5);
// check FB