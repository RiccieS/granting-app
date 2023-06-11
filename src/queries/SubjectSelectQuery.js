import { authorizedFetch } from '../queries/authorizedFetch'

/**
 *
 *  
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
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 */
export const SubjectSelectQuery= () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(SubjectSelectQueryJSON()),
    })