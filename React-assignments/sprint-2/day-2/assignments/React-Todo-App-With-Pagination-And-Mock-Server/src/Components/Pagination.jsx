function Pagination({setPage,page,totalBtn}) {
  return (
    <div data-testid="pagination">
      {/* add PREVIOUS button and div with current page number and NEXT button */}
      <button disabled={page===1} onClick={()=>setPage(page-1)}>PREVIOUS</button><div>{page}</div><button disabled={totalBtn===page} onClick={()=>setPage(page+1)}>NEXT</button>
    </div>
  );
}

export default Pagination;
