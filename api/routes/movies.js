const Movie = require("../models/Movie");
const router = require("express").Router();
const verify = require("../verifyToken");


//CREATE
router.post("/", verify, async(req,res)=>{
    if(req.user.isAdmin){
        const newMovie = new Movie(req.body)
        
        try{
            const savedMovie = await newMovie.save();
            return res.status(201).json(savedMovie);
        }catch(err){
            return res.status(500).json(err);
        }
        
    } else{
        return res.status(403).json("You are not allowed to post movie")
    }
});

//UPDATE
router.put("/:id", verify, async(req,res)=>{
    if(req.user.isAdmin){
        
        try{
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id,
                {
                    $set: req.body
                },{new: true}
            )
            return res.status(200).json(updatedMovie);
        }catch(err){
            return res.status(500).json(err);
        }
        
    } else{
        return res.status(403).json("You are not allowed to post movie")
    }
});

//DELETE
router.delete("/:id", verify, async(req,res)=>{
    if(req.user.isAdmin){
        
        try{
            await Movie.findByIdAndDelete(req.params.id)
            return res.status(200).json("Movie is deleted");
        }catch(err){
            return res.status(500).json(err);
        }
        
    } else{
        return res.status(403).json("You are not allowed to post movie")
    }
});

//GET
router.get("/find/:id", verify, async(req,res)=>{
        
    try{
        const movie = await Movie.findById(req.params.id)
        return res.status(200).json(movie);
    }catch(err){
        return res.status(500).json(err);
    }  
});

//GET RANDOM 
router.get("/random", verify, async(req,res)=>{
    
    const type = req.query.type;
    let movie;
    try{
        if(type === "series"){
            movie = await Movie.aggregate([
                {$match: {isSeries: true}},
                {$sample: {size: 1}}
            ])
        }else{
            movie = await Movie.aggregate([
                {$match: {isSeries: false}},
                {$sample: {size: 1}}
            ])
        }
        return res.status(200).json(movie);
    }catch(err){
        return res.status(500).json(err);
    }  
});


//GET ALL 
router.get("/", verify, async(req,res)=>{
    if(req.user.isAdmin){
        
        try{
            const movies = await Movie.find()
            return res.status(200).json(movies.reverse());
        }catch(err){
            return res.status(500).json(err);
        }
        
    } else{
        return res.status(403).json("You are not allowed")
    }
});


module.exports = router;