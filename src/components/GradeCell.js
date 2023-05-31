export const GradeCell (props) => {
    return (<td>{JSON.stringify(props)    }</td>)
}


export const GradeSemesterUserSingleRow = ({semester, user, classifications}) => {
    const filtered = classifications.filter(
        cl => cl.user.id in usersids
    )

    return (
        <tr>

        </tr>
    )
}
export const GradeSemesterUserRows = ({semester, user, classifications}) => {
    const filtered = classifications.filter(
        cl => cl.user.id in usersids
    )
    return (
        <>
        {filtered.map(
            cl => <GradeSemesterUserSingleRow classifications={fil}
        )}
        </>   )
}

export const GradeSemesterRows = (semester, userids, classifications) => {
    
    return (<>
        {filtered.map(
            cl => GradeSemesterUserRow
        )}
    </>)
}