const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.get("/versions", (req, res) => {
    const filePath = path.join(__dirname, "Versions.json");

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) return res.status(500).send("Không đọc được Versions.json");
        return res.send(data);
    });
});

app.listen(PORT, () => {
    console.log(`Server chạy ở http://localhost:${PORT}`);
});
