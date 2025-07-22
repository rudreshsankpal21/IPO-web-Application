# **IPO Web Application & API **

## **📌 Project Overview**

The **IPO Web Application** is a full-stack project built for managing upcoming IPOs.
It includes:

- A **REST API backend** (Node.js + Express + PostgreSQL)
- A **React frontend** with login/register & IPO CRUD features

---

## **✨ Features**

### **Frontend**

- Home page with all IPOs displayed
- User authentication (Register/Login)
- Add/Edit/Delete IPOs (only if logged in)
- Responsive and clean UI with CSS

### **Backend**

- IPO CRUD APIs (`/api/ipos`)
- User Authentication APIs (`/api/auth`)
- PostgreSQL Database Integration
- JWT-based authentication

---

## **🛠 Tech Stack**

- **Frontend:** React, React Router, CSS
- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Auth:** JWT (JSON Web Token)

---

## **📂 Project Structure**

### **Backend (`/server`)**

```
server/
├── config/
│   └── db.js
├── controllers/
│   ├── ipoController.js
│   └── authController.js
├── routes/
│   ├── ipoRoutes.js
│   └── authRoutes.js
├── index.js
└── package.json
```

### **Frontend (`/client`)**

```
client/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── IPOCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AddIPO.jsx
│   │   ├── EditIPO.jsx
│   │   ├── IPODetails.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   │   ├── Global.css
│   │   ├── Home.css
│   │   └── Form.css
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

---

## **⚡ Backend Setup**

1. Navigate to the backend folder:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Add a **`.env`** file with:

   ```env
   PORT=5000
   DATABASE_URL=postgres://username:password@localhost:5432/ipo_db
   JWT_SECRET=your_secret_key
   ```

4. Start the server:

   ```bash
   npm start
   ```

   Server runs on **[http://localhost:3000](http://localhost:3000)**

---

## **⚡ Frontend Setup**

1. Navigate to the frontend folder:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React app:

   ```bash
   npm run dev
   ```

   App runs on **[http://localhost:5173](http://localhost:5173)**

---

## **🚀 API Endpoints**

### **Auth Routes**

- `POST /api/auth/register` – Register new user
- `POST /api/auth/login` – Login user

### **IPO Routes**

- `GET /api/ipos` – Get all IPOs
- `GET /api/ipos/:id` – Get IPO by ID
- `POST /api/ipos` – Add new IPO
- `PUT /api/ipos/:id` – Update IPO
- `DELETE /api/ipos/:id` – Delete IPO

---
