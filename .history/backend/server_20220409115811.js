require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const path = require('path')


const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))

// Routes
app.use("/api/QuanLyNguoiDung", require("./routes/userRouter"));
app.use("/api/QuanLyDatVe", require("./routes/datVe"));
app.use("/api/QuanLyPhim", require("./routes/movie"));
app.use("/api/QuanLyRap", require("./routes/rap"));
app.use('/api', require('./routes/upload'))


// Connect to mongodb
mongoose.connect(process.env.MONGODB_URL,()=>{
    console.log("Connect database successfully")
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})