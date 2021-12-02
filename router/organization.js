const express = require('express')
const mongoose = require('mongoose');
const organization_sch = mongoose.model('ORGANIZATION')
const router = express.Router();
const port = 3000

router.get('/organization',async(req, res) =>{
    try{
        const mentor_sch = await organization_sch.find({});
        res.json(mentor_sch);
    }
    catch(err){
        console.log(err.message);
        res.status(500).send('Server end');
    }
});
router.post('/organization', async(req, res)=>{
  const post_data = new organization_sch(req.body)
  post_data.save().then(item => {
      res.send("item saved to data base");
  })
  .catch(err => {
       res.status(400).send("unable to reach :(")
  })
});



module.exports= router;