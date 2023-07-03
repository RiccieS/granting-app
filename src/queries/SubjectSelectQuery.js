import { authorizedFetch } from './authorizedFetch';

/**
 * Funkce vytvářející JSON dotaz pro získání seznamu předmětů pro výběr.
 * @returns {object} - JSON dotaz.
 */
export const SubjectSelectQueryJSON = () => ({
  /**
   * GraphQL dotaz pro získání předmětů.
   */
  "query":
    `query {
            acsemesterPage {
                subject {
                  id
                  name
                }
              }
        }`
});

/**
 * Provede dotaz na server. Využívá funkci authorizedFetch pro komunikaci se serverem.
 * @returns {Promise<Response>} - Promise reprezentující odpověď ze serveru.
 */
export const SubjectSelectQuery = () =>
  authorizedFetch('/gql', {
    /**
     * Tělo požadavku obsahuje JSON dotaz.
     */
    body: JSON.stringify(SubjectSelectQueryJSON()),
  });
