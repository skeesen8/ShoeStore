<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/skeesen8/ShoeStore">
    <img src=".venv\frontend\Images\shoestore image.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">ShoeStore</h3>

  <p align="center">
    Upload, auction and bid on shoes through this full stack app!
    <br />
    <a href="https://github.com/skeesen8/ShoeStore"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/skeesen8/ShoeStore">View Demo</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Shoe Store is an application that allows users to buy designer shoes, it is an application that provides user authentication and protected routes using React and FastAPI.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![Python][Python.org]][Python-url]
* FAST API
* POSTGRESQL



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
To get a local copy up and running follow these simple example steps.


### Installation

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

3. Move into Backend Directory:
    ```bash
    cd .venv/backend
    ```

4. Install the required dependencies:
    ```bash
    pip install fastapi uvicorn
    ```

5. Run the FastAPI server:
    ```bash
    uvicorn auth:app --reload
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd .venv/frontend
    ```
2. Ensure you have node installed:
    ```bash
    hyper link to npm page
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Start the React development server:
    ```bash
    npm start
    ```

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. You will see the login page. Enter your credentials to log in.
3. Upon successful login, you will be redirected to the dashboard.



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

This app can be utilized as a shopping platform that allows for quick a quick and easy virtual auction experiance.  

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Add admin page per user to show active bids and any won auctions
- [ ] Add notification system to alert users quickly
- [ ] Add payment portal


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Sackett Keesen - [@LinkedIn](https://www.linkedin.com/in/sackett-keesen/) - skeesen8@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Img Shields](https://shields.io)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/skeesen8/ShoeStore/stargazers
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/sackett-keesen/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[Python.org]: https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue
[Python-url]: https://www.python.org/

 