const router= require('express').Router()
const pool=require('../db')


router.post('/insert_new_staff',async(req,res)=>{
    try {
        const data= req.body
        const staffEntry = await pool.query('INSERT INTO user_data(first_name,last_name,email,departments,designation,is_active) values($1,$2,$3,$4,$5,$6) RETURNING*',
            [
                data.first_name,
                data.last_name,
                data.email,
                data.department,
                data.designation,
                data.is_active
            ])
        return res.json(staffEntry.rows[0])
    } catch (error) {
        console.log(error.message)
        res.status(401).send('Server Error')
    }
})


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