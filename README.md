# 🛒 Ecommerce Full-Stack Project

A full-featured, cross-platform mobile e-commerce application built with **React Native (Expo)** on the frontend and **Node.js + Express + MongoDB** on the backend — complete with an admin panel, payment integration, and real-time state management.

---

## 📱 Screenshots

> _Add your screenshots or demo GIFs here_

---

## 🚀 Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React Native (Expo ~54) | Cross-platform mobile app (iOS, Android, Web) |
| Expo Router | File-based navigation |
| Redux Toolkit + Redux Saga | Global state management & async side effects |
| Redux Persist | Persistent local state (cart, auth, etc.) |
| React Navigation | Stack & bottom-tab navigation |
| Axios | HTTP client for API communication |
| React Native Reanimated | Smooth UI animations |
| React Native Reanimated Carousel | Product carousels & sliders |
| AsyncStorage | Local data persistence |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express 5 | REST API server |
| MongoDB + Mongoose | Database & ODM |
| AdminJS | Auto-generated admin dashboard |
| JWT (jsonwebtoken) | Authentication & authorization |
| Razorpay | Payment gateway integration |
| Express Session | Session management |
| bcrypt / crypto | Password hashing & security |
| dotenv | Environment variable management |
| Nodemon | Development auto-reload |

---

## ✨ Features

- 🔐 **User Authentication** — JWT-based login, registration & session management
- 🛍️ **Product Catalog** — Browse, filter & search products
- 🛒 **Shopping Cart** — Add, remove, update quantities with persisted state
- 💳 **Payment Integration** — Razorpay gateway for real checkout flows
- 📦 **Order Management** — Place and track orders
- 🎠 **Product Carousels** — Animated sliders for featured products
- 🛠️ **Admin Panel** — Full AdminJS dashboard for managing products, users & orders
- 📱 **Cross-platform** — Runs on iOS, Android & Web via Expo

---

## 🗂️ Project Structure

```
Ecommerce-full-stack-project/
├── backend/
│   ├── models/           # Mongoose schemas (User, Product, Order, etc.)
│   ├── routes/           # Express route handlers
│   ├── middleware/        # Auth middleware, error handlers
│   ├── admin/            # AdminJS configuration
│   ├── seedScript.js     # Database seeding
│   ├── server.js         # Entry point
│   └── .env              # Environment variables (not committed)
│
└── frontend/
    ├── app/              # Expo Router pages (file-based routing)
    ├── components/       # Reusable UI components
    ├── store/            # Redux store, slices & sagas
    ├── hooks/            # Custom React hooks
    ├── constants/        # App-wide constants & theme
    └── assets/           # Images, fonts & static files
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js >= 18
- MongoDB (local instance or MongoDB Atlas URI)
- Expo CLI: `npm install -g expo-cli`
- A Razorpay account (for payment features)

---

### 🔧 Backend Setup

```bash
# 1. Navigate to the backend directory
cd backend

# 2. Install dependencies (this will also run the seed script)
npm install

# 3. Create a .env file
cp .env.example .env
```

Fill in your `.env`:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
SESSION_SECRET=your_session_secret
PORT=5000
```

```bash
# 4. Start the backend server
npm start
```

The server will run at `http://localhost:5000` and the AdminJS panel at `http://localhost:5000/admin`.

---

### 📱 Frontend Setup

```bash
# 1. Navigate to the frontend directory
cd frontend

# 2. Install dependencies
npm install

# 3. Update the API base URL
# In your constants/config file, point to your backend:
# API_URL = "http://<your-local-ip>:5000"

# 4. Start the Expo development server
npm start
```

Then scan the QR code with **Expo Go** (iOS/Android), or press:
- `a` — open Android emulator
- `i` — open iOS simulator
- `w` — open in browser

---

## 🔑 Admin Panel

AdminJS is mounted at `/admin`. On first run, the seed script populates the database with initial data.

> Default admin credentials are configured in `server.js`. Change these before deploying to production.

---

## 💳 Payment Flow (Razorpay)

1. User initiates checkout on the frontend
2. Backend creates a Razorpay order and returns an `order_id`
3. Frontend opens the Razorpay payment sheet via WebView
4. On success, the backend verifies the payment signature
5. Order is confirmed and stored in the database

---

## 📡 API Overview

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login & receive JWT |
| GET | `/api/products` | Fetch all products |
| GET | `/api/products/:id` | Fetch single product |
| POST | `/api/orders` | Place a new order |
| GET | `/api/orders/:userId` | Get user's orders |
| POST | `/api/payment/create` | Create Razorpay order |
| POST | `/api/payment/verify` | Verify payment signature |

> _Expand this table with your actual routes_

---

## 🌐 Deployment

### Backend
- Deploy to **Railway**, **Render**, or **AWS EC2**
- Set all environment variables in your hosting dashboard
- Use **MongoDB Atlas** for a managed cloud database

### Frontend
- Build with `expo build` or **EAS Build** for app stores
- For web: `expo export --platform web` and deploy to **Vercel** or **Netlify**

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [yourprofile](https://linkedin.com/in/yourprofile)

---

> ⭐ If you found this project useful, please consider giving it a star!
