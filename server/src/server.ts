import app from './app';
const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("Express server3 listening on posrt"+ PORT);
})