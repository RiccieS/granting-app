import { authorizedFetch } from './authorizedFetch';

/**
 * Funkce, která vytváří JSON dotaz pro získání seznamu předmětů pro výběr.
 * @returns {object} - JSON dotaz.
 */
export const SubjectSelectQueryJSON = () => ({
  "query":
    `query {
            acsemesterPage {
                subject {
                  id
                  name
                  semesters {
                    id
                    order
                  }
                }
              }
        }`
});

/**
 * Realizuje dotaz na server. Využívá funkci authorizedFetch pro komunikaci se serverem.
 * @returns {Promise<Response>} - Promise reprezentující odpověď ze serveru.
 */
export const SubjectSelectQuery = () =>
  authorizedFetch('/gql', {
    body: JSON.stringify(SubjectSelectQueryJSON()),
  });
