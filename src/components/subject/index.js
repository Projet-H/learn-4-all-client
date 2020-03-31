import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

import { Subject } from "../../services/subject";
import { isEmpty } from "../../helpers/utility";
import { Card } from "../common/Card";
import { useStyles } from "./useStyles";

const ELEMENT_PER_PAGE = 7;

export const SubjectIndex = () => {
  const classes = useStyles();
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const { pathname } = useLocation();
  const firstpoint = pathname.split("/")[1];

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
    <div className={classes.root}>
      <div className={classes.class}>
        <div>
          <h2 className={classes.subtitle}>Sous-Catégorie</h2>
          <h1 className={classes.title}>Liste des matières</h1>
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
              <Card
                key={index}
                value={value}
                mainSubtitle="Nombre de problématiques"
                route={`${value.slug}/issues`}
              />
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
