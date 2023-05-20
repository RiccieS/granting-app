
export const ClassificationUpdateMutation = `
  mutation ClassificationUpdate($classificationId: ID!, $levelId: ID!) {
    classificationUpdate(
      classification: {
        id: $classificationId
        lastchange: "${new Date().toISOString()}"
        classificationlevelId: $levelId
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