
export const ClassificationUpdateMutation = `
mutation UpdateClassification($id: ID!, $lastchange: DateTime!, $classificationlevelId: ID!) {
  classificationUpdate(
    classification: {
      id: $id
      lastchange: $lastchange
      classificationlevelId: $classificationlevelId
    }
  ) {
    id
    msg
    classification {
      id
      lastchange
    }
  }
}
`;