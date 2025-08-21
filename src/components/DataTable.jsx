import React, { useState } from "react";
import styles from "./table.module.css";

const DataTable = ({ data }) => {
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const totalPages = Math.ceil(data.length / pageSize);
  const start = (page - 1) * pageSize;
  const currentRows = data.slice(start, start + pageSize);

  // Get all keys from first row → dynamic columns
  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  // Pagination number generator
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (page > 3) pages.push("...");
      for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) {
        pages.push(i);
      }
      if (page < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            {columns.map((col) => (
              <th key={col} className={styles.th}>
                {col.charAt(0).toUpperCase() + col.slice(1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, idx) => (
            <tr key={idx} className={styles.tr}>
              {columns.map((col) => (
                <td key={col} className={styles.td}>
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className={styles.pagination}>
        <div>
          Showing {start + 1} to {Math.min(start + pageSize, data.length)} of {data.length} entries
        </div>
        <div className={styles.pageButtons}>
          <button
            className={styles.pageButton}
            onClick={() => setPage(1)}
            disabled={page === 1}
          >
            {"<<"}
          </button>
          <button
            className={styles.pageButton}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            {"<"}
          </button>

          {getPageNumbers().map((p, idx) =>
            p === "..." ? (
              <span key={idx} className={styles.pageButton}>...</span>
            ) : (
              <button
                key={idx}
                className={`${styles.pageButton} ${p === page ? styles.pageButtonActive : ""}`}
                onClick={() => setPage(p)}
              >
                {p}
              </button>
            )
          )}

          <button
            className={styles.pageButton}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            {">"}
          </button>
          <button
            className={styles.pageButton}
            onClick={() => setPage(totalPages)}
            disabled={page === totalPages}
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
