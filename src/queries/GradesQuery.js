import { authorizedFetch } from '../queries/authorizedFetch'

/**
 * Funkce, ktera id namapuje na json predstavujici "velky" (podrobny) dotaz na server
 * @param {*} id 
 * @returns 
 */
export const GradesQueryJSON = () => ({
  "query":
    `query {
      acclassificationPage{
          id
          user{
            id
            name
          }
          semester{
            id
            order
            classifications{
              level{
                name
              }
            }
            subject{
              name
              id
              semesters{
                order 
              }
            }
          }
      }         
}`
});


/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @param {*} id 
 * @returns 
 */
export const GradesQuery = () =>
  authorizedFetch('/gql', {
    body: JSON.stringify(GradesQueryJSON()),
  })