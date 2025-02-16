import { Injectable } from '@angular/core';
// Importamos los componentes que vamos a usar
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import "rxjs/add/operator/map";

import {Observable} from "rxjs/Observable";

@Injectable()
export class MetricasService {

  constructor(private http: Http) { }

      getAllAccesos(){
      return this.http.get("http://localhost/Keyband/Desarrollo/KeybandServer/rest/estancia/accesoestancia")
                            .map(response => response.json())          
      }

      getOcupacion(id){
      return this.http.get("http://localhost/Keyband/Desarrollo/KeybandServer/rest/estancia/accesoestancia/" + id)
                            .map(response => response.json())          
      }

      getDetalles(id){
      return this.http.get("http://localhost/Keyband/Desarrollo/KeybandServer/rest/estancia/aforo/" + id)
                            .map(response => response.json())   
      }

      getNumero(){
      return this.http.get("http://localhost/Keyband/Desarrollo/KeybandServer/rest/estancia?publica=t")
                            .map(response => response.json())   
      }

      getEstancia(id){
      return this.http.get("http://localhost/Keyband/Desarrollo/KeybandServer/rest/estancia/" + id)
                            .map(response => response.json())    
      }

      getEstancias(){
      return this.http.get("http://localhost/Keyband/Desarrollo/KeybandServer/rest/estancia?publica=t")
                            .map(response => response.json())    
      }

      getTPV(){
      return this.http.get("http://localhost/Keyband/Desarrollo/KeybandServer/rest/tpv")
                            .map(response => response.json())    
      }

      getResultados(id){
        return this.http.get("http://localhost/Keyband/Desarrollo/KeybandServer/rest/ticket/tpv/" + id)
                            .map(response => response.json())  
      }

      getUsuarios(){
        return this.http.get("http://localhost/Keyband/Desarrollo/KeybandServer/rest/usuario")
                            .map(response => response.json())  
      }

      getTopProductos(){
        /*return this.http.get("http://localhost/Keyband/Desarrollo/KeybandServer/rest/producto/top")
                            .map(response => response.json())  */
      }
}
