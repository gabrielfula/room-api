export class TaskDetailResponse {
     static serialize(data: any) {
          return {
               uuid: data.uuid,
               status: data.status,
               description: data.description,
               title: data.title,
          }
     }
}