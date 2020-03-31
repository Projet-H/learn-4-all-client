import React, { useState, useEffect } from "react";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

import { Class } from "../../services/class";
import { isEmpty } from "../../helpers/utility";
import { Card } from "../common/Card";
import { useStyles } from "./useStyles";

const ELEMENT_PER_PAGE = 8;

export const ClassIndex = () => {
  const classes = useStyles();
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

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
    <div className={classes.root}>
      <div className={classes.class}>
        <div>
          <h2 className={classes.subtitle}>Catégorie</h2>
          <h1 className={classes.title}>Liste des classes</h1>
        </div>
        <div className={classes.list}>
          {data
            .slice(
              currentPage * ELEMENT_PER_PAGE - ELEMENT_PER_PAGE,
              currentPage * ELEMENT_PER_PAGE -
                ELEMENT_PER_PAGE +
                ELEMENT_PER_PAGE
            )
            .map((value, index) => (
              <Card key={index} value={value} />
            ))}
        </div>
        <Pagination
          current={currentPage}
          total={data.length}
          pageSize={ELEMENT_PER_PAGE}
          onChange={changeCurrentPage}
          className={classes.pagination}
        />
      </div>
    </div>
  ) : (
    <div>VIDE</div>
  );
};
