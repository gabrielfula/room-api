import { EStatus } from "@prisma/client";

export const formatStatus = (status: EStatus) => {
     switch (status) {
          case "COMPLETED":
               return "Completo"
          case "DELETED":
               return "Deletado"
          case "PENDING":
               return "Pendente"
     }
}