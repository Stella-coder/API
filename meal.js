const express = require("express")

const port = 400

//create a collection of meals for OOPsResturant 
const ListOfMeals= [
    {id:1, meal:"Jollof Rice and Beans"},
    {id:2, meal:"Rice and Stew"},
    {id:3, meal:"Egusi and Pounded yam"},
    {id:4, meal:"Okro and Semo"},
    {id:5, meal:"Vegetable and Eba"},
    {id:6, meal:"Plantain and Egg"},
    {id:7, meal:"Moi-Moi"},
    {id:8, meal:"isi-Ewu"}
]

const app = express()
app.use(express.json())
app.get("/", (req,res)=>{
    res.send("hello welcome to OOPsRestueant")
})
//All available meal
app.get("/api/ListOfMeals", (req,res)=>{
    res.send(ListOfMeals)
})

//to get a single meal
app.get("/api/ListOfMeals/:id", (req,res)=>{
    const aMeal = ListOfMeals.find((x)=>x.id ===parseInt(req.params.id))
    if (aMeal){
        res.send(aMeal)
    }else{
    res.status(404).send(`There is no meal with that id ${req.params.id}`)}

})

//to create a new meal
app.post("/api/ListOfMeals", (req,res)=>{

    if (!req.body.meal){
        res.send("Can't be blank, please fill")
    }else{
    const newMeal = {
        id: ListOfMeals.length + 1,
        meal: req.body.meal
    }
    ListOfMeals.push(newMeal)
    res.send(ListOfMeals)}
})

//update a ListOfMeals
app.put("/api/ListOfMeals/:id", (req,res)=>{
    const aMeal = ListOfMeals.find((x)=>x.id ===parseInt(req.params.id))
    if (aMeal){
        res.send(aMeal)
        if(!req.body.meal){
            res.send("Can't be blank, please fill")}
            else{
            aMeal.meal = req.body.meal
            res.send(ListOfMeals)
        }
    }else{
    res.status(404).send(`There is no meal with that id ${req.params.id}`)}
})

//to delete a meal
app.delete("/api/ListOfMeals/:id", (req,res)=>{
    const aMeal = ListOfMeals.find((x)=>x.id ===parseInt(req.params.id))
    if (aMeal){
        res.send(aMeal)
        
    }else{
    res.status(404).send(`There is no meal with that id ${req.params.id}`)}
    
    ListOfMeals.splice(aMeal,1)
    res.send(ListOfMeals)
   
    
    
})

app.listen(port, ()=>{
    console.log(`Server is ready to run on: ${port}`)
})