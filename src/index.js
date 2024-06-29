
app.get("/", (req, res) => res.send("Express on Vercel"));

// Escucha las conexiones entrantes en el puerto configurado en la aplicación express
app.listen(app.get("port"), () => {
  console.log(`Server connected to port: ${process.env.port}`); // Imprime un mensaje indicando la dirección del servidor
});


module.exports = app;