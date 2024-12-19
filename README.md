# Your Personal Finance Advisor

Your personal AI financial advsior built with the MERN stack (MongoDB, Express, React, Node.js). Gives advice to users about saving money, discounts, how to best allocate budgeting. 

## Features
- **User Authenitication** -Login and Sign in pages, with form validation
- **Accounts** - Users can create new accounts, update information, and delete their own information,
- **API Interaction** - After signing up succesfully, can interact with our AI coach

## Technologies Used

- **Frontend:**

  - React
  - Tailwind CSS
  - React Router for routing
  - Axios for HTTP requests,

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB with Mongoose
## Deployment

- [website](https://ai-finance-coach.vercel.app/)


### Prerequisites

Make sure you have the following installed:

- Node.js
- npm 
- MongoDB

### Installation

**Clone the repo**

 **Install the dependencies:**

Get OPENAI API Key
Get MongoURi connection string 

### All Routes
- GET: /:id, to get specific users ID
- POST: Login form, Sign in form, as well as interaction with ChatGPT API
- PATCH: Update account information 
- Delete: Delete account information