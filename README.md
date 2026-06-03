# Hamtaro API

<p align="center">
  A responsive, and dynamic web application that fetches and displays characters from the Hamtaro universe using an external API.
</p>

<p align="center">
  <a href="https://anabeatrizabrantes.github.io/hamtaro-API/" target="_blank">
    <img src="https://img.shields.io/badge/🔗_Live_Demo-Click_Here-ff7b7b?style=for-the-badge&logoColor=white" alt="Live Demo"/>
  </a>
</p>

##  Project Overview

This project was built to practice **Front-End Development** and **Asynchronous JavaScript**. 
Instead of hardcoding the character data into the HTML structure, the application dynamically performs an HTTP request using the `fetch()` API, reads the JSON response, and injects responsive UI components into the DOM.
The interface features a cozy, pastel-toned visual identity designed completely from scratch with pure CSS.

## Features

* **Dynamic Data Fetching:** Consumes character information (names, images, and descriptions) from a REST API in real-time.
* **Loading State Handling:** Displays a friendly user message while waiting for the server's response.
* **Error Prevention:** Includes a `try...catch` block to gracefully catch API downtime and notify the user.
* **Responsive Layout:** Uses CSS Flexbox to organize cards into a fluid gallery that adapts nicely to mobile and desktop screens.
* **Interactive UI:** Smooth scale-up hover animations on cards to elevate the overall user experience.

---

## Technologies Used

* **HTML5:** Semantic architecture.
* **CSS3:** Custom layouts, Google Fonts integration (`Comic Neue`), linear gradients, and modern hover transitions
* **JavaScript (ES6+):** Asynchronous logic (`async/await`), Fetch API, and dynamic DOM manipulation.

---

## Project Structure

```text
├── index.html     # Application structure & DOM mounting point
├── style.css      # Custom pastel theme and responsive grid styling
└── script.js      # Asynchronous API handler and DOM injection logic
