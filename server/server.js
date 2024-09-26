const express = require("express");
const cors = require("cors");
const app =express();
const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/api",(req, res)=> {
res.json({
    people:  [
        { name: "Madhuri", age: 30, gender: "Female" },
        { name: "Nitin", age: 32, gender: "Male" },
        { name: "Mads", age: 30, gender: "Female" },
        { name: "Nitz", age: 32, gender: "Male" },
      ],
});
});

app.listen(8080, () => {
    console.log("Server is running on port 8080")
});

