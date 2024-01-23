# React-CP-With-Routing-And-ContextAPI-View-Delete

## Maximum Marks - 18

### Submission Instructions [Please note]

- The Submission should not contain spaces, for example,/rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ Able to submit the app - 1 mark ( minimum score )
 ✅ Check the Initial structure of authProvider - 1 mark
 ✅ Check home page with proper text is visible or not and problems link in the Login page is working - 2 mark
 ✅ Should be able to log in with correct credentials - 2 marks
 ✅ Should display all the problems on the problems page - 2 marks
 ✅ Check whether SingleProblem and DeletePage pages are protected or not - 2 marks
 ✅ Able to view details of a problem on the SingleProblem page - 2 marks
 ✅ Able to delete the problem by making an appropriate DELETE request - 2 marks
 ✅ Loader component should exist between the API req and res from the json server - 2 marks
 ✅ Check navBar login link and logout button are working fine and context API has also Updated accordingly - 2 marks
```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
- `npm install --engine-strict`
- `npm start`
- `npm run server` -> to start the json-server

- **_Note_**:

1. Make sure that the json-server is up and running at port 8080
2. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server url

## Problem Statement

You need to create the react application which should serve the Coding Platform with the following functionality.
The user should be able to log in with the correct credentials.
The user should be able to see the problems
The user should be able to view and update the problems.

### Understanding Component Structure

```
 src
   ├── App.js
   ├── Components
   |  ├── Loading.jsx
   |  ├── Navbar.jsx
   |  ├── TableRowCard.jsx
   |  └── ViewProblem.jsx
   ├── Context
   |  └── AppContext.jsx
   ├── index.css
   ├── index.js
   ├── Pages
   |  ├── DeletePage.jsx
   |  ├── Home.jsx
   |  ├── Login.jsx
   |  ├── Problems.jsx
   |  └── SingleProblem.jsx
   ├── Routes
      ├── AllRoutes.jsx
      └── PrivateRoute.jsx
```

### Features to build:

**NOTE**: Context API is mandatory for this application and use `fetch` only.

### AppContextProvider

- In AppContextProvider, you need to pass the `providerState` as a value to the `AppContext.Provider`.
- This `providerState` object is provided in the boilerplate, you need to update this object with the following key values.

  - `authState`=> the auth state of the user by default will be`{isAuth: false, username: null}`.
  - `loginUser` => This should be a function that will update the auth state by taking an `username` as an argument and update the authState in context API. ex:`{isAuth: true, username: <username>}`.( Hint : The loginUser function is invoked with the username value only if the email and password entered in the input boxes match the email and password of a user from the pool of users obtained when making a GET request to the `/users` endpoint in Login.jsx )
  - `logoutUser`=> This should be a function that will update the auth state to the default state. `{isAuth: false, ,username: null}`.

- for example, the `providerState` will be assigned an object that will look like the below obj

```
{
  authState:{isAuth: false, username: null},
  loginUser:()=>{},
  logoutUser:()=>{}
}
```

1. Use the `providerState` as the value when you are passing in the context provider
2. Some of the boilerplate is provided. You are expected to write all the other remaining parts (functions, logic, importing createContext, etc).do not remove those.
3. Make sure Context API is connected with your React application properly, and you have access to the Context API data.

### JSON Data:

- db.json file is included in the boilerplate zip file, with the required data. **Do not overwrite/modify this data**

**Functionalities component-wise**

## Routes

### AllRoutes

- will contain all the routes in this component
- `/` for `Home` page
- `/login` for `Login` page
- `/problems` for `Problems` page
- `/problems/:id/view` for `SingleProblem` page (`private route`)
- `/problems/:id/delete` for `DeletePage` page(`private route`)

### PrivateRoute

- write the logic for protected Routes here
- `/problems/:id/view` for `SingleProblem` page
- `/problems/:id/delete` for `DeletePage` page
- The above routes should not be accessed if the user is not logged in.
- If the user tried to access this page without login, The user should be re-directed to `Login` Page

## App

- Add `Navbar` and `AllRoutes` components here.

## Pages

### Home-(`/`)

<div>
<img src="https://i.imgur.com/gGVXx2N.png" width="100%">
</div>

- The Home page should contain a welcome message. (`welcome message was already mentioned in the boiler plate`)
- You just need to add a `Link` in the above welcome message with the text content `Login`, on clicking it we need to re-direct to `/login`.

### Login-(`/login`)

<div>
<img src="https://i.imgur.com/vujmBdu.png" width="100%">
</div>

- The Login page features a form where users can input their email and password.
- There should also be a `Link` with text content as `Problems` inside `div` with `data-cy="go-to-problems-page"`. On clicking it the user should be redirected to `/problems`.
- Upon form submission, a `GET` request is sent to the `/users` endpoint to retrieve all users information.(`Use onSubmit to submit the form`)
- Between `req` and `res` to the json-server, `Loading` component should exist on DOM.
- Within the pool of users, you should search for the user whose email and password both match the values entered in the input box. If you find a user that satisfies this criteria,
  - you can use the loginUser function from the context API. Pass the username of that particular user as an argument to the loginUser function, so that the authState can be updated accordingly.
  - Also the user is redirected to the `/problems` page.
  - The `Navbar` component should also be updated accordingly.

#### The following updates should happen in Context API

- If the user enters the correct credentials ( i.e., the email and password entered in input matches that of atleast one user in users pool ), the `authState` in context API should be updated as follows.

```
  {
    isAuth:`true`,
    username: username=> This should get updated with the username who logged in
  }
