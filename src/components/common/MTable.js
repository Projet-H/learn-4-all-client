import React from "react";
import MaterialTable from "material-table";

export const MTable = props => {
  const {
    optionTable,
    data,
    totalCount,
    onChangeRowsPerPage,
    onOrderChange,
    onChangePage,
    onRowClick,
    onSearchChange
  } = props;
  return (
    <>
      <MaterialTable
        {...props}
        title={optionTable.title ? optionTable.title : ""}
        columns={optionTable.columns}
        data={data}
        totalCount={totalCount}
        onChangeRowsPerPage={onChangeRowsPerPage}
        onOrderChange={onOrderChange}
        onChangePage={onChangePage}
        onRowClick={onRowClick}
        onSearchChange={onSearchChange}
        options={{
          ...optionTable.options,
          cellStyle: {
            maxWidth: 178,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }
        }}
        localization={{
          body: {
            emptyDataSourceMessage: "Aucune donnée à afficher",
            addTooltip: "Ajouter",
            deleteTooltip: "Supprimer",
            editTooltip: "Modifier",
            filterRow: {
              filterTooltip: "Filtre"
            },
            editRow: {
              deleteText: "Voulez-vous vraiment supprimer cette ligne ?",
              cancelTooltip: "Annuler",
              saveTooltip: "Sauvegarder"
            }
          },
          grouping: { placeholder: "Glisser les en-têtes" },
          header: { actions: "Actions" },
          pagination: {
            labelDisplayedRows: "{from}-{to} de {count}",
            labelRowsSelect: "Lignes",
            labelRowsPerPage: "Lignes par page:",
            firstAriaLabel: "Première page",
            firstTooltip: "Première page",
            previousAriaLabel: "Page précédente",
            previousTooltip: "Page précédente",
            nextAriaLabel: "Page suivante",
            nextTooltip: "Page suivante",
            lastAriaLabel: "Dernière page",
            lastTooltip: "Dernière page"
          },
          toolbar: {
            addRemoveColumns: "Ajouter ou supprimer des colonnes",
            nRowsSelected: "{0} ligne(s) sélectionnée(s)",
            showColumnsTitle: "Afficher les colonnes",
            showColumnsAriaLabel: "Afficher les colonnes",
            exportTitle: "Exporter",
            exportAriaLabel: "Exporter",
            exportName: "Exporter en CSV",
            searchTooltip: "Rechercher",
            searchPlaceholder: "Rechercher"
          }
        }}
      ></MaterialTable>
    </>
  );
};
