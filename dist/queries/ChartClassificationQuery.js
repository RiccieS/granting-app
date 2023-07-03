import { authorizedFetch } from './authorizedFetch';

/**
 * Vytváří JSON dotaz pro získání klasifikací pro budoucí třídění podle studijních programů.
 * @returns {object} - JSON dotaz.
 */
export const ChartClassificationQueryJSON = () => ({
  "query": `query {
          acsemesterPage {
            classifications {
              id
              order
              lastchange

              semester {
                id
                order
                subject {
                  id
                  name
                  
                  program {
                    id
                    name
                  }
                }
              }
              level {
                id
                name
              }
              user{
                id
                name
                surname
                membership{
                  group{
                    id,
                    name
                  }
                }
              }
            }
          }
        }`
});

/**
 * Realizuje dotaz na server pro získání klasifikací podle studijních programů.
 * Využívá funkci authorizedFetch pro komunikaci se serverem.
 * @returns {Promise<Response>} - Promise reprezentující odpověď ze serveru.
 */
export const ChartClassificationQuery = () => authorizedFetch('/gql', {
  body: JSON.stringify(ChartClassificationQueryJSON())
});