import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import "./Pagination.css"
export default function PaginationComponent(props) {
  const { count, shape, onChange } = props;

  return (
    <Pagination count={count} shape={shape} onChange={onChange}/>
  );
}
