# React Random Quote Generator

This project is a straightforward React application designed to fetch and display random inspirational or thought-provoking quotes. It enhances the user experience by offering text-to-speech functionality and the ability to share quotes effortlessly.

---

✨ **Features**

- Fetches random quotes from the Quotable API
- Displays quote content and author
- Reads the quote aloud using the Web Speech API
- Allows sharing the quote via the Web Share API (if supported by the browser)
- Incorporates loading and error handling states for a smoother user experience
- Presents a user-friendly interface with clear prompt messages and interactive controls

---

🛠️ **Technologies Used**

- **React:** A powerful JavaScript library for building dynamic user interfaces.
- **Web Fetch API:** For making asynchronous network requests to retrieve quotes.
- **Web Speech API:** For converting text quotes into spoken audio.
- **Web Share API:** For native sharing functionality on supported platforms.

---

🚀 **Getting Started**

Follow these instructions to set up and run a copy of this project on your local machine for development and testing.

### Prerequisites

Ensure you have Node.js and npm (Node Package Manager) installed on your system.

### Installation

Clone the repository:

```bash
git clone [https://github.com/devxjs19/react-basics/tree/main/random-quote-generator]
```

Navigate into the project directory:

```bash
cd your-project-name
```

Install dependencies:

```bash
npm install

# or

yarn install
```

### Components Overview

**QuoteCard**: The main component responsible for managing the application's state, fetching quotes, and orchestrating other sub-components.

**Header**: Displays the application's title.

**PromptMessage**: A component that shows an initial message to the user before the first quote is loaded.

**Error**: Renders an error message if there's an issue fetching a quote.

**QuoteText**: Displays the content of the fetched quote and its author.

**GenerateQuoteBtn**: A button that triggers the fetching of a new random quote, also indicating loading and speaking states.

**UserControls**: Contains buttons for "Read Aloud" and "Share Quote" functionalities.

### Project Structure Overview

```bash

.
├── public/
├── src/
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── PromptMessage.jsx
│ │ ├── Error.jsx
│ │ ├── QuoteText.jsx
│ │ ├── GenerateQuoteBtn.jsx
│ │ └── UserControls.jsx
│ ├── QuoteCard.jsx # The main component
│ ├── App.js # Your main application component (if applicable)
│ └── index.js # Entry point of the React app
├── .gitignore
├── package.json
├── README.md # This file
└── ...
```

### Important Note:

This structure assumes QuoteCard.jsx and its associated components (Header, PromptMessage, etc.) are placed within the src and src/components directories of a standard React project. Ensure these files are correctly imported and rendered in your main App.js or index.js.

###💡 Usage

After successfully installing the dependencies, you can run the development server:

```bash
npm start

# or

yarn start
```

This command will typically open the application in your default web browser (usually at http://localhost:3000), allowing you to interact with the random quote generator.
