import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  user:     {   type: String, 
                required: true, 
                unique: true 
            },
  pass:     {   type: String, 
                required: true 
            },
  rol:      {   type: String, 
                default: 'user' 
            },
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);
