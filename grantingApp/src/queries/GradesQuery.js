import { authorizedFetch } from '../queries/authorizedFetch';

/**
 * Funkce, která mapuje ID na JSON představující "velký" (podrobný) dotaz na server.
 * @returns {object} - JSON dotaz.
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
 * Realizuje dotaz na server. Využívá funkci authorizedFetch pro komunikaci se serverem.
 * @returns {Promise<Response>} - Promise reprezentující odpověď ze serveru.
 */
export const GradesQuery = () =>
  authorizedFetch('/gql', {
    body: JSON.stringify(GradesQueryJSON()),
  });
