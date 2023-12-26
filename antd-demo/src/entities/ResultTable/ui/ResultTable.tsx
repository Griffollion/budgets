import styles from './ResultTable.module.css'
import { ResultTableProps } from './ResultTable.props';

function ResultTable({ data, ...props }: ResultTableProps) {
  const renderItems = () => {
    const renderedItems: any = [];

    if (data) {
      data.forEach((value: number, key: string, map: any) => {
        renderedItems.push(<div className={styles['table-item']} key={key}>
          <div>
            {key}
          </div>
          <div>
            {value}
          </div>
        </div>);
      });
    }


    return renderedItems;
  };

  return (
    <>
    {data && <div className={styles['table']}>
      {renderItems()}
    </div> }
    </>

  );
}

export default ResultTable;