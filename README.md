# UwUelp

UwUelp, a Yelp clone, is a web application that allows users to look up businesses, and see different information about those businesses, and as well as review written by the user or other users.

[Live Demo](https://uwuelp.herokuapp.com "UwUelp Homepage")

## Technologies

* Backend: Rails/Active Record/PostgreSQL
* Frontend: React/Redux
* [Google Map API](https://developers.google.com/maps/documentation/ "Google Map Api")
* [Emojipedia](https://emojipedia.org/ "Emojipedia")
* [GIPHY](https://giphy.com/ "GIPHY")

## Features

* Frontend to backend user authentication using BCrypt
* Allows for Search of business by name, category, loction, or a combination of name / catergory with location
* Shows location of businesses on the search page and its individual page
* Can Create, Read, Update, or Destory a reviews and that is dynamically shown in real time in the frontend
* Users can react to reviews and that updates the count of the type of reaction of a specifc review

## Homepage

  Once a user logs in, they are redirected to the homepage where they can search up businesses by name, category, and location.

![homepage](/app/assets/images/homepage.gif)
  

  ## Business Index

  Upon searching, displays a list of businesses that fits the search result, and allows for filter by search results

 
  
  ![filter show](/app/assets/images/filterprice.gif)

  

  ## Business Show
  Shows all the details and reviews of a specifc business

  ![business show](/app/assets/images/businessshow.gif)
  
  
  ## Create/Update/Delete Review
  Can create, update or delete a comment. Numbers of comment when creating or deleting a comment will be reflected in the frontend on profile.

  ![review demo](/app/assets/images/reviewdemo.gif)


