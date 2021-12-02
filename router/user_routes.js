const express = require('express')
const mongoose = require('mongoose')

const  User_model =  mongoose.model('USER_POST')


const router = express.Router();

router.get('/user',async (req,res) => {

    try{
        const user_get = await User_model.find({});
        res.json(user_get)
    }catch(err) {
        console.log(err.message)
        res.status(500).send('Server Error')
    }

});


router.post('/user',async(req,res) => {
  try{
    const post_user = await User_model(req.body);
    post_user.save().then(user_item => {
        res.send("items saved in data based")
    })
    res.json(post_user)
  }catch(err){

    res.send(err.message);

  }
})


module.exports = router