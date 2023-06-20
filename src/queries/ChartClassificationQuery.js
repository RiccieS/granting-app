import { authorizedFetch } from './authorizedFetch'

//klasifikace pro budouci trideni podle studijnich programu

export const ChartClassificationQueryJSON = () => ({
  "query":
    `query {
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
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 */
export const ChartClassificationQuery = () =>
  authorizedFetch('/gql', {
    body: JSON.stringify(ChartClassificationQueryJSON()),
  })