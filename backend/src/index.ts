import express from 'express';
import sequelize from './config/db';
import router from './routers/authRouter';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './docs /swagger';

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Example API endpoint
app.get('/api/example', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.use('/api',router)

const syncDatabase = async () => {
  try {
    
    await sequelize.sync({force:false}); 
    console.log('Database synced successfully');
  } catch (error) {
    console.error('Failed to sync database:', error);
  }
};

syncDatabase();


// Start the server
const PORT = process.env.PORT || 7018;
app.listen(7018, () => {
  console.log('Server is running on port 7018');
});








