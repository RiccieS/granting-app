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
                  name
                  semesters {
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