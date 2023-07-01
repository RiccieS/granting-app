import { authorizedFetch } from '../queries/authorizedFetch';

/**
 * Funkce, která vytváří JSON dotaz pro mutaci aktualizace klasifikace uživatele.
 * @param {string} id - ID klasifikace.
 * @param {string} lastchange - Poslední změna.
 * @param {string} level_id - ID úrovně klasifikace.
 * @returns {object} - JSON dotaz.
 */
export const UserClassificationMutationQueryJSON = (id, lastchange, level_id) => ({
  query: `
  mutation {
      result: classificationUpdate(classification: {
        id: "${id}",
        lastchange: "${lastchange}",
        classificationlevelId: "${level_id}"
      }) {
        id
        msg
        classification {
          user {
            id
            name
            surname
            classifications {
              id
              lastchange
              order
              semester { id, order
                subject{
                  id
                  name
                }
               }
              level { id name }
              date
            }
          }
        }
      }
    }
  `,
});

/**
 * Realizuje dotaz na server pro mutaci aktualizace klasifikace uživatele.
 * Využívá funkci authorizedFetch pro komunikaci se serverem.
 * @param {string} id - ID klasifikace.
 * @param {string} lastchange - Poslední změna.
 * @param {string} level_id - ID úrovně klasifikace.
 * @returns {Promise<Response>} - Promise reprezentující odpověď ze serveru.
 */
export const UserClassificationMutationQuery = (id, lastchange, level_id) =>
  authorizedFetch('/gql', {
    body: JSON.stringify(UserClassificationMutationQueryJSON(id, lastchange, level_id)),
  });
