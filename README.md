# NGO Management System

A full-stack web application that enables NGOs to create volunteering events and allows volunteers to discover and register for them through a secure, role-based platform.

## Overview
This project was built to model a real-world NGO workflow with two distinct user roles:
- **NGO Users** – create and manage volunteering events
- **Volunteer Users** – browse events and submit volunteer registration forms
The application uses a centralized database hosted on **MongoDB Atlas** and follows a clean frontend–backend separation using REST APIs.

## Features

### Authentication & Authorization
- Login and signup functionality
- Role-based access for NGO and Volunteer users
- Protected routes to ensure correct user flows

### Volunteer Module
- View a list of available NGO events
- Access event details
- Register for events using a structured volunteer form

### NGO Module
- Create and publish volunteering events
- Manage event information such as title, description, and date

## Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (Cloud-hosted cluster)
- **API Architecture:** REST APIs

## How to Run Locally

### Prerequisites
- Node.js (v16 or above)
- MongoDB Atlas account
- Git

### Clone the Repository
git clone https://github.com/GargiAP/Ngo.git
cd Ngo

### Frontend
cd frontend 
npm start

### Backend 
cd backend 
npm run dev
