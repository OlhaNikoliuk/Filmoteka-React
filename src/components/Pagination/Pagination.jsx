import ReactPaginate from 'react-paginate';
import style from '../Pagination/Pagination.module.css'
import {GrFormPrevious, GrFormNext} from 'react-icons/gr'


function Pagination({pages, onPageClick}) {

  return (
    <div className={style.commentBox}>
      
      <ReactPaginate
        previousLabel={<GrFormPrevious size='20'/>}
        nextLabel={<GrFormNext size='20'/>}
        breakLabel={'...'}
        breakClassName={style.breakMe}
        pageCount={pages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageClick}
        containerClassName={style.pagination}
        activeClassName={style.active}
      />
    </div>
  );
}

export default Pagination;