import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import { UserService } from '../Service/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('user')!= null){
    return true;
  }
  else{
  
    return false;
  }
  
};

// export class AuthGuard{
//   constructor(private service: UserService, private route: Router){}
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     if(this.service.isLoggedIn()){
//       return true
//     }
//     else{
//       this.route.navigate(['login'])
//       return false; 
//     }
    
// }

// }