import app from "./app";
import { connectDB } from "./config/mongodb";

const PORT = process.env.PORT || 4000;

(async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Servidor escuchado en el puerto ${PORT}`);
    });
  } catch (err) {
    console.error("Error iniciando la app", err);
    process.exit(1);
  }
})();