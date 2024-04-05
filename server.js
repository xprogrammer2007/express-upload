const express = require("express");

const { spawn } = require("child_process");

const app = express();
const port = 3000;

app.get('/welc/:num/:msg', (req, res) => {
  // Execute the shell command in the background
  const command = 'mudslide';
  const args = ['send', '+20'+req.params.num, req.params.msg];
  
  const child = spawn(command, args, {
    detached: true,
    stdio: 'ignore'
  });

  // Respond immediately to the client
  res.send('Command started in the background');

  // Detach the child process
  child.unref();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
