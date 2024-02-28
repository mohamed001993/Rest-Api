const mongoose= require ('mongoose')
const connectdb= async () => {
    try {
    await mongoose.connect(process.env.URI)
     
    console.log("db is connected")
    mongoose.set("strictQuery",true)
    } catch (error) {
        console.log(error)
        
    }

};

module.exports= connectdb