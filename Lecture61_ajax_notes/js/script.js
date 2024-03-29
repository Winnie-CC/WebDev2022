//Lecture 59


$(function () { //same as document.addEventListener("DOMContentLoaded"..)
// this function will be loaded after HTML but before images and external sources

//Same as document.querySelector("#navbarToggle").addEventListener("bl")
//we are selecting the button id
//when blur happens, I want the following functions executed
$("#navbarToggle").blur(function(event){
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        $("#collapsable-nav").collapse('hide'); //collapse is dependent on jquery library (function is $) in bootstrap
    //if we select the collapsable-nav in jquery/bootstrap plugin
    //and select the collapse and hide
    }
});
});


(function(global){

    var dc = {};
    //set up where the snippet is gonna sit
    var homeHtml = "snippets/home-snippet.html";
    var allCategoriesUrl = "https://davids-restaurant.herokuapp.com/categories.json";
    var categoriesTitleHtml = "snippets/categories-title-snippet.html";
    var categoryHtml = "snippets/category-snippet.html";

    //Convinience function for inserting innerHTML for 'select'
    // the insert variable
    var insertHtml = function(selector,html){
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };

    // Show loading icon inside element identified by 'selector'
    // selector means where the icon should be attached to
    var showLoading = function (selector) {
        var html = "<div class='text-center'>";
        //this loading icon is downloaded free from ajaxload.info
        html += "<img src='images/ajax-loader.gif'></div>"
        insertHtml(selector, html);
    };

    //Return substitute of '{{propName}}'
    //with propValue in given 'string'
    var insertProperty = function (string, propName, propValue){
        var propToReplace = "{{" + propName + "}}";
        string = string.replace(new RegExp(propToReplace, "g"), propValue);
        return string;
    }

    //on page load (before image or css), start executing:
    document.addEventListener("DOMContentLoaded", function(event){
    
        //on first load, show home view
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            homeHtml,
            function(responseText){
                document.querySelector("#main-content").innerHTML = responseText;
            },
        false); //false = I dont want this to be preprocess this as json
    });

    //load the menu categories view
    dc.loadMenuCategories = function(){
        showLoading("#main-content"); //show loading icon
        $ajaxUtils.sendGetRequest(
            allCategoriesUrl, buildAndShowCategoriesHTML //define below
        );
    };

    // Builds HTML for the categories page based on data returned from server
    function buildAndShowCategoriesHTML(categories){ //1st category object
        //Load title snippet of categories page
        $ajaxUtils.sendGetRequest(
            categoriesTitleHtml, //2nd request title html
            function(categoriesTitleHtml){
                //retrieve single category snippet
                $ajaxUtils.sendGetRequest(
                    categoryHtml, // 3rd category object html
                    function(categoryHtml){
                        var categoriesViewHtml = buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHtml);
                        insertHtml("#main-content",categoriesViewHtml);
                    },
                false); // dont want them to process ajax as json
            },
        false);
    }

    //using categories data and snippets html
    //build categories view HTML to be inserted into page
    function buildCategoriesViewHtml(categories,categoriesTitleHtml,categoryHtml){
        var finalHtml = categoriesTitleHtml;
        finalHtml += "<section class='row'>"; //put that into the section with class row

        //loop over categories
        for (var i=0; i < categories.length; i++){
            //insert category values
            var html = categoryHtml;
            var name = "" + categories[i].name;
            var short_name = categories[i].short_name;
            html = insertProperty(html,"name",name);
            html = insertProperty(html,"short_name",short_name);
            finalHtml += html;
        }

        finalHtml += "</section>";
        return finalHtml;
    }

global.$dc = dc;
})(window);
