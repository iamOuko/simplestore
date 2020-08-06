//Business interface logic
//shopping cart
function ShoppingCart (productID, name, tprice, numordered) {
  this.orders = allorders;
  this.totalprice = tprice;
  this.totalordered = numordered;
}

var allorders = {productID: []};

//products and product objects
{ //products constructor
function Products (prodname, pid, cost, shortdescription,longdescription,pic,numProducts) {
  this.pName= prodname;
  this.pID = pid
  this.price= cost;
  this.sdescription = shortdescription;
  this.description = longdescription;
  this.picture = pic;
  this.quantity = numProducts;

}

//Product objects

var p1 = new Products("Diamond water", "p1", 200, "Smooth freshening water that cools your thirst.", "Smooth freshening water that cools your thirst. Made from water that is said to have fallen from the heavens","../img/img1.jpg", 10);

var p2 = new Products("Vilsa Water", "p2", 250, "Water from the Vilsa hills...", "From the hills of Vilsa, filtered by the hills and nature itself","../img/img2.jpg", 10);

var p3 = new Products("Mineral Water", "p3", 100,"Fresh water with enriching minerals.","Good old water, in a stylish bottle. Our most affordable product", "../img/img3.jpg", 10);

var p4 = new Products("Acqua", "p4", 250, "Natural spring water.", "Natural spring water, unfilited and tasty. Taste nature", "../img/img4.jpg", 15);

var p5 = new Products("Protein Water", "p5",300,  "Has protein supplements good for health.",
               "Created for gym bunnies, this will increase your gains 10fold","../img/img5.jpg", 15);

var p6 = new Products("Voss", "p6", 300, "Voss water made of nature.", "Water from the famous Voss springs of Voss","../img/img6.jpg", 12);

var p7 = new Products("Sun Bum", "p7", 250, "Can't go wrong with sun bum in sunny days.", "Energizing drink that increases photothensis","../img/img7.jpg", 20);

var p8 = new Products("Generosity", "p8", 200, "Generosity water generous for training!", "Meant to be shared with friends! Increase training capabilities and team work sevenfold!", "../img/img8.jpg", 20);

var allproducts = {productID: [p1,p2,p3,p4,p5,p6,p7,p8]}

}

//var to capture which product user wants to viewp
var iWanttoview =window.name;

