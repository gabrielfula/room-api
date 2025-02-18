import { formatStatus } from "../../helpers/status";

export class TaskDetailResponse {
     static serialize(data: any) {
          return {
               uuid: data.uuid,
               status: formatStatus(data.status),
               description: data.description,
               title: data.title,
          }
     }
}