export class TaskListResponse {
     static serialize(data: any) {
          return data.map((item: any) => {
               return {
                    uuid: item.uuid,
                    title: item.title,
                    description: item.description,
                    status: item.status,
               };
          });
     }
}
