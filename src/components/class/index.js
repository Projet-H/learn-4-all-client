import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

import { Class } from "../../services/class";
import { isEmpty } from "../../helpers/utility";

const ELEMENT_PER_PAGE = 8;

export const ClassIndex = () => {
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const { push } = useHistory();

  const changeCurrentPage = numPage => {
    setCurrentPage(numPage);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await Class.list();
      const dataJson = await response.json();
      return setData(dataJson);
    };
    fetchData();
  }, []);

  return !isEmpty(data) ? (
    <>
      <div>
        {data
          .slice(
            currentPage * ELEMENT_PER_PAGE - ELEMENT_PER_PAGE,
            currentPage * ELEMENT_PER_PAGE - ELEMENT_PER_PAGE + ELEMENT_PER_PAGE
          )
          .map((value, index) => (
            <div key={index} onClick={() => push(`/${value.slug}`)}>
              {value.name}
            </div>
          ))}
      </div>
      <Pagination
        current={currentPage}
        total={data.length}
        pageSize={ELEMENT_PER_PAGE}
        onChange={changeCurrentPage}
      />
    </>
  ) : (
    <div>VIDE</div>
  );
};
