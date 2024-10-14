import express from 'express';
import sequelize from './config/db';
import router from './routers/authRouter';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

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

app.listen(7018, () => {
  console.log('Server is running on port 7018');
});