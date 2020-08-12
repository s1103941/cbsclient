import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'




@Injectable()
export class ApiService
{

    constructor(private httpclient: HttpClient){}

    getOmzet(): Observable<any>
    {
        return this.httpclient.get("https://jsonplaceholder.typicode.com/posts/1/comments")
    }

    getOpgaves(companyName) : Observable<any>
    {
        
        return this.httpclient.get("https://localhost:44311/bedrijfsomzet/"+companyName)
    }

    getGemiddeldeOmzet(id) : Observable<any>
    {
        
        return this.httpclient.get("https://localhost:44311/api/gemiddelde-omzet/"+id.toString())

    }

}