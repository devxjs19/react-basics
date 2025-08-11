# 📸 Simple Image Gallery with React

This project is a basic image gallery (or carousel) built with React. It allows users to navigate through a collection of images using "Previous" and "Next" buttons, providing a simple and intuitive browsing experience.

## ✨ Features

- Image Display: Shows one image at a time.

- **Navigation**: Buttons to move to the previous or next image.

- **Looping**: When reaching the end or beginning of the image list, it loops back to the other end.

- **Image Counter**: Displays the current image number out of the total images (e.g., "1 / 12").

- **Simple Transitions**: Includes a basic fade-in animation for image changes.

## 🛠️ Technologies Used

- **React**: A JavaScript library for building user interfaces.

- **react-icons**: For easily including popular icon libraries in React projects (specifically FaArrowLeft and FaArrowRight).

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js[https://nodejs.org/en] and npm (Node Package Manager) installed on your system.

### Installation

1. **Clone the repository**:

```bash
git clone https://github.com/devxjs19/react-basics/tree/main/simple-image-carouse
```

2. **Navigate into the project directory**:

```bash
cd your-project-name
```

3. **Install dependencies**:

```bash
npm install
```

or

```bash
yarn install
```

```bash
Project Structure Overview
├── public/
├── src/
│ ├── assets/ # Your image files (0.jpg, 1.jpg, ..., 11.jpg)
│ ├── components/
│ │ ├── Buttons.jsx # Component for navigation buttons
│ │ └── ImageDisplay.jsx # Main component to display images and handle navigation
│ ├── App.js # Main application component
│ └── index.js # Entry point of the React app
├── .gitignore
├── package.json
├── README.md # This file
└── ...
```

**Important Note**: This project assumes you have an assets folder inside your src directory, containing images named 0.jpg through 11.jpg (or however many images you configure). If your image paths or names are different, you'll need to adjust the images array in ImageDisplay.jsx.

### 💡 Usage

After successfully installing the dependencies, you can run the development server:

```bash
npm start
```

or

```bash
yarn start
```

This will open the application in your browser (usually at http://localhost:3000). You can then use the left and right arrow buttons to navigate through the images.
