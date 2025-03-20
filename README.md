# ThreadX - Node.js Backend Demo

Welcome to **ThreadX**, a robust Node.js backend project showcasing my skills in building scalable and efficient server-side applications. This repository demonstrates a lightweight API setup with modern tools and best practices, designed to handle real-world use cases effectively.

## Overview

This project is a backend system built to store and retrieve data seamlessly. It integrates a PostgreSQL database with Node.js, leveraging TypeScript for type safety and Docker for consistent deployment. Whether you're exploring my work or looking to collaborate, this repo highlights my ability to deliver clean, maintainable, and production-ready code.

## Tech Stack

- **Node.js**: Core runtime for building the backend.
- **Express.js**: Lightweight framework for handling HTTP requests and routing.
- **TypeScript**: Adds static typing for safer and more predictable code.
- **PostgreSQL**: Relational database for structured data storage.
- **Prisma ORM**: Modern ORM for seamless database interactions.
- **Docker**: Containerization for consistent development and deployment.
- **JWT**: Secure authentication mechanism (if applicable based on your work).

## Features

- **Write API**: Stores data in PostgreSQL with proper validation.
- **Read API**: Retrieves data efficiently from the database.
- **Containerized Setup**: Runs PostgreSQL and the app in Docker containers.
- **Type-Safe Codebase**: Built with TypeScript for reliability and scalability.
- **Modular Structure**: Organized for easy maintenance and future growth.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Docker
- Git

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Jeelislive/threadx.git
   cd threadx

2.Install dependencies:
bash

3.npm install
Set up environment variables (e.g., .env):
env

4.DATABASE_URL="postgresql://user:password@localhost:5432/threadx"
PORT=3000
Run Docker containers:
bash

5.docker-compose up -d
Start the server:
bash

6.npm run dev
API Endpoints
POST /api/data: Store data in the database.
GET /api/data: Retrieve stored data.
