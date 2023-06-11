import { authorizedFetch } from '../queries/authorizedFetch'

/**
 * Funkce, ktera id namapuje na json predstavujici "velky" (podrobny) dotaz na server
 * @param {*} id 
 * @returns 
 */
export const GradesQueryJSON = () => ({
  "query":
    `query {
      acsemesterPage{
        classifications{
          id
          order
          semester{
            id
            subject{
              id
              name
            }
          }
          level{
            id
            name
          }
          user{
            id
            email
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