import { authorizedFetch } from 'queries/authorizedFetch'


export const GroupQuerySmallJSON = (id) => ({
    "query":
        `query ($id: ID!) {
            groupById(id: $id) {
                id, name, valid, lastchange
                grouptype { id, name }
                roles {
                    id, user { id, name,surname, email }
                }
                subgroups {
                    id, name, valid, lastchange, grouptype { id, name }
                }
            }
        }`,
    "variables": {"id": id}
})


export const GroupQuerySmall = (id) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(GroupQuerySmallJSON(id)),
    }) 