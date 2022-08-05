import React from "react";
import Button from "../Button/Button";
import { usePagination } from "../../../hooks/usePagination";
const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = usePagination(totalPages);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px",
      }}
    >
      {pagesArray.map((p) => (
        <Button
          key={p}
          style={
            page === p
              ? {
                  marginRight: 10,
                  border: "2px solid orange",
                  fontWeight: "bold",
                }
              : { marginRight: 10 }
          }
          onClick={() => {
            changePage(p);
          }}
        >
          {p}
        </Button>
      ))}
    </div>
  );
};
export default Pagination;
