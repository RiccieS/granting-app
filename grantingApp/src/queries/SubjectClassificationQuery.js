import { authorizedFetch } from '../queries/authorizedFetch';

/**
 * Funkce, která vytváří JSON dotaz pro získání klasifikace předmětů pro budoucí třídění podle studijního programu.
 * @returns {object} - JSON dotaz.
 */
export const SubjectClassificationQueryJSON = () => ({
  "query":
    `query {
            acsemesterPage {
              classifications {
                id
                semester {
                  id
                  order
                  subject {
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
 * Realizuje dotaz na server. Využívá funkci authorizedFetch pro komunikaci se serverem.
 * @returns {Promise<Response>} - Promise reprezentující odpověď ze serveru.
 */
export const SubjectClassificationQuery = () =>
  authorizedFetch('/gql', {
    body: JSON.stringify(SubjectClassificationQueryJSON()),
  });
