<?php
require_once "./Dao/UsuarioDAO.php";
/***********************************************USUARIO Service****************************************/
/*AQU� LLAMAMOS AL DAO Y DEVOLVEMOS AL CLIENTE MEDIANTE ECHO*/
/*HABRA� QUE CONFIGURAR AQUI LOS CODIGOS DE ERROR*/
class UsuarioService {
	public static function getUsuarios () {
		$dataArray = UsuarioDAO::getUsuarios();
		echo json_encode($dataArray);
	}
	public static function getUsuarioById ($id) {

		$dataArray = UsuarioDAO::getUsuarioById($id);
		echo json_encode($dataArray);
	}

}
?>