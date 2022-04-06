const express = require('express');
const app = express();

const PORT = 4000;

// app.get('/',(req,res) => {
//     res.send("Hello guvi");
// });

 app.get("/", function (request,response) {
     response.send("Hello world ✨✨!!!🎄");
 });

 app.listen(PORT, () => console.log(`Server started in ${PORT}`));
// app.listen(3000);
