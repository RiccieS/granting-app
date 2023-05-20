import { authorizedFetch } from '../queries/authorizedFetch'

/**
 * 
 * @param {*} id 
 * @returns 
 */
export const GradesLevelsQueryJSON = () => ({
  "query":
    `query {
        acclassificationPage {
            level {
              id
              name
            }
          }        
}`
});


/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @param {*} id 
 * @returns 
 */
export const GradesLevelsQuery = () =>
  authorizedFetch('/gql', {
    body: JSON.stringify(GradesLevelsQueryJSON()),
  })