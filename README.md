# 🛍️ MERN Shop - Full Stack E-Commerce Application

> A modern, feature-rich e-commerce platform built with the MERN stack (MongoDB, Express, React, Node.js)

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![React](https://img.shields.io/badge/React-19-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-8.18-green)
![Express](https://img.shields.io/badge/Express-5.1-black)

## ✨ Features

### 🛒 Core Shopping Features
- Browse and search products
- Add products to cart
- Checkout and payment processing (Stripe integration)
- Order history and tracking
- Wishlist functionality
- Product reviews and ratings

### 👥 User Features
- User authentication (JWT)
- User registration and login
- Profile management
- Order management
- Address management
- Payment history

### 🎛️ Admin Dashboard
- Product management (CRUD)
- Category management
- Order management
- User management
- Sales analytics and dashboards
- Admin-only access control

### 🔒 Security & Performance
- JWT authentication
- Password hashing with bcryptjs
- Rate limiting
- CORS protection
- Helmet security headers
- MongoDB injection prevention

### 🎨 UI/UX
- Responsive design with Tailwind CSS
- Modern React 19 with hooks
- Redux state management
- Vite for fast development
- Mobile-first approach

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download](https://git-scm.com/)

### Environment Setup

You'll need accounts for:
- **MongoDB Atlas** - [Free database](https://www.mongodb.com/cloud/atlas)
- **Stripe** - [Payment processing](https://stripe.com)
- **Cloudinary** (optional) - [Image hosting](https://cloudinary.com)

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/mwaraem/shoply-app.git
cd shoply-app
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

## ⚙️ Configuration

### Backend Setup (`.env` file)

Create a `.env` file in the `server/` directory:

```env
# Server Configuration
PORT=4000
NODE_ENV=development

# Database
MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/mern-shop?retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_change_this
JWT_EXPIRES=30d

# Frontend URL
CLIENT_URL=http://localhost:5173

# Stripe (Payment Processing)
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here

# Cloudinary (Image Upload) - Optional
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### How to Get Credentials

#### MongoDB Atlas
1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a cluster (free tier available)
4. Click "Connect" and copy your connection string
5. Replace `username:password` with your credentials

#### Stripe
1. Go to [stripe.com](https://stripe.com)
2. Create an account
3. Go to Developers → API Keys
4. Copy your Secret Key (starts with `sk_test_`)

#### Cloudinary (Optional)
1. Go to [cloudinary.com](https://cloudinary.com)
2. Create an account
3. Copy your Cloud Name, API Key, and API Secret from dashboard

---

## 🏃 Running the Project

### Option 1: Run Backend and Frontend Separately

#### Terminal 1 - Start Backend Server
```bash
cd server
npm start
```
✅ Backend runs at: `http://localhost:4000`

#### Terminal 2 - Start Frontend Development Server
```bash
cd client
npm run dev
```
✅ Frontend runs at: `http://localhost:5173`

### Option 2: Run Both Simultaneously (from root)

If you have `concurrently` installed:
```bash
npm run dev
```

---

## 📁 Project Structure

```
mern-shop/
├── server/                          # Backend (Express.js)
│   ├── src/
│   │   ├── app.js                  # Express app configuration
│   │   ├── server.js               # Server entry point
│   │   ├── config/
│   │   │   └── db.js               # MongoDB connection
│   │   ├── controllers/             # Route controllers
│   │   │   ├── auth.controller.js
│   │   │   ├── product.controller.js
│   │   │   ├── order.controller.js
│   │   │   └── admin.controller.js
│   │   ├── models/                  # Mongoose schemas
│   │   │   ├── User.js
│   │   │   ├── Product.js
│   │   │   └── Order.js
│   │   ├── routes/                  # API routes
│   │   │   ├── auth.routes.js
│   │   │   ├── product.routes.js
│   │   │   ├── order.routes.js
│   │   │   └── admin.routes.js
│   │   ├── middleware/              # Custom middleware
│   │   │   ├── auth.js              # JWT authentication
│   │   │   └── admin.js             # Admin check
│   │   └── utils/
│   │       └── seed.js              # Database seeding
│   ├── package.json
│   └── .env                         # Environment variables
│
├── client/                          # Frontend (React + Vite)
│   ├── src/
│   │   ├── main.jsx                # React entry point
│   │   ├── App.jsx                 # Main app component
│   │   ├── pages/                   # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Product.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Checkout.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── components/              # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProductGrid.jsx
│   │   ├── admin/                   # Admin components
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── AdminProducts.jsx
│   │   │   ├── AdminOrders.jsx
│   │   │   └── AdminUsers.jsx
│   │   ├── features/                # Redux slices
│   │   │   ├── auth/
│   │   │   │   └── userSlice.js
│   │   │   └── cart/
│   │   │       └── cartSlice.js
│   │   ├── lib/
│   │   │   └── api.js               # Axios configuration
│   │   ├── styles/
│   │   │   └── index.css            # Global styles
│   │   └── context/
│   │       └── ThemeContext.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
└── README.md                        # This file
```

---

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/profile` - Get user profile

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order details

### Admin
- `GET /api/admin/users` - Get all users (admin only)
- `GET /api/admin/orders` - Get all orders (admin only)
- `GET /api/admin/dashboard` - Get dashboard stats (admin only)

---

## 🧪 Testing Features

### 1. Browse Products
- Visit `http://localhost:5173`
- Click on products to view details

### 2. User Authentication
- Click "Register" to create new account
- Use "Login" to sign in
- Test logout functionality

### 3. Shopping Cart
- Add products to cart
- View cart items
- Adjust quantities

### 4. Checkout
- Complete checkout process
- Test payment with Stripe test card: `4242 4242 4242 4242`

### 5. Admin Dashboard
- Create admin account first
- Access admin panel
- Manage products, orders, and users

---

## 🛠️ Build for Production

### Build Frontend
```bash
cd client
npm run build
```
Creates optimized production build in `client/dist/`

### Build Backend
Backend is already production-ready. Just set `NODE_ENV=production` in `.env`

---

## 📱 Deployment

### Deploy on Render (Recommended)
See the [deployment guide](./DEPLOYMENT.md) for step-by-step instructions.

**Quick Summary:**
1. Push to GitHub
2. Create Web Service for backend on Render
3. Create Static Site for frontend on Render
4. Connect them via environment variables
5. Done! ✅

---

## 🐛 Troubleshooting

### Backend won't start
```bash
# Check if port 4000 is in use
# Solution: Change PORT in .env or kill the process using port 4000
```

### "MongoDB connection failed"
- Verify `MONGO_URI` is correct
- Check MongoDB Atlas IP whitelist (add `0.0.0.0/0` for all IPs)
- Ensure database name matches (`mern-shop`)

### "CORS error" in frontend
- Verify `CLIENT_URL` is set correctly in backend `.env`
- Check frontend is running on `http://localhost:5173`

### "Cannot find module" errors
- Delete `node_modules/` and `package-lock.json`
- Run `npm install` again
- Clear npm cache: `npm cache clean --force`

### Frontend shows "Cannot reach API"
- Ensure backend is running on port 4000
- Check browser DevTools Network tab for actual errors
- Verify API base URL in `client/src/lib/api.js`

---

## 📚 Learn More

- **Express.js**: https://expressjs.com
- **React**: https://react.dev
- **MongoDB**: https://docs.mongodb.com
- **Stripe**: https://stripe.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Vite**: https://vitejs.dev/guide/

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the ISC License.

---

## 👨‍💻 Author

**mwaraem**
- GitHub: [@mwaraem](https://github.com/mwaraem)

---

## ⭐ Support

If you found this project helpful, please star it! ⭐

For questions or issues, please open a GitHub issue.

---

## 📋 Checklist Before First Run

- [ ] Node.js v18+ installed
- [ ] MongoDB Atlas account created and connection string copied
- [ ] Stripe account created and secret key copied
- [ ] `.env` file created in `server/` directory
- [ ] Dependencies installed (`npm install` in both folders)
- [ ] Backend running on port 4000
- [ ] Frontend running on port 5173
- [ ] Can access `http://localhost:5173` in browser

---

**Happy Coding! 🚀**
