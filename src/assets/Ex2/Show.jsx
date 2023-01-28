import React from 'react'

const Show = ({ students }) => {
  return (
    <table>
      <thead>
      <tr className='labels'>
        <th>Name </th>
        <th>Prenom  </th>
        <th>Age  </th>
        <th>Filière </th>
      </tr>
      </thead>
      <tbody>
      {students.map(student => (
        <tr key={student.nom}>
          <td>{student.nom}</td>
          <td>{student.prenom}</td>
          <td>{student.age}</td>
          <td>{student.filiere}</td>
        </tr>
      ))}
      </tbody>

    </table>
  )
}

export default Show