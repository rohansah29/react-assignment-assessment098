## React Travel Desk

### Submission Instructions [Please note]

#### Maximum Marks - 17

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work.
- Do not push node_modules and package_lock.json to github.

```
✅ Able to submit the app - 1 mark ( minimum score )
✅ Heading should be visible when the component loads and there should be a button with Get Hotels - 1 mark
✅ Should make a get request to endpoint when clicked on Get Hotels button and Get Hotels button should not exist on DOM once clicked on it - 2 marks
✅ Able to display all the hotels on the DOM - 1 mark
✅ Check all hotels details are visible along with the buttons - 2 marks
✅ Check Request Booking button is there for Hotel and Cancel Request is not present by default - 1 mark
✅ Check on clicking on Show Amenities button is working as per the problem statement - 2 marks
✅ On clicking on the Request Booking button, the button should get disabled and the text content should change accordingly and also a new button to Cancel Request should be visible - 3 marks
✅ When someone click on Request Booking, the cost should be visible in the h6 tag - 2 marks
✅ When someone click on Request Booking button and then when we click on Cancel Request button, the cost should be visible in the h6 tag and should not exist when the value is 0 - 2 marks

```

### Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json

```
npm install --engine-strict

// run locally
npm run start
```

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
  try to keep one submission at a time

## Problem Statement

You are required to create a simple web application using React to display a list of hotels with their respective details.

### Hierarchy of components:

- App component
    - HotelList component
        - HotelCard component
            - BookHotelBtn component

### **App Component (App.js):**

This component will be responsible for rendering the **`HotelList`** component. The **`App`** component should import the **`HotelList`** component and include it inside a **`<div>`** element with a class name of "App".


- Initial Display

![img](https://i.imgur.com/3wAAQFl.png)

- `HotelList` component in HotelList.jsx contains div with `data-testid attribute` set to hotel-list. Inside that div, create a button with class get-hotels. Once `HotelList` is rendered in `App` your application should look like the above screenshot. Make sure that the markup of the div and the button exactly matches the above screenshot.

## On Click of the `get-hotels` button

On clicking the `Get Hotels` button, the application should make a `GET` request to the API and display all the data in cards using the `HotelCard` component. 

The API request is made to the following URL: **[https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-accomodations](https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-accomodations)**


- After getting the data
    - The `Get Hotels` button should not exist on the DOM.
    - The hotel's details should be visible on the DOM with the help of the `HotelCard` component. And all the `HotelCard` components should be appended inside the `div` with `data-cy="container`” provided. The `div` with `data-cy="container` is already provided to you in `HotelList.jsx`

![img](https://i.imgur.com/LKTCls0.png)


## HotelCard (Components/HotelCard.jsx)

### **API Url:- `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-accomodations`**

- Use Fetch only.
- The images links in the response are invalid, so you can use the below image src link
- <p style="color:red">It is mandatory to use the below image link</p>
- image link:- `https://placehold.co/350x300`
- We are not testing your CSS.

<div style="display:flex;flex-wrap:wrap;justify-content:space-between;row-gap: 10px;
">
<img src="https://i.imgur.com/QuYb25w.png" width="49%" height="275px">
<img src="https://i.imgur.com/1Whe2tQ.png" width="49%" height="275px">
<img src="https://i.imgur.com/MFmOwCg.png" width="49%" height="320px">
<img src="https://i.imgur.com/gc4KuOX.png" width="49%" height="320px">
</div>

- The `HotelCard` component should contain the following HTML elements and should be used for displaying the information of Hotels and also allows us to see amenities, request and cancel bookings.
    - `img` tag for displaying the image of the hotel with className="image".
    - `div` with `data-testid="cardinfo"` should have the following elements.
        - `h2` tag for displaying the `name` of the hotel with className="name".
        - there should be 3 `p` tags which should have the following text content.
            - first `p` tag should have the text content `location` of the hotel with className="location".
            - Second `p` tag should have the text content `${pricePerNight} per night` with className="price".
            - third `p` tag should contain `{availableRooms} rooms available from {checkIn} to {checkOut}` with className="availability".(here for checkIn and checkOut refer your API response)
            - There should be a button with text content `Show Amenities`.
            - Below `Show Amenities` you need to place `BookHotelBtn` component. The markup and functionality of `BookHotelBtn` is described later in this problem.

Please make sure that the markup of your component including all attributes is mathcing with the screenshot provided above.



## Show Amenities Button
![Show Amenities](https://i.imgur.com/6CCZjHD.png)

- When we click on the button(When it is having text content `Show Amenities`) the text content should be changed to `Hide Amenities` and it should show the `div` with `data-testid="show-amenities"`
- The above `div` with `data-testid="show-amenities"` should show amenities in `li` tags in the `ul` tag.
- When I click on the `button` again, the `div` with `data-testid="show-amenities"` should not exist on the DOM.

<div style="display:flex;flex-wrap:wrap;justify-content:space-between;row-gap: 10px;
">
<img src="https://i.imgur.com/MFmOwCg.png" width="49%" height="320px">
<img src="https://i.imgur.com/gc4KuOX.png" width="49%" height="320px">
</div>

## ****BookHotelBtn (Components/BookHotelBtn.jsx)****

The **`BookHotelBtn`** component is responsible for managing the booking request functionality for each hotel displayed in the list. It provides two buttons for the user to interact with - one to request a booking and another to cancel a previously placed request.

- Create a button tag with `className="request-booking"`
- By default, the text content of the button is `Request Booking`
- After clicking on the button, the text content of the button should be changed to `Request Placed`, and the button should be `disabled`
- A new button with `className="cancel_request_button"` should appear just below the above button and the text should be `Cancel Request`
- After clicking on `Cancel Request`, the text content of the button with `className="request-booking"` should be changed back to `Request Booking` and should be enabled, and the button with `className="cancel_request_button"` should be removed from UI
- The cost in the `HotelList` component should be updated in the real-time
- When someone clicks on the Request booking buttons, the total cost of the requested bookings should be visible in the h6 tag with className as totalcost and text content `Total cost:{totalCost}` where totalCost is the sum of pricePerNight of each hotel room requested booking. This tag should exist only when the user request any booking and it should get updated in real-time. (You should mention this h6 tag in HotelList component and will exist only when price>0)

![img](https://i.imgur.com/KEmwvot.png)

### **Note**

- Make sure you use only the given components and don't create new Components, files, or folders of your own. Changing the component name, and file/folder structures might result in giving you zero marks
- Do Not Remove `data-cy="xxxx"` from anywhere, these are used by testing tools to test your code, and removal of this will lead to low scores.
- Also make sure to cross-check all the spellings and Cases of Texts.



**The problem is tested on CP**
<div>
  <img src="https://i.imgur.com/747IN7A.png" width="100%">  
</div>


#### **Note**

- Make sure you use only the given components and don't create new Components, files, or folders of your own. Changing the component name, and file/folder structures might result in giving you zero marks
- Do Not Remove `data-cy="xxxx"` from anywhere, these are used by testing tools to test your code, and removal of this will lead to low scores.
- Also make sure to cross-check all the spellings and Cases of Texts.

### General Guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
