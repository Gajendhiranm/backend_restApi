const express = require('express')
const router = express.Router();
const Post = require('../models/Model')


//Getting the posts
router.get('/',async(req,res) => {
   try{
  const posts = await Post.find();
  res.json(posts)
   }
   catch(err){
    res.json({message:err}) 
   }
})

//posting the posts
router.post('/', async (req,res) => {
   const post = new Post({
       title:req.body.title,
       description:req.body.description
   })
try{
    const savedPost = await  post.save();
    res.json(savedPost)
   
}
catch(err){
   res.json({message:err})
}
})




//getting the specific post
router.get('/:postId', async (req,res)=>{
   try{
    const post = await Post.findById(req.params.postId)
      res.json(post)
   }
   catch(err){
      res.json({message:err})
   }
})



//patch

router.patch('/:postId',async (req,res) => {
    try{
   const updatePost =await Post.updateOne(
       {_id:req.params.postId} , {
       $set : {
           title : req.body.title
       }
   })
   res.json(updatePost)
}
catch(err){
    res.json({message:err})
 }
})




//delete a specific post

router.delete('/:postId',async (req,res)=>{
    try{
        const deletedPost = await Post.remove({_id : req.params.postId})
        res.json(deletedPost)
    }
    catch(err){
        res.json({message:err})
    }
})

module.exports = router;