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
          }
        	semester{
            order
            subject{
               name
            }
          }
        	lastchange
        	level{
            name
          }
        	       
      }}`
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