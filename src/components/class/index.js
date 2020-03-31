import React, { useState, useEffect } from "react";
import Pagination from "rc-pagination";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "rc-pagination/assets/index.css";

import { Class } from "../../services/class";
import { isEmpty } from "../../helpers/utility";
import { Card } from "../common/Card";
import { CLASSNEW } from "../../helpers/route-constant";
import noDataPicture from "../../assets/images/no-data.svg";
import { useStyles } from "./useStyles";

const ELEMENT_PER_PAGE = 7;

export const ClassIndex = () => {
  const classes = useStyles();
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

  return (
    <div className={classes.root}>
      <div className={classes.class}>
        <div>
          <h2 className={classes.subtitle}>Catégorie</h2>
          <h1 className={classes.title}>Liste des classes</h1>
        </div>
        <Button
          variant="contained"
          color="primary"
          className={classes.addButton}
          onClick={() => push(CLASSNEW)}
        >
          Ajouter
        </Button>
        {!isEmpty(data) ? (
          <>
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
                    mainSubtitle="Nombre de matières"
                    route={`${value.slug}/subject`}
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
          </>
        ) : (
          <div className={classes.blocNoData}>
            <img src={noDataPicture} alt="no data" className={classes.noData} />
          </div>
        )}
      </div>
    </div>
  );
};
