# Fast React Pizza

## Description:
- This application is created to help users order pizza from the menu by adding items to their cart.
- Users should proceed to enter their data; no authentication is required (user name, phone number, and address).
- Additionally, users can add thier GPS position to make delivery process easier.
- No authentication or payment required, so users should pay in cash.
- Finally, users should be taken to the order page to confirm the order.
- Order are made by sending a POST request with the order data (user data + selected pizzas) to the API.
- After ordering, users receive a unique ID for their order.
- Users can follow their order status using the given ID.
- The products in the menu can be changed, so we need to fetch menu data from an API.
- Users can also mark thier order as priority for and additional 20% of the cart price.
- Users can mark thier order as priority even after it has been placed.

## Necessary Pages:
1- HomePage "/"
2- Pizza menu "/menu"
3- Cart "/cart"
4- Placing a new order "/order/new"
5- Looking up an order "/order/:orderID"

## Used Technologies:
- Routing: React Router.
- Styling: tailwindcss.
- Remote State Management: React Router(v6.4+)
- UI State Management: Redux.


