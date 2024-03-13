import { Pagination, Stack } from "@mui/material";
import "./paginationRounded.css";
import { useState } from "react";

export default function PaginationRounded() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Stack spacing={4}>
      <Pagination
        variant="outlined"
        shape="rounded"
        showFirstButton
        showLastButton
        count={3}
        page={currentPage}
        onChange={handleChange}
        size="small"
      />
    </Stack>
  );
}
