# React Practical test : User Module

This is boilerplate project for React Practical test.
Simple user listing page with ability to add/edit users. API Already given and wrapper components for already build. Just need to implement code where asked.

## Available Scripts

In the project directory, you can run:

### `yarn start`

## API

You may see all supported list of API under /services/testAPI.http folder.

```
## GET users

GET https://reqres.in/api/users?page=1 HTTP/1.1
content-type: application/json

#### GET Single User

GET https://reqres.in/api/users/2 HTTP/1.1
content-type: application/json



#### Create New User

POST https://reqres.in/api/users HTTP/1.1
content-type: application/json

{
    "name": "Test Name",
    "job": "developer"
}

#### Update User

PUT https://reqres.in/api/users/2 HTTP/1.1
content-type: application/json

{
    "name": "Test Name",
    "job": "developer"
}


#### Delete User By ID

DELETE https://reqres.in/api/users/2 HTTP/1.1
content-type: application/json

```
