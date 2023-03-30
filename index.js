const express = require("express")

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())

const yummlyRoutes = require("./routes/yummlyRoutes.js");

//setup routes
app.use("/api/yummlyRoutes", yummlyRoutes);

//Test api
app.get('/', (req, res) => {
    res.send("API is Live");
});

app.listen(PORT, () => {
    console.log(
        `Server running on port ${PORT}`
    );
});