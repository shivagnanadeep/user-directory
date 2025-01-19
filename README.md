# User Directory

A functional React.js application that fetches and displays a list of users from an API.

This project has been deployed using Vercel and [click here](https://user-directory-mu.vercel.app/) to get redirected to the website.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository using `git clone https://github.com/shivagnanadeep/user-directory.git`
2. Navigate to the project directory using `cd user-directory`
3. Install dependencies using `npm install`

## Setup Instructions

In the project directory, you can run:

<details>
<summary>Click to view</summary>

- `npm install` To download dependencies for running the project.
- `npm start` to start up the app.
</details>

## Functionalities Added to the Project

1. The search field in the home page allows to filter the users by their name.
2. The Select field mainly has two options. `A-Z` Options allows to sort user names in ascending order. `Z-A` Options allows to sort user names in descending order.
3. When a user card in home page is clicked, end user will get the detailed information regarding the user that he had clicked.
4. A button `Go Back` was included in User Details page so that the end user can go back to the Home Page after getting complete information of the clicked user.
5. The project was made responsive using `CSS Grid` and `CSS Media Queries`.
6. Run time errors caused by unsuccessful fetch calls are handled using try-catch block and will result a failure view showing fetch failure.
7. The project was deployed using Vercel.

## Views

### The Project includes three types of views:

- `Success View` displays what happens if the API fetch has been made successfully.
- `Failure View` displays what happens if the API fetch has been unsuccessful and if user network is disconnected while fetching.
- `Loading View` displays what happens if the API fetching process is ongoing.

## Routes

### Project totally has 2 routes

- `Home Route` displays the list of users.
- `User Details Route` displays the information of specific user.

## API Requests and Responses

### Get All Users

#### API: `https://jsonplaceholder.typicode.com/users`

#### Method: `GET`

#### Description:

Returns a response containing the all user details

#### Sample Response

```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  ...
]
```

### Get Specific User

#### API: `https://jsonplaceholder.typicode.com/users/:id`

#### Example: `https://jsonplaceholder.typicode.com/users/1`

#### Method: `GET`

#### Description:

Returns a response containing the specific user details

#### Sample Response

```json
{
	"id": 1,
	"name": "Leanne Graham",
	"username": "Bret",
	"email": "Sincere@april.biz",
	"address": {
		"street": "Kulas Light",
		"suite": "Apt. 556",
		"city": "Gwenborough",
		"zipcode": "92998-3874",
		"geo": {
			"lat": "-37.3159",
			"lng": "81.1496"
		}
	},
	"phone": "1-770-736-8031 x56442",
	"website": "hildegard.org",
	"company": {
		"name": "Romaguera-Crona",
		"catchPhrase": "Multi-layered client-server neural-net",
		"bs": "harness real-time e-markets"
	}
}
```

## Resources

- The icons used in the project are directly included in the project from `react-icons` package
- The Three Dots loader and Tail Spin loader are imported directly from `react-loader-spinner`
- Used `react-router-dom` for routing between different routes inside the project.
- Styling has been done using `CSS` and `CSS FlexBox` and `CSS Grid`.

## Contact

Shiva GnanaDeep Malepati - [shivagnanadeepmalepati@gmail.com](shivagnanadeepmalepati@gmail.com)

Project Link: [https://github.com/shivagnanadeep/user-directory](https://github.com/shivagnanadeep/user-directory)
