var mongoose = require("mongoose");
mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb://localhost/cat_app", { useNewUrlParser: true });
mongoose.createConnection("mongodb://localhost/cat_app", { useNewUrlParser: true });


var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

Cat.create({
    name:"Snow white",
    age: 15,
    temperament: "nice"
},function(err, cat){
    if (err){
        console.log(err);
    } else{
        console.log(cat);
    }
});
Cat.find({}, function(err){
    if (err){
        console.log("oh no");
        console.log(err);
    } else{
        console.log("all the cats");
        // console.log(cats);
    }
});