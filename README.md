# VentureVerse

Welcome to **VentureVerse**, a comprehensive platform designed to connect professionals and businesses. This project is a full-stack web application featuring a job portal, messaging system, blog section, and more. The backend is built with Express, while the frontend leverages React.js and Tailwind CSS to create a responsive and visually appealing user interface.

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **Job Portal**: Browse and apply for jobs. Employers can post job listings and manage applications.
2. **Messaging System**: Real-time messaging to facilitate communication between users.
3. **Blog Section**: Users can read and publish blog posts.
4. **Responsive Design**: Optimized for various devices and screen sizes.
5. **Cross-Browser Compatibility**: Ensures a consistent experience across different browsers.
6. **Clear Navigation**: Intuitive and easy-to-use navigation system.
7. **Cohesive Typography**: Harmonious font choices for a professional look.
8. **Harmonious Color Scheme**: A visually pleasing palette to enhance user experience.

## Folder Structure

The project is organized into two main folders: `backend` and `frontend`.

```
VentureVerse/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── config/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── tailwind.config.js
├── README.md
└── package.json
```

### Backend

- `controllers/`: Contains the logic for handling requests.
- `models/`: Defines the database schemas.
- `routes/`: Contains the route definitions.
- `app.js`: Main application file.
- `config/`: Configuration files.

### Frontend

- `public/`: Static assets.
- `src/`: Source code for the React application.
  - `components/`: Reusable components.
  - `pages/`: Page components.
  - `App.js`: Main application component.
  - `index.js`: Entry point for the React application.
- `tailwind.config.js`: Tailwind CSS configuration file.

## Installation

### Prerequisites

- Node.js
- npm or yarn
- MongoDB (for backend)

### Backend Setup

1. Navigate to the `backend` folder:
   ```sh
   cd VentureVerse/backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file and add your MongoDB URI and other environment variables:
   ```sh
   MONGO_URL=your_mongo_uri
   JWT_SECRET=""
   ```

4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` folder:
   ```sh
   cd VentureVerse/frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the frontend development server:
   ```sh
   npm start
   ```

## Usage

Once both the backend and frontend servers are running, you can access the backend at `http://localhost:3000`  and the frontend at `http://localhost:5173`(depends on the available free ports on your device) .

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
