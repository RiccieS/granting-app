export const SemesterClassificationsTable = ({semester}) => {
    const classifications = semester?.classifications || []
    const classificationByUser = pivotmap(
        classifications, classification => [classification.user.id, classification])
    const userIndex = keyedmap(
        classifications, classification => [classification.user.id, classification.user]
    )
    return (
        <Table>
            <thead>
                <tr>
                    <td>user</td>
                    <td>1.</td>
                    <td>2.</td>
                    <td>3.</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {Object.entries(classificationByUser).map(
                    ([userId, clist]) => <UserClassificationsRow key={userId} classifications={classifications}><td>{userIndex[userId].email}</td></UserClassificationsRow>
                )}                
            </tbody>
        </Table>
    )
};
export default SemesterClassificationsTable;