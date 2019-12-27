# UwUelp

![homepage](/app/assets/images/homepage.gif)

UwUelp, a Yelp clone, is a web application that allows users to look up businesses, and see different information about those businesses, and as well as review written by the user or other users.

[Live Demo](https://uwuelp.herokuapp.com "UwUelp Homepage")

## Technologies

* Backend: Rails/Active Record/PostgreSQL
* Frontend: React/Redux
* [Google Map API](https://developers.google.com/maps/documentation/ "Google Map Api")
* [Emojipedia](https://emojipedia.org/ "Emojipedia")

## Features

* Frontend to backend user authentication using BCrypt
* Allows for Search of business by name, category, loction, or a combination of name / catergory with location
* Shows location of businesses on the search page and its individual page
* Can Create, Read, Update, or Destory a reviews and that is dynamically shown in real time in the frontend
* Users can react to reviews and that updates the count of the type of reaction of a specifc review

## Homepage

  Once a user logs in, they are redirected to the homepage where they can search up businesses by name, category, and location.

  I made a custom action that takes in a query from param, and then I used ActiveRecord SQL
  to return Businesses where the query matches the businesses name in lower case, so Users can't type however they like. I also sliced the results from index 0 to 4, so there can only be maximum five results. Then I passed the results as a props down to my SearchResult Item component where I listed the result with an img tag and a li tag.

```ruby
def search 
    query = params[:query]
    if query.length >= 2 
      @businesses = Businesse.where('lower(name) LIKE ?', "%#{query.downcase}%" )
      @businesses = @businesses[0..4]
      render :index
    else
      @businesses = []
      render :index
    end
  end
```

```javascript
const SearchResultItem = ({ result }) => (
  <div className="search-result-item">
      <img src={result.profPic} alt="" />
      <div>
      <Link id="result-links" to={`/businesses/${result.id}`}> 
        <li>{result.name}</li>
      </Link>
      </div>
  
  </div>
)
```

  ## Business Index

  Upon searching, displays a list of businesses that fits the search result, and allows for filter by search results

  ![filter show](/app/assets/images/filterprice.gif)

  Used local state to keep track of which filter is active, and an array of filtered Businesses called `filtered`. Then I made functions that filtered by price on click. That functions makes an array of all the businesses in a prices range called `arr` and an array call `newArr` which filters out businesses in that same price range from the array `filtered`. When that specific filter is in `active`, it will set `filtered` to `newArr` so it will remove the filter, and when it is `inactive`, it will concat `arr` to `filtered`, adding on the current filter to the existing ones. Finally in my render method, I check if any of the filter is active. If so, I render the array called `filtered` from my local state, else, I rendered all the Businesses.

  
  ```javascript
  handlePrice1(e) {
    e.preventDefault();
    const button1 = document.getElementById('price1')
    let arr = this.props.businesses.filter((business) => {
      return business.priceRange === "Inexpensive"
    })

    let newArr = this.state.filtered.filter((business) => {
      return !arr.includes(business)
    })

    if (this.state.price1 === "inactive") {
      button1.style.color = 'lightgreen';
      this.setState({
        filtered: this.state.filtered.concat(arr),
        price1: "active"
      })
    } else {
      button1.style.color = ''
      this.setState({
        price1: "inactive",
        filtered: newArr
      })
    }
  }
  ```


  ## Business Show
  Shows all the details and reviews of a specifc business

  ![business show](/app/assets/images/businessshow.gif)

  In my `componentDidUpdate` of my `ReviewIndexItem` component, I took advantage of prevProps' number of reactions and currentProps' number of reactions to set up conditional to fetchReviews, so that the new and updated `numCool`, `numUseful`, and `numFunny` will be passed down as props and updates the numbers of reaction correctly.

  ```javascript
  componentDidUpdate(prevProps) {
    
    let condition = (this.props.numCool !== prevProps.numCool || this.props.numUseful !== prevProps.numUseful || this.props.numFunny !== prevProps.numFunny)
    
    if (this.props.review.numReacts && prevProps.review.numReacts && condition) {
      this.props.fetchReviews(this.props.businessId)
    }
 
  }
  ```
  
  ## Create/Update/Delete Review
  Can create, update or delete a comment. Numbers of comment when creating or deleting a comment will be reflected in the frontend on profile.

  ![review demo](/app/assets/images/reviewdemo.gif)


  



