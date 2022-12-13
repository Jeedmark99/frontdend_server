# frontdend_server
This is a RESTful API CRUD server that can be tested with services such as Insomnia and postman

Designed purpose
My server was designed to save users with their first name, alast name and age in  a DATABASE. 

In this Database users can be:

C - created R - viewed U - updated D - deleted

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::.

Manipulate these (with the help of uuid) 

Get started: 

1: Clone repo.
2: Type: npm start
The server will now start and print a message that it's listening to port 2000  (http://localhost:2000)
Open Insomnia and use the links and methods posted below to test the CRUD functionality.
{  
    "firstName": "John",
    "lastName": "Doe",
    "age": 25
}  




[GET]       http://localhost:2000/users        // Get the entire list of users


[GET]       http://localhost:2000/users/id-nr      // Show a specific user based off of the unique ID.


[POST]      http://localhost:2000/users        // Add a user to the database (array) using the code snippet above.


[DELETE]    http://localhost:2000/users/id      // Delete a user based off of the ID.


[PATCH]     http://localhost:2000/users/id      // Update a user based off of the ID. Use part of the code snippet
                                                  
                                               
For example (patch) change the firstName of user John Doe to Jane:
                {
                     "firstName": "Jane"
                }
