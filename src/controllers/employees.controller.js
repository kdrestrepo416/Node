import { pool } from '../db.js'

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT *FROM empleoyee')
        res.json(rows)
    } catch (error) {
    console.log(error)
        return res.status(500).json ({
            message: 'error',
           
        })
    }
  
}



export const getEmployee = async (req, res) => {

    try {
        const [rows] = await pool.query(' SELECT *FROM empleoyee WHERE id=? ', [req.params.id])

        if (rows.length <= 0) return res.status(404).json({
            message: 'Employee not found'
        })
        res.json(rows[0])

    } catch (error) {
        return res.status(500).json ({
            message: 'error'
        })
    }
  

}


export const createEmployees = async (req, res) => {

    try {
        const { name, salary } = req.body
        const [rows] = await pool.query('INSERT INTO empleoyee(name,salary)VALUES (?,?)', [name, salary])
        res.send({
            id: rows.insertId,
            name,
            salary,
        })
    
    } catch (error) {
        return res.status(500).json ({
            message: 'error'
        })
    }

}

export const updateEmployees = async (req, res) => {
    try {
        const { id } = req.params
        const { name, salary } = req.body
        const [result] = await pool.query('UPDATE  empleoyee  SET name = IFNULL (?,name),salary=IFNULL(?,salary )WHERE id=? ', [name, salary, id])
        if (result.affectedRows <= 0) return res.status(400).json({
            message: 'empleado no encontrado'
        })
    
        const [rows] = await pool.query('SELECT * FROM empleoyee WHERE id =?', [id])
    
        res.json(rows)
        
    } catch (error) {
        return res.status(500).json ({
            message: 'error'
        })
    }

   
}

export const deleteEmployees = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM empleoyee WHERE id= ?', [req.params.id])
        if (result.affectedRows <= 0) return res.status(400).json({
            message: 'empleado no encontrado'
        })
    
    
        res.json(result)
    } catch (error) {
        return res.status(500).json ({
            message: 'error'
        })
    }

  
}