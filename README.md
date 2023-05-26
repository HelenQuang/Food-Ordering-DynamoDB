# Food Ordering App (Built with React, NodeJS, DynamoDB and AWS Cognito)

This is an app where you can login, select your favorite meal and the amount to add to the cart. You can also adjust the amount in the card before order. Then you fill the order shipping information and submit data to backend.

## Project Technologies:

- ReactJS
- NodeJS & Express
- DynamoDB for database
- AWS Cognito for user login using google account
- Implement Fine Grained Access Control in AWS IAM

## Project Routes:

- GET /api/meals: Get all available meals
- GET /api/meals/:meal_id: Get specific meal (restricted)
- PATCH /api/meals/:meal_id: Modify specific meal (restricted)
- DELETE /api/meals/:meal_id: Delete specific meals (restricted)

- POST /api/orders: Submit order (protected)
- GET /api/orders: Get all orders (protected)
- GET /api/orders/:order_id: Get specific order (protected)
- PATCH /api/orders/:order_id: Modify status of order (restricted)
- DELETE /api/orders/:order_id: Delete specific order (restricted)

## DEMO Link

https://food-ordering-helen.netlify.app/

![Screenshot 2022-03-28 184626](https://user-images.githubusercontent.com/94285120/160437327-6bc08437-af50-4426-9df4-b1b4a23b3481.png)
![Screenshot 2022-03-28 184650](https://user-images.githubusercontent.com/94285120/160437334-e8ec6d5d-fa60-4e0d-9b3f-b5bdd6e7376e.png)
![Screenshot 2022-03-28 184721](https://user-images.githubusercontent.com/94285120/160437343-65fea691-fe93-41df-be1f-cf44955f5f4f.png)
![Screenshot 2022-03-28 184749](https://user-images.githubusercontent.com/94285120/160437351-c326a0f8-f731-4b56-8a3b-613f7125a7e0.png)
![Screenshot 2022-04-04 205708](https://user-images.githubusercontent.com/94285120/161603510-bbab8fe1-427d-479f-9d3d-22e3b9a6c8cd.png)
![Screenshot 2022-04-04 205734](https://user-images.githubusercontent.com/94285120/161603518-631ba199-1e69-4e3c-9394-d51748af9d7c.png)
