import { gql } from "@apollo/client";

export const COUNT_DATA = gql`
query CountData {
  countUsers,
  countRoles
  countSubscriptions
  countProductos
  countManuals
  countImages
  countEdificios
  countDocuments
  countComunidades
  countCompanies
  countCategories
  countBrands
  countInstalaciones
  countContactos
}`