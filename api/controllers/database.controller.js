//const { next } = require("cheerio/lib/api/traversing.js");
const { Template, Component } = require("../database.js");

const getDatabaseByProject = async(req,res,next)=>{
    try{
        if (!req.params.idProject)
            throw new Error("idProject is required") 
        const project = await Template.findByPk(req.params.idProject)

        if(!project)
            throw new Error("Project not found")
        res.send(project.databases)
    }catch(error){
        return next(error)
    }
}

//const getDatabasesAllProjects = async(req,res)

const postDatabaseToProject = async (req,res,next)=>{
    try{
        const {idProject}=req.params
        if (!idProject)
            throw new Error("idProject is required") 
        
        const {databases} = req.body;

        if(!databases)
            throw new Error("Databases are required")

        const project = await Template.update({
            databases
        },{
            where:{
                id:idProject
            }
        })
        if(!project)
            throw new Error("Project not found")
        res.send('ok')
    }catch(error){
        return next(error)
    }
}

const deleteDatabasesToProjects = async (req,res)=>{
    try{
        const {idProject} = req.params
        if (!idProject)
            throw new Error("idProject is required") 
        
        const project = await Template.update({
            databases:[]
        },{
            where:{
                id:idProject
            }
        })
        if(!project)
            throw new Error("Project not found")
        res.send(project)
    }catch(error){
        return next(error)
    }
}



module.exports={
    getDatabaseByProject,
    postDatabaseToProject,
    deleteDatabasesToProjects
}