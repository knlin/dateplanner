import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 3001; // Use 3001 to avoid conflict with React dev server

app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Enable parsing of JSON bodies

app.get('/api', (req: Request, res: Response) => {
  res.send('Hello from DatePlanner Backend!');
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});