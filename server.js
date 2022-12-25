const express = require("express");
const app = express();
const { connectDB } = require("./config/database");
const dotenv = require("dotenv");
dotenv.config();
const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const cors = require("cors");
const bodyParser = require("body-parser");
const { JWT } = require("google-auth-library");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.use("/api/v1/", indexRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/products", productRouter);

connectDB(() => {
    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`server running on ${process.env.PORT}`)
    })
})