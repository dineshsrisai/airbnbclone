# WanderLust - Vacation Rental Platform (Airbnb Clone)

WanderLust is a full-stack web application designed to replicate the core functionality of a vacation rental platform. It allows users to browse listings, create new accommodations, leave reviews, and view locations on a map.

## 💻 Key Technologies Used

This project is built using the MERN stack ecosystem, with a focus on modern Node.js development practices:

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (via Mongoose ODM)
* **Frontend/Templating:** EJS (Embedded JavaScript) for dynamic views, Bootstrap 5 for styling.
* **Authentication:** Passport.js (Local Strategy) for user login/signup.
* **Validation:** Joi schema validation for server-side data integrity.
* **Mapping:** Mapbox Geocoding and Maps SDK for location display.
* **Cloud Storage:** Cloudinary for managing and storing listing images.

## ✨ Core Application Features

### 1. Listings Module

The primary entity of the application. Each listing includes details like title, description, image, price, location, and geographical data.

### 2. Reviews & Rating

Users can view and submit reviews and ratings (1-5 stars) for any listing. Reviews are tied to the listing and the reviewer.

### 3. User Authentication & Authorization

* **Sign-Up / Log-In:** Secure user registration and login functionality.
* **Authorization:** Strict controls ensuring users can only **edit** or **delete** listings that they own.

### 4. Geolocation & Maps

Each listing displays a map showing its exact location. The geographical coordinates are automatically retrieved and saved using the **Mapbox Geocoding service** when a new listing is created.

---

## 🛠️ CRUD Operations

The following Create, Read, Update, and Delete operations are implemented primarily for the **Listings** resource:

### **C**reate

| Route | Method | Description | Permissions |
| :--- | :--- | :--- | :--- |
| `/listings/new` | `GET` | Renders the form to create a new listing. | **Logged-In Users Only** |
| `/listings` | `POST` | Submits the form data and saves the new listing to the database. | **Logged-In Users Only** |

### **R**ead

| Route | Method | Description | Permissions |
| :--- | :--- | :--- | :--- |
| `/listings` | `GET` | **Index Route:** Displays all available listings in a grid format. | Public |
| `/listings/:id` | `GET` | **Show Route:** Displays detailed information for a specific listing, including reviews and map location. | Public |

### **U**pdate

| Route | Method | Description | Permissions |
| :--- | :--- | :--- | :--- |
| `/listings/:id/edit` | `GET` | Renders the form pre-filled with the listing data for editing. | **Owner Only** |
| `/listings/:id` | `PUT` | Submits updated data and overwrites the existing listing in the database. | **Owner Only** |

### **D**elete

| Route | Method | Description | Permissions |
| :--- | :--- | :--- | :--- |
| `/listings/:id` | `DELETE` | Permanently removes the listing from the database. | **Owner Only** |

### Additional CRUD for Reviews

| Operation | Route | Method | Description | Permissions |
| :--- | :--- | :--- | :--- | :--- |
| **C**reate Review | `/listings/:id/reviews` | `POST` | Creates and attaches a new review to the listing. | **Logged-In Users Only** |
| **D**elete Review | `/listings/:id/reviews/:reviewId` | `DELETE` | Removes a specific review from a listing and the database. | Review Author Only |
