## React-Fetch-Products-Wishlist

<h2 style="color:#215dc8">
Maximum Marks: 18
</h2>

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Should have a title  - 1 mark
 ✅ Should make GET request to the endpoint - 2 marks
 ✅ Loading indicator should be there while data is loading in the page - 1 mark
 ✅ Should have correct product visible in the dom for page 1 - 1 marks
 ✅ Should have pagination buttons visible - 2 marks
 ✅ Should have correct product visible in the dom for page 2 - 1 marks
 ✅ Should have correct product visible in the dom for page 3 - 1 mark
 ✅ Should have correct product visible in the dom for page 4 - 1 mark
 ✅ Should change button text when product is added to wishlist - 1 mark
 ✅ Should have products in the wishlist that are added - 2 marks
 ✅ Should have remove from wishlist button - 2 marks
 ✅ Should have a go-back button - 1 mark
 ✅ Check onclicking go back button the products that are added to wishlist should have Go To Wishlist as button text - 1 mark
```

<h2 style="color:red">
Submission Instructions [Please note]:
</h2>

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

<h2 style="color:#215dc8">
Problem Statement:
</h2>

- This is a React web application that fetches data using Fetch API and renders a dashboard component with pagination functionality. It allows the user to add products to their wishlist, remove them from the wishlist, and view their wishlist.

<iframe style="border: 1px solid gray; border-radius: 5px;" width="560" height="315" src="https://res.cloudinary.com/didawtzbf/video/upload/v1684391290/masai/Recording_2023-05-18_115133_puyocu.mp4"></iframe>

<h2 style="color:#215dc8">
Testing Objectives in the Evaluation:
</h2>

1. Able to use the `fetch` for `API` calls;
2. Able to use the `useState` state management hook to store the different responses for an API call.
3. Able to `use useEffect` hook .
4. Can use the data present inside the useState state to showcase it in the UI.

<h2 style="color:#215dc8">
Getting Started:
</h2>

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json
- Run the following commands
  - `npm install --engine-strict`
  - `npm start`

<h2 style="color:#215dc8">
Folder structure:
</h2>

```
src
├── App.css
├── App.js
├── index.css
├── index.js
├── Components
|  ├── Pagination.jsx
|  ├── ProductCard.jsx
|  └── Wishlist.jsx
└── Pages
   └── Dashboard.jsx
```

<h2 style="color:#215dc8">
API:
</h2>

1. Use API endpoint `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products` to get initial data on load.

2. Query parameters (refer [Docs](https://peerabduljabbar.notion.site/Get-all-tech-products-with-price-Get-a-single-tech-product-3fd86124162b49bb93186f6687a8efd3))
- page = 1 (type = number; optional = yes; works : together with limit param; Value/Values can be : 1,2,..)
- limit = 2 (type = number; optional = yes; works : together with page param; Value/Values can be : 0<value<=16)

<h2 style="color:#215dc8">
Components:
</h2>

<h3 style="color:red">
1. App.js
</h3>

1. It should have the title `React Product Wishlist` in the `h1` tag;

<h3 style="color:red">
2. Dashboard.jsx
</h3>

<figure>
<img src="https://i.imgur.com/5SNNzFK.png" style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Fig.1 - Home page while data is loading</b></figcaption>
</figure>

2. Make an API call to the given endpoint and fetch products with a limit of 5 products on each page
3. Show a loading indicator while data is being fetched from the API (already given in boilerplate)
4. Map products to the `ProductCard.jsx` component

<figure>
<img src="https://user-images.githubusercontent.com/103956933/236456079-10311fa9-6efc-4988-ae74-7b65165def10.png" style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Fig.2 - Home page after data is loaded</b></figcaption>
</figure>

<h3 style="color:red">
3. ProductCard.jsx
</h3>

4. Receive the product from `Dashboard.jsx` as props
5. Create a `div` tag with className `product_card` and inside `div` show the following data

- image in `img` tag
- brand in `h3` tag
- the category in `h4` tag
- details in the `p` tag
- price in `p` tag
- a button `Add To Wishlist` with className `addToWishlist_btn`
- a button with `Go To Wishlist` with className `addToWishlist_btn` (both buttons will have same classNames)
- Create two buttons for above functionality and show `Go To Wishlist` button if product is in wishlist otherwise show `Add To Wishlist` button

<figure>
<img src="https://user-images.githubusercontent.com/103956933/236456530-a894b41b-f6aa-4436-81ab-b1aa96ae2f54.png" style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Fig.3 - Product card markup</b></figcaption>
</figure>

<figure>
<img src="https://user-images.githubusercontent.com/103956933/236456063-123d81c3-a55d-4301-b35d-4817d9ac9e0c.png" style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Fig.4 - Button after product added to wishlist</b></figcaption>
</figure>

<h3 style="color:red">
4. Pagination.jsx
</h3>

6. On clicking any button fetch data for respective pages
7. There should be a limit of `5` products per page
8. Current page should be disabled by default and disabled button should have background color `red`

<h3 style="color:red">
5. Wishlist.jsx
</h3>

<figure>
<img src="https://user-images.githubusercontent.com/103956933/236456085-7d59d454-7d95-43a4-ad68-1e5ee89d6e4d.png" style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Fig.5 - Button after product added to wishlist</b></figcaption>
</figure>

9. Clicking `Go To Wishlist` take the user to the wishlist page
10. Product page should not be `visible` (use conditional rendering to toggle between wishlist and product page)
11. Create a `div` tag with className `wishlist_container` and create the following tag inside this

- create a button `Go Back` to take the user back to the product page with className `goBack_btn`
- please note that when the user clicks on `Go Back` button on the product page the wishlisted items should have `Go To Wishlist` button and not `Add To Wishlist`.
- create a `div` tag with className `wishlist_products_wrapper`
- map products inside above div
- inside above div create `product_card` as parent div of card and show the following data
  - image in `img` tag
  - brand in `h3` tag
  - the category in the `h4` tag
  - details in the `p` tag
  - price in `p` tag
  - a button `removeWishlist_btn` to remove the product from the wishlist with text `Remove From Wishlist`

<figure>
<img src="https://user-images.githubusercontent.com/103956933/236456538-39c8f52a-f713-4eab-a5f9-ae3ea977225f.png" style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Fig.6 - Wishlist product card</b></figcaption>
</figure>

<h2 style="color:#215dc8">
Tested on cp.masaischool.com:
</h2>

<figure>
<img src="https://i.imgur.com/QaqdK43.png" style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Fig.7 - Tested on cp</b></figcaption>
</figure>

<h2 style="color:#215dc8">
Important Instructions:
</h3>

- Do not remove the `data-testid` attributes from the boilerplate anywhere. Removing them may lead to low scores
- Do not remove the class names present on the tags, they are required for the UI.
- The `options`, `type`, `name`, `tags`, etc mentioned above are CASE-SENSITIVE. So ensure to use them in the same format, as given above.
- Do not change the current folder structure, and names of components/files provided.

<h2 style="color:#215dc8">
General Instructions:
</h3>

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
