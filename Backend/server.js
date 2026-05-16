import app from "./src/app.js";
import { PORT } from "./src/config/config.js";
import { buildAdminJS } from "./src/config/setup.js";
import connectDB from "./src/db/db.js";

const startServer = async () => {
  try {
    await connectDB();

    await buildAdminJS(app);

    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}/admin`);
    });

  } catch (error) {
    console.error(error);
  }
};

startServer();