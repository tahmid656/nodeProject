const { createServer } = require("http");

const server = createServer((req, res) => {
  if (req.url === "/") {
    res.end("You are in the home page!");
  }
  if (req.url === "/about") {
    res.end("You are in the about page");
  }
  res.end(`
            <h1>Hmm...The page ${req.url} does not seem to exist</h1>
             <a href="/">Take me back home</a>
        `);
});

server.listen(5000);
