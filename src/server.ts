import app from "./app";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  // Keep startup log simple for local development.
  console.log(`Server is running on port ${PORT}`);
});
