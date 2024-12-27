# User Registration Endpoint

## Endpoint: `/users/register`

### Method: POST

### Description:
This endpoint is used to register a new user in the system. It requires the user's first name, last name, email, and password.

### Request Body:
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname`: The user's first name (required, minimum 3 characters).
  - `lastname`: The user's last name (optional, minimum 3 characters).
- `email`: The user's email address (required, must be a valid email).
- `password`: The user's password (required, minimum 6 characters).

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses:

#### Success:
- **Status Code: 201**
- **Body:**
  ```json
  {
    "token": "jwt_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

#### Validation Errors:
- **Status Code: 400**
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

#### Server Error:
- **Status Code: 500**
- **Body:**
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

# User Login Endpoint

## Endpoint: `/users/login`

### Method: POST

### Description:
This endpoint is used to authenticate a user and generate a JWT token.

### Request Body:
The request body should be a JSON object containing the following fields:
- `email`: The user's email address (required, must be a valid email).
- `password`: The user's password (required, minimum 6 characters).

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses:

#### Success:
- **Status Code: 200**
- **Body:**
  ```json
  {
    "token": "jwt_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

#### Validation Errors:
- **Status Code: 400**
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

#### Authentication Errors:
- **Status Code: 401**
- **Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

#### Server Error:
- **Status Code: 500**
- **Body:**
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

# User Profile Endpoint

## Endpoint: `/users/profile`

### Method: GET

### Description:
This endpoint is used to retrieve the profile of the authenticated user.

### Responses:

#### Success:
- **Status Code: 200**
- **Body:**
  ```json
  {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
  ```

#### Authentication Errors:
- **Status Code: 401**
- **Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

#### Server Error:
- **Status Code: 500**
- **Body:**
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

# User Logout Endpoint

## Endpoint: `/users/logout`

### Method: GET

### Description:
This endpoint is used to log out the authenticated user by clearing the authentication token and blacklisting it.

### Responses:

#### Success:
- **Status Code: 200**
- **Body:**
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### Authentication Errors:
- **Status Code: 401**
- **Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

#### Server Error:
- **Status Code: 500**
- **Body:**
  ```json
  {
    "error": "Internal Server Error"
  }
  ```
# Captain Registration Endpoint

## Endpoint: `/captains/register`

### Method: POST

### Description:
This endpoint is used to register a new captain in the system. It requires the captain's first name, last name, email, password, and vehicle details.

### Request Body:
The request body should be a JSON object containing the following fields:
```json
{
  "fullname": {
    "firstname": "Jane", // required, minimum 3 characters
    "lastname": "Doe" // optional, minimum 3 characters
  },
  "email": "jane.doe@example.com", // required, must be a valid email
  "password": "password123", // required, minimum 6 characters
  "vehicle": {
    "color": "Red", // required, minimum 3 characters
    "plate": "XYZ123", // required, minimum 3 characters
    "capacity": 4, // required, must be at least 1
    "vehicleType": "car" // required, must be one of 'car', 'truck', 'motorcycle'
  }
}
```

### Responses:

#### Success:
- **Status Code: 201**
- **Body:**
  ```json
  {
    "_id": "captain_id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
  ```

#### Validation Errors:
- **Status Code: 400**
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

#### Server Error:
- **Status Code: 500**
- **Body:**
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

# Captain Login Endpoint

## Endpoint: `/captains/login`

### Method: POST

### Description:
This endpoint is used to authenticate a captain and generate a JWT token.

### Request Body:
The request body should be a JSON object containing the following fields:
```json
{
  "email": "jane.doe@example.com", // required, must be a valid email
  "password": "password123" // required, minimum 6 characters
}
```

### Responses:

#### Success:
- **Status Code: 200**
- **Body:**
  ```json
  {
    "token": "jwt_token",
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

#### Validation Errors:
- **Status Code: 400**
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

#### Authentication Errors:
- **Status Code: 401**
- **Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

#### Server Error:
- **Status Code: 500**
- **Body:**
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

# Captain Profile Endpoint

## Endpoint: `/captains/profile`

### Method: GET

### Description:
This endpoint is used to retrieve the profile of the authenticated captain.

### Responses:

#### Success:
- **Status Code: 200**
- **Body:**
  ```json
  {
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

#### Authentication Errors:
- **Status Code: 401**
- **Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

#### Server Error:
- **Status Code: 500**
- **Body:**
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

# Captain Logout Endpoint

## Endpoint: `/captains/logout`

### Method: GET

### Description:
This endpoint is used to log out the authenticated captain by clearing the authentication token and blacklisting it.

### Responses:

#### Success:
- **Status Code: 200**
- **Body:**
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### Authentication Errors:
- **Status Code: 401**
- **Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

#### Server Error:
- **Status Code: 500**
- **Body:**
  ```json
  {
    "error": "Internal Server Error"
  }
  ```