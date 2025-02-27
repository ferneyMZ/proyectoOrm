const { Usuario } = require("../models");

class UsuarioServices {
    static async listarUsuarios() {
        try {
            return await Usuario.findAll();
        } catch (error) {
            console.error("Error al atraer el usuario:", error);
           
        }
    }

    static async crearUsuario(nombre, correo, contrasena) {
        try {
            return await Usuario.create({ nombre, correo, contrasena });
        } catch (error) {
            console.error("Error crear ususario");
            
        }
    }
    
    static async actualizarUsuario(id, nombre, correo, contrasena) {
        try {
            return await Usuario.update({ nombre, correo, contrasena }, { where: { id } });
        } catch (error) {
            console.error("Error al actualizar:");
            
        }
    }

    static async buscarUsuario(correo){
        try{
            return await Usuario.findOne({where:{correo}})
        }catch(e){
            console.log("error al buscar")
        }

    }
    
    static async eliminarUsuario(id) {
        try {
            await Usuario.destroy({ where: { id } });
            return "eliminado"
        } catch (error) {
            console.error("Error al eliminar usuario:");
           
        }
    }
    
}

module.exports = UsuarioServices;
