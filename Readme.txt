Product Catalog with MongoDB
This project creates a REST API for a product catalog using Node.js, Express, MongoDB, and Mongoose. The API will allow you to perform CRUD (Create, Read, Update, Delete) operations on product data.

Step 1: Project Setup
Create a new folder for your project and navigate into it.

Bash

mkdir product-catalog
cd product-catalog
Initialize a Node.js project and install the required packages.

Bash

npm init -y
npm install express mongoose
Create a file named server.js for all the server-side code.









--------------------------------------------------------------------------------------------






Using Postman to Test Your API
Postman provides a user-friendly interface to make API requests without writing any code. You can easily test all the endpoints we built.

1. GET all products
To retrieve all products or filter them:

Set the request method to GET.

Enter the URL: http://localhost:3000/products

To filter or sort, go to the "Params" tab and add a new row:

To filter by category:

KEY: category

VALUE: Electronics

To sort by price:

KEY: sort

VALUE: price_desc or price_asc

Click the "Send" button.

The response body will show a JSON array of all the products matching your criteria.

2. POST a new product
To add a new product to the catalog:

Set the request method to POST.

Enter the URL: http://localhost:3000/products

Go to the "Body" tab.

Select raw and choose JSON from the dropdown.

Paste the JSON data for your new product into the text area.

JSON

{
  "name": "Bluetooth Speaker",
  "price": 59.99,
  "category": "Electronics",
  "description": "Portable speaker with rich bass and long battery life."
}
Click the "Send" button.

The response will be a JSON object of the newly created product, including its unique _id.

3. PUT (Update) a product
To modify an existing product:

Set the request method to PUT.

Enter the URL, including the product's ID: http://localhost:3000/products/YOUR_PRODUCT_ID

Go to the "Body" tab.

Select raw and choose JSON.

Paste the JSON data with the fields you want to update.

JSON

{
  "price": 49.99
}
Click the "Send" button.

The response will show the updated product document.

4. DELETE a product
To remove a product from the database:

Set the request method to DELETE.

Enter the URL, including the product's ID: http://localhost:3000/products/YOUR_PRODUCT_ID

Click the "Send" button.