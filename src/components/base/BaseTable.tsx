import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export interface Column<T> {
  id: keyof T;
  label: string;
  align?: "left" | "right" | "center";
  hidden: boolean;
}

interface BaseTableProps<T> {
  columns: Column<T>[];
  rows: T[];
  onRowClick?: (row: T) => void;
}

export default function BaseTable<T>({
  columns,
  rows,
  onRowClick,
}: BaseTableProps<T>) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="dynamic table">
        <TableHead>
          <TableRow>
            {columns.map(
              (column) =>
                !column.hidden && (
                  <TableCell
                    key={column.id.toString()}
                    align={column.align || "left"}
                  >
                    {column.label}
                  </TableCell>
                )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              className="hover:bg-blue-300"
              key={index}
              onClick={() => onRowClick?.(row)}
              sx={{ cursor: "pointer" }}
            >
              {columns.map(
                (column) =>
                  !column.hidden && (
                    <TableCell
                      key={column.id.toString()}
                      align={column.align || "left"}
                    >
                      {row[column.id] as React.ReactNode}
                    </TableCell>
                  )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
