import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/user';

@Pipe({
  name: 'filterUser'
})
export class FilterPipe implements PipeTransform {
  transform(value: User[],filterText:string) : User[] {
    let users:User[]=[];
    return value ? value.filter((user)=>{
      return filterText==='Deactivate' ? !user.isDeleted:user.isDeleted;
    }) : users
    
  }

}
