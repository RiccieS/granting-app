import { authorizedFetch } from '../queries/authorizedFetch'

//klasifikace pro budouci trideni podle studijnich programu

export const ProgramClassificationQueryJSON = () => ({
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
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 */
export const ProgramClassificationQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(ProgramClassificationQueryJSON()),
    })