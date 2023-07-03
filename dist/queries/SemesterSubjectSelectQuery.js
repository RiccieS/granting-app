import { authorizedFetch } from './authorizedFetch';

/**
 * Funkce vytvářející JSON dotaz pro získání seznamu předmětů pro výběr se semestry.
 * @returns {object} - JSON dotaz.
 */
export const SemesterSubjectSelectQueryJSON = () => ({
  /**
   * GraphQL dotaz pro získání předmětů se semestry.
   */
  "query": `query {
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
 * Provede dotaz na server. Využívá funkci authorizedFetch pro komunikaci se serverem.
 * @returns {Promise<Response>} - Promise reprezentující odpověď ze serveru.
 */
export const SemesterSubjectSelectQuery = () => authorizedFetch('/gql', {
  /**
   * Tělo požadavku obsahuje JSON dotaz.
   */
  body: JSON.stringify(SemesterSubjectSelectQueryJSON())
});