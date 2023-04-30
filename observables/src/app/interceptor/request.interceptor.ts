import { HttpEvent, HttpEventType, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, retry } from "rxjs";

@Injectable()
export class RequestInterCeptor implements HttpInterceptor{
    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
    // }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log("Here is your request processing...")
        console.log('url',req.url)
        // const modifiedRequest = req.clone({params:new HttpParams().set('myName','malhar'),body:{SDF:"lksdjfl"}})
        // const modifiedRequest = req.clone({headers:new HttpHeaders().set("ApiKey","123123123")})
        const modifiedRequest = req.clone({setHeaders:{APIKEY : "123",MyName:"digvesh"}})
        return next.handle(modifiedRequest)
        .pipe(
            // retry(5)
            map((response)=>{
                localStorage.setItem("UserData",JSON.stringify(response))

                const x = JSON.parse(localStorage.getItem("UserData") || "")
                console.log("hello guys",x.body)
                if(response.type!=0){
                    const x = response
                    console.log("response is abc ",x)
                }   
                console.log('response is this ==>',response)
                console.log('httpEventType is this ==>',HttpEventType.Response)
                if(response.type===HttpEventType.Response){
                    console.log("Response Arrived In My Interceptor")

                    return response.clone({body:[]})
                }
               return response
            })
        )
    }



}