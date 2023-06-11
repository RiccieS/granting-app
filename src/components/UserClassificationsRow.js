import UserClassificationCell from "./UserClassificationCell"
export const UserClassificationsRow = ({classifications, children, cols=5}) => {
  const sorted = [...classifications].sort((c1, c2) => c1.order - c2.order)
  const dummy = new Array(cols - 1 - sorted.length).fill('')

  return (
      <tr>
          {children}

          {sorted.map(
            
              classification => <UserClassificationCell key={classification.id} classification={classification} />
          )}
          {dummy.map(
              (i, index) => (<td key={index}></td>)
          )}
      </tr>
  )};
export default UserClassificationsRow;