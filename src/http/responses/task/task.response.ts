import { formatStatus } from "../../../helpers/status";

export class TaskListResponse {
     static serialize(data: any) {
          return data.map((item: any) => {
               return {
                    uuid: item.uuid,
                    title: item.title,
                    description: item.description,
                    status: formatStatus(item.status),
               };
          });
     }
}
