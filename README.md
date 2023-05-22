# Description

Access Star Wars data using React and Laravel.

# Prerequisites

Docker and Docker Compose are installed on your system.

**Step 1: Clone the Repository**
Clone the repository or download the source code to your local machine.

**Step 2: Navigate to the Project Directory**
Open a terminal or command prompt and navigate to the root folder of the project.

**Step 3: Build and Run the Docker Container**
To build and run the Docker container, use the following command:

```bash
docker-compose up
```

This command will build the necessary images and start the containers.

**Step 4: Access the Application**
Once the containers are up and running, you can access the application in your web browser using the following URLs:

Backend (Laravel): http://localhost:8000
Frontend: http://localhost:3000

The Laravel backend will be running on port 8000, while the React frontend will be running on port 3000.

Feel free to explore and interact with the application through the provided URLs.

**Step 5: Stopping the Application**
To stop the running containers, you can use the following command:

```bash
docker-compose down
```

This will gracefully stop and remove the containers, while preserving the application's data.
