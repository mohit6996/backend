import express from "express"
import mongoose from "mongoose"
import  dotenv from "dotenv"
import cors from "cors"
// import productRoutes from "./routes/productroutes.js"
// import userRoutes from "./routes/userRoutes.js"
// import cartRoutes from "./routes/cartRoutes.js"
// import checkoutRoutes from "./routes/checkoutRoutes.js"
// import orderRoutes from "./routes/orderRoutes.js"
// import uploadRoutes from"./routes/uploadRoutes.js"
// import subscribeRoutes from "./routes/subscribeRoutes.js"
// import adminUserRoutes from "./routes/adminUserRoutes.js"
// import adminProductRoutes from "./routes/adminProductRoutes.js"
// import adminOrderRoutes from"./routes/adminOrderroutes.js"
// import subscribeeRoutes from "./routes/subscribeRoutes.js"
dotenv.config()

const PORT=process.env.PORT
const MONGO_URL=process.env.MONGO_URL
const app=express()
import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

// ❌ REMOVE ALL THESE IMPORTS - they're causing the crash
// import productRoutes from "./routes/productroutes.js"
// import userRoutes from "./routes/userRoutes.js"
// import cartRoutes from "./routes/cartRoutes.js"
// import checkoutRoutes from "./routes/checkoutRoutes.js"
// import orderRoutes from "./routes/orderRoutes.js"
// import uploadRoutes from "./routes/uploadRoutes.js"
// import subscribeRoutes from "./routes/subscribeRoutes.js"
// import adminUserRoutes from "./routes/adminUserRoutes.js"
// import adminProductRoutes from "./routes/adminProductRoutes.js"
// import adminOrderRoutes from "./routes/adminOrderroutes.js"
// import subscribeeRoutes from "./routes/subscribeRoutes.js"





=

// Middleware
app.use(cors());
app.use(express.json())

// ✅ Simple test route - no external routes imported
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is working without route imports!' });
});

// ✅ Add a products test route directly
app.get('/api/products/getallproducts', (req, res) => {
  res.json({ 
    message: 'Products API is working!',
    products: [] 
  });
});

//midlerwares
//jsonbodyparser come in to play when from data is transfered from front to back(client to server)

// const corsOptions = {
//   origin: [
//     "https://rabbit-umr4-638pu4zie-mohits-projects-c1808117.vercel.app",
//     "https://rabbit-u5dt.vercel.app", // Add your backend domain too
//     "http://localhost:3000" // For local development
//   ],
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
//   optionsSuccessStatus: 200 // For legacy browser support
// };


// Apply CORS before other middleware
// app.use(cors(corsOptions));


app.use(cors());

app.use(express.json())
//api routes
// app.use('/api/users',userRoutes)
// app.use('/api/products',productRoutes)
// app.use('/api/cart',cartRoutes)
// app.use('/api/checkout',checkoutRoutes)
// app.use('/api/order',orderRoutes)
// app.use('/api/upload',uploadRoutes)
// app.use('/api/subscribe',subscribeRoutes)
// app.use('/api/admin/user',adminUserRoutes)
// app.use('/api/admin/product',adminProductRoutes)
// app.use('/api/admin/order',adminOrderRoutes)
// app.use("/email",subscribeeRoutes)







//admintoken-eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg4NGNlZTBjZjllY2QyZDEwOTc0ZGFkIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTc1MzYwMTA3MCwiZXhwIjoxNzUzNzQ1MDcwfQ.33labCdyS_IVR94scL0Xq0eEBYapc0LpPsqbmgawMz0















async function connectdb(){
    try{
await mongoose.connect(MONGO_URL)
console.log("Database is connected")
    }
    catch(e){
        console.error(e)
    }

}




app.listen(PORT,()=>{
    console.log("server is runing on ",PORT)
    connectdb()
})