```

### Problems-(`/problems`)

<div>
<img src="https://i.imgur.com/Q4XcAWV.png" width="100%">
</div>

- On page load, make a `GET` request to `/cpproblems` and fetch the problems.
- Between `req` and `res` to the json-server, `Loading` component should exist on DOM.
- On this page, you should see a list of all the problems.
- Show all the problems with the help of the `TableRowCard` component.
- Make sure to `GET` the latest problems every time you access this page. As some times we visit this page after manipulating the problem data in db.json.

### SingleProblem-(`/problems/:id/view`)

<div>
<img src="https://i.imgur.com/3iX6mHo.png" width="100%">
</div>

- On this page, we can get the `id` of the problem from the `params` which we want to `view`.
- This page should containt the following component
  - `ViewProblem` component (for showing the details of the problem)
- Now show the details of the problem with the help of the `ViewProblem` component.

### DeletePage-(`/problems/:id/delete`)

<div>
<img src="https://i.imgur.com/G1Rtzck.png" width="100%">
</div>

- On this page, we can get the `id` of the problem from the `params` which we want to `delete`.
- This page should consist a component and a `button`.
  - `ViewProblem` component (for showing the details of the problem)
  - `button` should be visible with the text content `Delete` and on clicking it you need to make a `DELETE` request to the endpoint `/cpproblems/id`. (Hint:- Here `id` is the id of the problem )
- After successful `DELETE` you should be re-directed to `/problems`

## Components

### Navbar

<div>
<img src="https://i.imgur.com/qkPDTvN.png" width="100%"/>
</div>

- This component should be seen on the top of all pages.
- This component will contain the following HTML elements.
  - Link 1=> with text content `Home` and on clicking it the user should be redirected to the `Home` page(`/`)
  - Either Link 2 or a span tag and button for `Logout` should exist
    - If the user is not logged in, then Link 2 will be visible with the text content `Login` and on clicking it the user should be redirected to the `Login` page. (`/login`)
    - If the user is logged in, The following two elements should exist.
      - span tag with text content as `Welcome, {username}!` where username is the username of the user who logged in
      - button with text content as `Logout` should be there and on clicking it the user should be redirected to the `Home`(`/`) page and ContextApi should be reset to its original state. (Means context API should be having initial values)

<div>
    <img src="https://i.imgur.com/BdTJHia.png" width="100%">
</div>

### TableRowCard

<div> 
  <img src="https://i.imgur.com/4ZxiYAa.png" width="100%">
</div>
<hr/>
Refer to the following markup for knowing which HTML elements should be used. And for Tags, you can show them with the help of using arr.join(", ") (Here there is comma and a space)
<div>
<img src="https://i.imgur.com/glfU0BQ.png?1" width="100%" />
</div>

- This component will take the `props` from its parent component and display the data in the table row as mentioned in the following order
- Name, Category, Author, Type, Tags, Difficulty, Status, MaxMarks, and `select` tag.
- The tags are in the form of an array in the data we get, so use join the tags with ", " (`There is a comma and a space`)
- The Select tag will contain the following options
  - text content `Options` with value "" - default option.
  - text content `View` with value `view`
  - text content `Delete` with value `delete`
- On Selecting `View` the user should be redirected to `/problems/<id>/view` route. (Here `id` will be the `id` of the problem)
- On Selecting `Delete` the user should be redirected to `/problems/<id>/delete` route. (Here `id` will be the `id` of the problem)


### ViewProblem

- This component will get the `id` of the problem, from its parent component.
  - After getting the `id` of the problem you want to display. Get all the details of that single problem by making `GET` request to the endpoint `/cpproblems/id`
  - Between `req` and `res` to the json-server, `Loading` component should exist on DOM.
  - Refer to the following markup for knowing which HTML elements should be used. And for Tags, you can show them with the help of using arr.join(", ") (Here there is comma and a space)


![View Problem](https://i.imgur.com/tErJLne.png?2)



### Loading

- This component should be visible between `req` and `res`, whenever your application is interacting with the json-server
- Hint between `req` and `res`, `Loading` component should exist on DOM.

**Note :-**

<div style="color:red">
  <h3>Import all your CSS files in index.js. Don't import it to other pages/components. Not following this may lead to zero scores.</h3>
  <h3>Follow the order of HTML elements as mentioned in the problem statement. Refer to the snapshots provided</h3>
</div>

The problem is tested on CP.

<div>
<img src="https://i.imgur.com/yY2T01U.png" alt="cp-testlog" width="100%">
</div>

### General Instructions:

- Do not remove `data-testid=’xxx’` from anywhere inside the code. They are the test inputs, removing them, may lead to low scores.
- Do not change the current folder structure, and names of components provided.
- Only use the data present in the db.json file, and do not modify the data in the json file.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
