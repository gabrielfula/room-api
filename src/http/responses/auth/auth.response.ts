export class AuthResponse {
     static serialize(data: any) {
          return {
               username: data.username
          }
     }
}