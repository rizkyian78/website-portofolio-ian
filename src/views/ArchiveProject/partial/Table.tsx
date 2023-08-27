import { Row, Col, Typography, Table } from 'antd'
import cx from 'classnames'
import cssHeader from './Table.module.scss'
import { ColumnType } from 'antd/lib/table'
import { columns, data } from './constant'

const TableProject = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ]

  return (
    <table>
      <tr>
        {columns.map((v) => (
          <th>{v.Header()}</th>
        ))}
      </tr>
      {data.map((v) => (
        <tr>
          <td className={cx(cssHeader.year)}>{v.year}</td>
          <td className={cx(cssHeader.project)}>{v.project}</td>
          <td className={cx(cssHeader.madeAt)}>{v.madeAt}</td>
          <td>{v.builtWith}</td>
          <td style={{ width: 300 }}>{v.link}</td>
        </tr>
      ))}
    </table>
  )
}

export default TableProject
