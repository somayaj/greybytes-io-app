import { Injectable } from '@angular/core';

/**@Injectable({
  providedIn: 'root'
})
**/

export interface UserData {
id: string;
name: string;
progress: string;
color: string;
}

export class JobsService {

/** Constants used to fill up our data base. */
 COLORS: string[] = [
'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
'aqua', 'blue', 'navy', 'black', 'gray'
];
 NAMES: string[] = [
'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

   users = null;
  constructor() {
    // Create 100 users
    this.users = Array.from({length: 100}, (_, k) => this.createNewUser(k + 1));
  }
  getUsers()
{ return this.users;
}

 getUserById(id)
{

  var j = id.trim();
for(var i=0; i< this.users.length; i++)
   {
       var user = this.users[i];
       if (JSON.stringify(user.id) === id)
         return user;

   }
}
/** Builds and returns a new User. */
 createNewUser(id: number): UserData {
  const name = this.NAMES[Math.round(Math.random() * (this.NAMES.length - 1))] + ' ' +
      this.NAMES[Math.round(Math.random() * (this.NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: this.COLORS[Math.round(Math.random() * (this.COLORS.length - 1))]
  };
}
}