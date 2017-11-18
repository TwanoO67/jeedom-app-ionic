import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class JeedomService {
    public headers: HttpHeaders;
    public api_url = '';//http://192.168.0.23';
    public api_key = '';//'KLBV1d4WblTg7vIMkGcRvswpQpXdi1NZ';

    private full_data: ReplaySubject<any>;

    constructor(
      private http: HttpClient,
      private storage: Storage
    ) {
        this.headers = new HttpHeaders();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.storage.get('api_url').then((val) => {
          this.api_url = val;
        });
        this.storage.get('api_key').then((val) => {
          this.api_key = val;
        });
        this.full_data = new ReplaySubject(1);
    }

    private getActionUrl() {
      // return this.serverWithApiUrl;
      return this.api_url+"/core/api/jeeApi.php?apikey="+this.api_key;
    }

    public getFullData() {
        // provoque recuperation
        this.http.get(this.getActionUrl()+'&type=fullData', { headers: this.headers }).subscribe((data) => {
          this.full_data.next(data);
        });

        return this.full_data;
    }

    public scenario(id, action) {
        return this.http.get(this.getActionUrl()+'&type=&type=scenario&id='+id+'&action='+action, { headers: this.headers });
    }

    public action(id) {
        return this.http.get(this.getActionUrl()+'&type=cmd&id='+id, { headers: this.headers });
    }

    /*
    query : question à poser à jeedom
    utf8 [optionnel] : indique à jeedom si il faut encoder query en utf8 avant de chercher à répondre
    emptyReply [optionnel] : 0 pour que jeedom réponde même si il n’a pas compris, 1 sinon
    profile [optionnel] : nom d’utilisateur de la personne déclenchant l’interaction
    reply_cmd [optionnel] : ID de la commande à utiliser pour répondre à la demande
    */
    public interaction(query , utf8?, emptyReply?, profile?, reply_cmd?) {
        let url = this.getActionUrl()+'&type=interact&query='+query;
        if(utf8){
            url += "utf8="+utf8;
        }
        if(emptyReply){
            url += "emptyReply="+emptyReply;
        }
        if(profile){
            url += "profile="+profile;
        }
        if(reply_cmd){
            url += "reply_cmd="+reply_cmd;
        }
        return this.http.get(url, { headers: this.headers });
    }

   /*
   category : catégorie du message à ajouter au centre de message
    message : message en question, attention à bien penser à encoder le message (espace devient %20, = %3D…
    */
    public message(category, message) {
        return this.http.get(this.getActionUrl()+'&type=message&category='+category+'&message='+message, { headers: this.headers });
    }

    public getAllObject(){
        return this.http.get(this.getActionUrl()+'&type=object', { headers: this.headers });
    }

    public getEquipments(object_id){
        return this.http.get(this.getActionUrl()+'&type=eqLogic&object_id='+object_id, { headers: this.headers });
    }

    public getCommands(equipment_id){
        return this.http.get(this.getActionUrl()+'&type=command&eqLogic_id='+equipment_id, { headers: this.headers });
    }

}
