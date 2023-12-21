//const express  = require('express') old new we can import in EA6

import express from 'express';

const app = express();

const PORT = 8000;


app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));