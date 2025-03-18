# ShoeStore

Shoe Store is an application that allows users to buy designer shoes, it is an application that provides user authentication and protected routes using React and FastAPI.

### Built With

* [![React][React.js]][React-url]
* [![Python][Python.org]][Python-url]
* PostgreSQL
* FastAPI


## Table of Contents

- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/ShoeStore.git
    cd ShoeStore
    ```

2. Create a virtual environment and activate it:
    ```bash
    python -m venv .venv
    source .venv/bin/activate  # On Windows, use `.venv\Scripts\activate`
    ```

3. Install the required dependencies:
    ```bash
    pip install fastapi uvicorn
    ```

4. Run the FastAPI server:
    ```bash
    uvicorn auth:app --reload
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd .venv/frontend
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. You will see the login page. Enter your credentials to log in.
3. Upon successful login, you will be redirected to the dashboard.

## Project Structure

```
ShoeStore/
├── .venv/
│   ├── frontend/
│   │   ├── src/
│   │   │   ├── App.js
│   │   │   ├── AuthContext.js
│   │   │   ├── Dashboard.js
│   │   │   ├── Login.js
│   │   │   ├── Protectedroute.js
│   │   │   └── UserProfile.js
│   │   ├── public/
│   │   └── package.json
│   ├── auth.py
│   └── requirements.txt
├── README.md
└── .gitignore
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
 
