//src/app/data.services.ts

import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { employeeListMockData } from './employees/employees.mock';
import { RequestInfo } from 'angular-in-memory-web-api'
import { Request, Response } from 'express';

@Injectable({
    providedIn: 'root'
})
export class DataService implements InMemoryDbService {
    constructor() { }
    createDb() {
        return {
            employees: employeeListMockData           
            
        };
    }
    // // HTTP POST interceptor
    // post(reqInfo: RequestInfo) {
        
    //     // if client pinged api/authentication
    //     //  then call authenticate (defined below)
    //     if (reqInfo.collectionName === 'authentication')
    //         return this.authenticate(reqInfo)
        
    //     //  otherwise default response of In-memory DB
    //     return undefined
    // }

    // // mocking authentication happens here
    // // HTTP POST interceptor handler
    // private authenticate(reqInfo: RequestInfo) {
    
    //     // return an Observable response
    //     return reqInfo.utils.createResponse$(() => {
    //         console.log('HTTP POST api/authentication override')

    //         const { headers, url, req } = reqInfo

    //         // if request username and passord are correct
    //         //  return response with a JSONWebToken
    //         const { username, password } = req['body']
    //         if (username === 'admin' && password === 'admin')
    //             return { 
    //               status: 200, 
    //               headers, // reqInfo (line 30)
    //               url, // reqInfo (line 30)
    //               body: { 
    //                 token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    //               } 
    //             }

    //         //  otherwise return response with status code 401 (unauthorized)
    //         return { 
    //           status: 401, 
    //           headers, 
    //           url, 
    //           body: { } 
    //         }
    //     })
    // }

}