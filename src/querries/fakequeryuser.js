
export const SingleUser = {
    "id": "fc75cc8a-ac36-11ed-9bd8-0242ac110002",
    "name": "John",
    "surname": "Storyteller",
    "email": "john.storyteller@somewhere.else",
    "lastchange": "2023-02-14T07:12:48.214346",
    "externalIds": [
        {
            "typeName": "UCO",
            "outerId": "df45a37"
        }
    ],
    "membership": [
      
    ],
    "roles": [
        {
            "id": "58c0987e-ac3e-11ed-9bd8-0242ac110002",
            "roletype": {
                "id": "ae3f0d74-6159-11ed-b753-0242ac120003",
                "name": "rektor"
            },
            "group": {
                "id": "21bb312e-ac37-11ed-9bd8-0242ac110002",
                "name": "UoT",
                "grouptype": {
                    "id": "cd49e152-610c-11ed-9f29-001a7dda7110",
                    "name": "univerzita",
                    "nameEn": "university"
                }
            }
        }
    ]
}

export const fakeQueryUser = async (id) => ({json: () => SingleUser})