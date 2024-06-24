# Blog Application

This is a full-stack Blog Application built with ReactJS for the frontend and Node.js, Express, and MongoDB for the backend. The application allows users to create, view, and manage blog posts. It also integrates with the OpenAI API to generate blog content based on the provided title.

## Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)
- MongoDB (v4.x or later)

## Project Structure

- `frontend/`: Contains the ReactJS frontend.
- `backend/`: Contains the Node.js backend.

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/garvit74/Fynd-assignment.git  
cd blog-app
```

## Install Dependencies

### Frontend

```bash
cd frontend
npm install
```

### Backend 

```bash
cd backend
npm install
```

## Environment Variables

### Backend

No need to create any env file because the data of mongodb is stored locally. If you need to upload it to mongo-db atlas change the URI in index file

### frontend 

Create a .env file in the frontend/ directory and add your OpenAI API key

```plaintext
REACT_APP_OPENAI_API_KEY=your_openai_api_key
```

## Run The Application

### Backend 

```bash
cd backend
npm run dev
```

The backend server will run on http://localhost:3000.

### Frontend

```bash
cd frontend
npm start
```

The frontend application will run on http://localhost:3001.

## Project Details

### Backend - (Node.js, Express, MongoDB)

The backend provides RESTful APIs for managing blog posts. It includes routes for:

- POST /blogs: Create a new blog post.
- GET /blogs: Retrieve all blog posts.
- GET /blogs/:id: Retrieve a blog post by ID.

### Frontend - (ReactJS, Tailwind CSS, Material-UI)

The frontend allows users to interact with the blog application. It includes pages for:

- Creating new blog posts.
- Listing existing blog posts.
- Generating blog content using the OpenAI API.


## Technologies Used 

### Backend

- Node.js
- Express
- MongoDB
- Nodemon
- CORS

### Frontend

- ReactJS
- Tailwind CSS
- Material-UI
- Axios
- React Router
- OpenAI API


## Access the Application

Open your web browser and go to http://localhost:3001 to access the Blog Application.

This README provides comprehensive instructions on setting up and running your full-stack Blog Application with both frontend and backend components residing in the same repository. Adjust paths and commands as necessary based on your actual project structure.





