const router= require('express').Router()
const pool=require('../db')


router.get('/data',async(req,res)=>{
    try {
        const user= await pool.query(`SELECT * from user_data where is_active=$1`,[true])
        //Find Active user is Exist or not
        if(user.rows.length === 0){
            return res.status(402).json('NO USER')
        }
        return res.json(user.rows[0])
    } catch (error) {
        console.log(error.message)
        res.status(401).send('Server Error')
    }
})


router.delete('/delete',async(req,res)=>{
    try {
    const user= await pool.query(`UPDATE user_data set is_active=$1`,[false])
        
        //Find Active user is Exist or not
        if(user.rows.length === 0){
            return res.status(402).json('NO USER')
        }
        return res.json(data.rows[0])
    } catch (error) {
        console.log(error.message)
        res.status(401).send('Server Error')
    }
})

module.exports=router