const express = require('express');
const app = express();
const nodemon = require('nodemon');
app.use(express.json());

const PORT = 1100;

let user = {
    username: "dogecoin",
    password: "password1",
    email: "test@test.com",
    courses: {
        course: {
            courseId: "CMSC2204",
            courseName: "mobile",
            startDate: "08/29/2021",
            endDate: "12/21/2021"
        },
        course1: {
            courseId: "CMSC2204",
            courseName: "mobile",
            startDate: "08/29/2021",
            endDate: "12/21/2021"
        },
        course2: {
            courseId: "CMSC2204",
            courseName: "mobile",
            startDate: "08/29/2021",
            endDate: "12/21/2021"
        }
    }
}


app.post(`/addUser`, (res, req) => {
    try {
        console.log(req.body)
        return res.status(200).json(`Added user ${username} successfully`)
    }
    catch {
        return res.status(500);
    }
})

app.get(`/getUser`, (req, res) => {
    try {
        return res.status(200).json(user);
    }
    catch {
        return res.status(500);
    }
})

app.listen(PORT, () => {
    console.log(`Port ${PORT} is Running.`)
})