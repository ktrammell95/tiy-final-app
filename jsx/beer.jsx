// // ------------ Beer and Brewery Lists ------------ //
// (function(views){

//   views.Beer = React.createBackBoneClass({
//     render: function(){
//       return(
//         <div className="beer">
//           <h3>Beer: Saison Lafayette</h3>
//           <div className="beer_details">
//             <ul>
//               <li>Description:</li>
//               <li>ABV:</li>
//               <li>Glassware:</li>
//               <li>Style:</li>
//             </ul>
//           </div>
//           <div className="beer_image">
//             <img src="http://lorempixel.com/400/200/"/>
//           </div>
//         </div>
//       )
//     }
//   });

//   views.Search = React.createClass({
//     render: function(){
//       return (
//         <div className="search">
//           <form className="search-form" action="" method="">
//             <span></span>
//             <input type = "text" className="search-field" name="search" placeholder="enter keywords"/>
//             <input type = "submit" className = "search-button" name="submit"value="Search"/>
//           </form>
//         </div>
//       )
//     }
//   });
  
//   views.AlphabetList = React.createClass({
//     render: function(){
//       return (
//        <div className="alphabetical_list">
//         <div className="beer_list brewery_list">
//           <div className="alphabet">
//             <ul>
//               <li><a href="A">A</a></li>
//               <li><a href="B">B</a></li>
//               <li><a href="C">C</a></li>
//               <li><a href="D">D</a></li>
//               <li><a href="E">E</a></li>
//               <li><a href="F">F</a></li>
//               <li><a href="G">G</a></li>
//               <li><a href="H">H</a></li>
//               <li><a href="I">I</a></li>
//               <li><a href="J">J</a></li>
//               <li><a href="K">K</a></li>
//               <li><a href="L">L</a></li>
//               <li><a href="M">M</a></li>
//               <li><a href="N">N</a></li>
//               <li><a href="O">O</a></li>
//               <li><a href="P">P</a></li>
//               <li><a href="Q">Q</a></li>
//               <li><a href="R">R</a></li>
//               <li><a href="S">S</a></li>
//               <li><a href="T">T</a></li>
//               <li><a href="U">U</a></li>
//               <li><a href="V">V</a></li>
//               <li><a href="W">W</a></li>
//               <li><a href="X">X</a></li>
//               <li><a href="Y">Y</a></li>
//               <li><a href="Z">Z</a></li>
//             </ul>
//           </div>
//           </div>
//         </div>
//       );
//     }
//   });


//   views.BeerListView = React.createClass({
//     render: function(){
//       return(
//         <div className="alphabetical_list">
//           <views.Search/>
//           <views.AlphabetList/>
//           <views.Beer/>
//         </div>
//       )
//     }
//   });

//   views.Section = React.createClass({
//     render: function(){
//       return(
//         <views.BeerListView/>
//       )
//     }
//   });


})(tiy.views);