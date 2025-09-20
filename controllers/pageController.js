const path = require("path");

exports.home = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
};

exports.about = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/about.html"));
};

exports.contact = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
};

