import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

import { Subject } from "../../services/subject";
import { isEmpty } from "../../helpers/utility";

const ELEMENT_PER_PAGE = 5;

export const SubjectIndex = () => {
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const { pathname } = useLocation();
  const firstpoint = pathname.split("/")[1];
  const { push } = useHistory();

  const changeCurrentPage = numPage => {
    setCurrentPage(numPage);
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log(`Passer le slug de la classe : ${firstpoint}`);
      const response = await Subject.list();
      const dataJson = await response.json();
      return setData(dataJson);
    };
    fetchData();
  }, [firstpoint]);

  return !isEmpty(data) ? (
    <>
      <div>
        {data
          .slice(
            currentPage * ELEMENT_PER_PAGE - ELEMENT_PER_PAGE,
            currentPage * ELEMENT_PER_PAGE - ELEMENT_PER_PAGE + ELEMENT_PER_PAGE
          )
          .map((value, index) => (
            <div key={index} onClick={() => push(`${value.slug}/issues`)}>
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
