function Pagination({onChange,current,totalPage}) {
  const prev = <button disabled={current==1} data-testid="prev-page" onClick={()=>onChange(current-1)}>PREV</button>;
  const currentPage = <button data-testid="current-page">{current}</button>;
  const next = <button disabled={totalPage==current} data-testid="next-page" onClick={()=>onChange(current+1)}>NEXT</button>;
  const totalPagesElem = (
    <div>
      Total Pages: <b data-testid="total-pages">{totalPage}</b>{" "}
    </div>
  );
  return (
    <div data-testid="pagination-container">
      {prev}
      {currentPage}
      {next}
      {totalPagesElem}
    </div>
  );
}

export default Pagination;
