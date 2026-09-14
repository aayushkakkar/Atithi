# 🏡 Atithi — Homestay & Rental Platform

> Discover local *sanskriti*, authentic regional food, and firsthand cultural experiences through unique stays.

---

## Inspiration & Motivation

While traveling, I realized that modern travel often misses the heart of local cultures, traditions, and authentic regional food. **Atithi** was born out of a personal desire to bridge that gap—creating a platform that connects travelers directly with local hosts to promote and experience rich local *sanskriti* firsthand.

---

## Key Features & Technical Implementations

### Authentication & Authorization
* **Secure User Management:** Integrated `passport` and `passport-local` for authentication with salted password hashing.
* **Access Control:** Restricted CRUD capabilities so users can only edit, update, or delete their own listings and reviews.

### Session & Cookie Management
* **Stateful User Sessions:** Utilized `express-session`, `cookie-parser`, and `connect-mongo` to maintain persistent user activity and manage session storage across Atlas.
* **User Feedback:** Leveraged `connect-flash` to display dynamic flash notifications for actions like logins, listing creation, or errors.

### Architecture, Routing & Middlewares
* **MVC Pattern:** Structured code using the **Model-View-Controller** design pattern with express routers and custom controllers for clean separation of concerns.
* **Custom Middlewares:** Built middleware checks to enforce authentication status, listing ownership, and schema validations.

### Validation & Error Handling
* **Dual-Layer Validation:** Implemented client-side HTML/JS checks alongside robust server-side schema validations using **Joi**.
* **Async Error Wrapping:** Used a custom `wrapAsync` utility function to handle asynchronous errors smoothly without crashing the server.

### Maps, Media & Data Storage
* **Map Rendering:** Integrated **Mapbox** with **GeoJSON** for interactive listing location previews.
* **Image Cloud Storage:** Configured **Cloudinary** for image uploads, URL transformations, and image preview handling.
* **Cloud Database & Seeding:** Configured MongoDB schemas on **MongoDB Atlas** with automated seeding scripts (`init/index.js`).

## Tech Stack

**Frontend:**
* HTML5, CSS3, JavaScript (ES6+)
* Bootstrap 5 & EJS (Embedded JavaScript Templates)
* Mapbox GL JS (GeoJSON integration)

**Backend:**
* Node.js & Express.js
* Passport.js (`passport-local`)
* Joi (Server-side schema validation)
* Express-Session, Cookie-Parser, Connect-Flash

**Database & Cloud Services:**
* MongoDB Atlas & Mongoose ODM
* Connect-Mongo (Session Store)
* Cloudinary (Image Hosting)
* Render (Production Hosting)

## Environment Variables

Create a `.env` file in the root directory and define the following variables:

```env
ATLASDB_URL=your_mongodb_atlas_connection_string
SECRET=your_express_session_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAPBOX_TOKEN=your_mapbox_access_token

```

## Local Setup

1. Clone the repository:
git clone https://github.com/your-username/atithi.git
cd atithi
2. Install dependencies:
npm install
3. Seed the database:
node init/index.js
4. Start the server:
node app.js
5. Open http://localhost:8080 in your browser.

## Project Structure

```text
Atithi/
├── controllers/       # Route logic and request handlers
├── init/              # Database seeding scripts
├── models/            # Mongoose models (Listing, Review, User)
├── routes/            # Express router files
├── utils/             # Error handling utilities
├── views/             # EJS layout and template files
├── app.js             # Application entry point
└── cloudConfig.js     # Cloudinary and Multer configuration
```
