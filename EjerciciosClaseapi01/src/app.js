const express = require("express");
const taskRouter = require("./router/task.routers");

const app = express();
app.use(express.json());

app.use("/api/tasks", taskRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});