//user interface logic
$(document).ready(function() {


//for each loop to display each product
   allproducts.productID.forEach(function(product) {
//#display shows which div to put the following code into.
    $("#productsdisplay").append('<div class="column">' +
              '<div class="card"style="width: 18rem;">'+
                     '<img class="card-img-top" src="'+ product.picture + '"alt="Card image '+ product.pName + '">'+
                     '<div class="card-body">' +
                         '<h5 class="card-title">'+ product.pName + '</h5>' +
                         '<p>'+ product.price + ' ksh</p>' +
                         '<p class="card-text">' + product.sdescription + '</p>'+
                     '</div>' +
                     '<div class="card-footer">' +
                        '<a href="#" id="'+ product.pID +'-btn"  class="btn btn-primary">Select</a>'+
                        '<a href="#" id="'+ product.pID +'-btn-cart"  class="btn btn-primary">Add to cart</a>'+
                     '</div>'+
                 '</div>'+
             '</div>'
      );

    });

//click listeners for all the buttons
{
  $("#p1-btn").click( function(event) {
       event.preventDefault();
       window.name="p1";
      location.href='productdetailspage.html';

      });
  $("#p2-btn").click( function(event) {
           event.preventDefault();
           window.name="p2";
          location.href='productdetailspage.html';
          });
  $("#p3-btn").click( function(event) {
           event.preventDefault();
           window.name="p3";
          location.href='productdetailspage.html';
          });
  $("#p4-btn").click( function(event) {
           event.preventDefault();
           window.name="p4";
          location.href='productdetailspage.html';
          });
  $("#p5-btn").click( function(event) {
           event.preventDefault();
           window.name="p5";
          location.href='productdetailspage.html';
          });
  $("#p6-btn").click( function(event) {
           event.preventDefault();
           window.name="p6";
          location.href='productdetailspage.html';
          });
  $("#p7-btn").click( function(event) {
           event.preventDefault();
           window.name="p7";
          location.href='productdetailspage.html';
          });
  $("#p8-btn").click( function(event) {
          event.preventDefault();
          window.name="p8";
          location.href='productdetailspage.html';
                  });
}
//will display given product name
    if(window.name==="p1") {
          $("#productsdetails").append(
                  '<h1>' + p1.pName + ' details</h1>' +
              	              '<div class="container">' +
                              '<div class="card">' +
              		            '<div class="container-fliud">' +
              			         '<div class="wrapper row">' +
              				       '<div class="preview col-md-6">' +
              					              '<div class="preview-pic tab-content">' +
              					                      '<div class="tab-pane active" id="pic '+ p1.pName +'"><img "alt="Card image '+ p1.pName + '" src="'+ p1.picture + '" /></div>'+
              					                         ' </div> ' +
                        						   '  <ul class="preview-thumbnail nav nav-tabs"> '+
                               '	</ul>'+
              					      '</div>'+
              				 '	<div class="details col-md-6">'+
              					 '	<h3 class="product-title">'+p1.pName+'</h3>'+
                       '  </div>'+
              					 '<p class="product-description">' + p1.description + '</p>'+
              					 '	<h4 class="price">current price: <span>ksh '+ p1.price + '</span></h4>'+
              '	<div class="action">'+
                '  <br>'+
              						'	<button class="add-to-cart btn btn-default" id="#'+ p1.pName +'-'+ p1.pID +'" type="button">add to cart</button>'+
              						'	<button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>'+
              					'	</div>'+
              			'		</div>'+
              			'	</div>'+
              		'	</div>'+
              	'	</div>'+
              '	</div>>'
                );
              }
        else if(window.name==="p2") {
          $("#productsdetails").append(
            '<h1>' + p2.pName + ' details</h1>' +
                        '<div class="container">' +
                        '<div class="card">' +
                        '<div class="container-fliud">' +
                       '<div class="wrapper row">' +
                       '<div class="preview col-md-6">' +
                                '<div class="preview-pic tab-content">' +
                                        '<div class="tab-pane active" id="pic '+ p2.pName +'"><img "alt="Card image '+ p2.pName + '" src="'+ p2.picture + '" /></div>'+
                                           ' </div> ' +
                                 '  <ul class="preview-thumbnail nav nav-tabs"> '+
                         '	</ul>'+
                        '</div>'+
                 '	<div class="details col-md-6">'+
                   '	<h3 class="product-title">'+p2.pName+'</h3>'+
                 '  </div>'+
                   '<p class="product-description">' + p2.description + '</p>'+
                   '	<h4 class="price">current price: <span>ksh '+ p2.price + '</span></h4>'+
        '	<div class="action">'+
          '  <br>'+
                    '	<button class="add-to-cart btn btn-default" id="#'+ p2.pName +'-'+ p2.pID +'" type="button">add to cart</button>'+
                    '	<button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>'+
                  '	</div>'+
              '		</div>'+
              '	</div>'+
            '	</div>'+
          '	</div>'+
        '	</div>>'
                );
        }
        else if(window.name==="p3") {
          $("#productsdetails").append(
            '<h1>' + p3.pName + ' details</h1>' +
                        '<div class="container">' +
                        '<div class="card">' +
                        '<div class="container-fliud">' +
                       '<div class="wrapper row">' +
                       '<div class="preview col-md-6">' +
                                '<div class="preview-pic tab-content">' +
                                        '<div class="tab-pane active" id="pic '+ p3.pName +'"><img "alt="Card image '+ p3.pName + '" src="'+ p3.picture + '" /></div>'+
                                           ' </div> ' +
                                 '  <ul class="preview-thumbnail nav nav-tabs"> '+
                         '	</ul>'+
                        '</div>'+
                 '	<div class="details col-md-6">'+
                   '	<h3 class="product-title">'+p3.pName+'</h3>'+
                 '  </div>'+
                   '<p class="product-description">' + p3.description + '</p>'+
                   '	<h4 class="price">current price: <span>ksh '+ p3.price + '</span></h4>'+
        '	<div class="action">'+
          '  <br>'+
                    '	<button class="add-to-cart btn btn-default" id="#'+ p3.pName +'-'+ p3.pID +'" type="button">add to cart</button>'+
                    '	<button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>'+
                  '	</div>'+
              '		</div>'+
              '	</div>'+
            '	</div>'+
          '	</div>'+
        '	</div>>'
                );
        }
        else if(window.name==="p4") {
          $("#productsdetails").append(
            '<h1>' + p4.pName + ' details</h1>' +
                        '<div class="container">' +
                        '<div class="card">' +
                        '<div class="container-fliud">' +
                       '<div class="wrapper row">' +
                       '<div class="preview col-md-6">' +
                                '<div class="preview-pic tab-content">' +
                                        '<div class="tab-pane active" id="pic '+ p4.pName +'"><img "alt="Card image '+ p4.pName + '" src="'+ p4.picture + '" /></div>'+
                                           ' </div> ' +
                                 '  <ul class="preview-thumbnail nav nav-tabs"> '+
                         '	</ul>'+
                        '</div>'+
                 '	<div class="details col-md-6">'+
                   '	<h3 class="product-title">'+p4.pName+'</h3>'+
                 '  </div>'+
                   '<p class="product-description">' + p4.description + '</p>'+
                   '	<h4 class="price">current price: <span>ksh '+ p4.price + '</span></h4>'+
        '	<div class="action">'+
          '  <br>'+
                    '	<button class="add-to-cart btn btn-default" id="#'+ p4.pName +'-'+ p4.pID +'" type="button">add to cart</button>'+
                    '	<button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>'+
                  '	</div>'+
              '		</div>'+
              '	</div>'+
            '	</div>'+
          '	</div>'+
        '	</div>>'
                );
        }
        else if(window.name==="p5") {
          $("#productsdetails").append(  '<h1>' + p5.pName + ' details</h1>' +
                        '<div class="container">' +
                        '<div class="card">' +
                        '<div class="container-fliud">' +
                       '<div class="wrapper row">' +
                       '<div class="preview col-md-6">' +
                                '<div class="preview-pic tab-content">' +
                                        '<div class="tab-pane active" id="pic '+ p5.pName +'"><img "alt="Card image '+ p5.pName + '" src="'+ p5.picture + '" /></div>'+
                                           ' </div> ' +
                                 '  <ul class="preview-thumbnail nav nav-tabs"> '+
                         '	</ul>'+
                        '</div>'+
                 '	<div class="details col-md-6">'+
                   '	<h3 class="product-title">'+p5.pName+'</h3>'+
                 '  </div>'+
                   '<p class="product-description">' + p5.description + '</p>'+
                   '	<h4 class="price">current price: <span>ksh '+ p5.price + '</span></h4>'+
        '	<div class="action">'+
          '  <br>'+
                    '	<button class="add-to-cart btn btn-default" id="#'+ p5.pName +'-'+ p5.pID +'" type="button">add to cart</button>'+
                    '	<button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>'+
                  '	</div>'+
              '		</div>'+
              '	</div>'+
            '	</div>'+
          '	</div>'+
        '	</div>>'
                );
        }
        else if(window.name==="p6") {
          $("#productsdetails").append(
            '<h1>' + p6.pName + ' details</h1>' +
                        '<div class="container">' +
                        '<div class="card">' +
                        '<div class="container-fliud">' +
                       '<div class="wrapper row">' +
                       '<div class="preview col-md-6">' +
                                '<div class="preview-pic tab-content">' +
                                        '<div class="tab-pane active" id="pic '+ p6.pName +'"><img "alt="Card image '+ p6.pName + '" src="'+ p1.picture + '" /></div>'+
                                           ' </div> ' +
                                 '  <ul class="preview-thumbnail nav nav-tabs"> '+
                         '	</ul>'+
                        '</div>'+
                 '	<div class="details col-md-6">'+
                   '	<h3 class="product-title">'+p6.pName+'</h3>'+
                 '  </div>'+
                   '<p class="product-description">' + p6.description + '</p>'+
                   '	<h4 class="price">current price: <span>ksh '+ p6.price + '</span></h4>'+
        '	<div class="action">'+
          '  <br>'+
                    '	<button class="add-to-cart btn btn-default" id="#'+ p6.pName +'-'+ p6.pID +'" type="button">add to cart</button>'+
                    '	<button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>'+
                  '	</div>'+
              '		</div>'+
              '	</div>'+
            '	</div>'+
          '	</div>'+
        '	</div>>'
                );
        }
        else if(window.name==="p7") {
          $("#productsdetails").append(
            '<h1>' + p7.pName + ' details</h1>' +
                        '<div class="container">' +
                        '<div class="card">' +
                        '<div class="container-fliud">' +
                       '<div class="wrapper row">' +
                       '<div class="preview col-md-6">' +
                                '<div class="preview-pic tab-content">' +
                                        '<div class="tab-pane active" id="pic '+ p7.pName +'"><img "alt="Card image '+ p7.pName + '" src="'+ p7.picture + '" /></div>'+
                                           ' </div> ' +
                                 '  <ul class="preview-thumbnail nav nav-tabs"> '+
                         '	</ul>'+
                        '</div>'+
                 '	<div class="details col-md-6">'+
                   '	<h3 class="product-title">'+p7.pName+'</h3>'+
                 '  </div>'+
                   '<p class="product-description">' + p7.description + '</p>'+
                   '	<h4 class="price">current price: <span>ksh '+ p7.price + '</span></h4>'+
        '	<div class="action">'+
          '  <br>'+
                    '	<button class="add-to-cart btn btn-default" id="#'+ p7.pName +'-'+ p7.pID +'" type="button">add to cart</button>'+
                    '	<button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>'+
                  '	</div>'+
              '		</div>'+
              '	</div>'+
            '	</div>'+
          '	</div>'+
        '	</div>>'
                );
        }
        else if(window.name==="p8") {
          $("#productsdetails").append(
            '<h1>' + p8.pName + ' details</h1>' +
                        '<div class="container">' +
                        '<div class="card">' +
                        '<div class="container-fliud">' +
                       '<div class="wrapper row">' +
                       '<div class="preview col-md-6">' +
                                '<div class="preview-pic tab-content">' +
                                        '<div class="tab-pane active" id="pic '+ p8.pName +'"><img "alt="Card image '+ p8.pName + '" src="'+ p8.picture + '" /></div>'+
                                           ' </div> ' +
                                 '  <ul class="preview-thumbnail nav nav-tabs"> '+
                         '	</ul>'+
                        '</div>'+
                 '	<div class="details col-md-6">'+
                   '	<h3 class="product-title">'+p8.pName+'</h3>'+
                 '  </div>'+
                   '<p class="product-description">' + p8.description + '</p>'+
                   '	<h4 class="price">current price: <span>ksh '+ p8.price + '</span></h4>'+
        '	<div class="action">'+
          '  <br>'+
                    '	<button class="add-to-cart btn btn-default" id="#'+ p8.pName +'-'+ p8.pID +'" type="button">add to cart</button>'+
                    '	<button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>'+
                  '	</div>'+
              '		</div>'+
              '	</div>'+
            '	</div>'+
          '	</div>'+
        '	</div>>'
                );
        }

});
