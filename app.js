const express = require("express");
 require("./db/conn");
 const Hotel_owner  = require("./models/Hotels_owner");
 const Property  = require("./models/Hotels");
 const Social = require("./models/Socials");
 const app = express();
 const PORT = process.env.PORT || 7000;
 app.use(express.json());



//Social media
app.post('/social',(req,res)=>{
  const sm = new Social(req.body);
  sm.save((error)=>{
    if (error){
      res.status(500).send(error);
    } else{
      res.send(sm);
    }
  });
});
//Social media
app.get('/social', (req, res) => {
  Social.find({}, (error, sm) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(sm);
    }
  });
});

//Property_hotel
app.post('/property', (req, res) => {
  const blogpost = new Property(req.body);
  blogpost.save((error) => {
      if (error) {
          res.status(500).send(error);
      } else {
          res.send(blogpost);
      }
  });
});

//Property_hotel
app.get('/property', (req, res) => {
  Property.find({}, (error, blogposts) => {
      if (error) {
          res.status(500).send(error);
      } else {
          res.send(blogposts);
      }
  });
});


//Post hotel_owner
app.post('/Hotel_owner', (req, res) => {
    const blogpost = new Hotel_owner(req.body);
    blogpost.save((error) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.send(blogpost);
      }
    });
  });


  //Get
  app.get('/Hotel_owner', (req, res) => {
    Hotel_owner.find({}, (error, blogposts) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.send(blogposts);
      }
    });
  });
  
//GEt2
//update the student by its id

 app.listen(PORT,() =>{

    console.log(`connection is setup at ${PORT}`);
 })