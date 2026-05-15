import app from "./src/app";
import connectDB from "./src/db/db";

const PORT = 3100;

connectDB();

app.listen(PORT, () => {
 console.log(`Server started at port ${PORT}`)
})