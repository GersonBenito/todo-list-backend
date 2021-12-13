const { response } = require("express");
const Todo = require('../schemas/todo');

const addTodo = async(req, res = response) =>{
    try {

        const data = req.body;
        const { title } = req.body;

        const existe = await Todo.findOne({title: title});
        if(existe){
            return res.status(302).json({
                status: 302,
                data: existe,
                message: 'Ya existe una tarea con ese titulo'
            });
        }

        const todo = new Todo(data);
        await todo.save();

        return res.status(200).json({
            status: 200,
            data: todo,
            message: 'Tarea agregado correctamente'
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            status: 400,
            message: 'Ocurrio un error al intentar agregar una tarea'
        });
    }
}

const getTodos = async(req, res = response) =>{
    try {

        const todos = await Todo.find();

        return res.status(200).json({
            status: 200,
            data: todos,
            message: 'Tareas obtenido correctamente'
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            status: 400,
            message: 'Ocurrio un error al intentar obtener las tareas'
        });
    }
}

const updateTodo = async(req, res = response) =>{
    try {

        const uid = req.params.id;
        const data = req.body;

        const existe = await Todo.findById(uid);
        if(!existe){
            return res.status(404).json({
                status: 404,
                message: 'La tarea que se intenta actualizar no existe'
            });
        }
        
        await Todo.updateOne({_id: uid}, data);

        return res.status(200).json({
            status: 200,
            message: 'Tarea actualizado correctamente'
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            status: 400,
            message: 'Ocurrio un error al intentar actualizar la tarea'
        });
    }
}

const deleteTodo = async(req, res = response) =>{
    try {

        const uid = req.params.id;

        const existe = await Todo.findById(uid);
        if(!existe){
            return res.status(404).json({
                status: 404, 
                message: 'La tarea que se intenta eliminar no existe'
            });
        }

        await Todo.deleteOne({_id: uid});

        return res.status(200).json({
            status: 200,
            message: 'Tarea eliminado correctamente'
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            status: 400,
            message: 'Ocurrio un error al intentar eliminar la tarea'
        });
    }
}

module.exports = {
    addTodo,
    getTodos,
    updateTodo,
    deleteTodo
}