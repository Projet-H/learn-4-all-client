import React from 'react';
import MaterialTable from 'material-table';

export const MaterialTableAdmin = () =>{

        const [state, setState] = React.useState({
            columns: [{
                title: 'Matière',
                field: 'name'
            },
            {
                title: 'Nom de la personne',
                field: 'firstname'
            },

            {
                title: 'Sujet',
                field: 'Subject'
                },
              {
                  title: 'Date de creation ',
                  field: "createdAt"
              },
            ],
            data: [{
                name: 'Anglais',
                firstname: 'Buchaillat',
                Subject: "le sujet soumis 1",
                createdAt: "13 Mars 2020"
            },
            {
                name: 'Mathematique',
                firstname: 'Chelly',
                Subject: "le sujet soumis 2 ",
                createdAt: "14 Mars 2020"
               
            },
            ],
        });

        return (
            <div>
                <MaterialTable
                    title='Administrations '
                    columns={state.columns}
                    data={state.data}
                    editable={{
                        onRowAdd: newData =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    setState(prevState => {
                                        const data = [...prevState.data];
                                        data.push(newData);
                                        return {
                                            ...prevState,
                                            data
                                        };
                                    });
                                }, 600);
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    if (oldData) {
                                        setState(prevState => {
                                            const data = [...prevState.data];
                                            data[data.indexOf(oldData)] = newData;
                                            return {
                                                ...prevState,
                                                data
                                            };
                                        });
                                    }
                                }, 600);
                            }),
                        onRowDelete: oldData =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    setState(prevState => {
                                        const data = [...prevState.data];
                                        data.splice(data.indexOf(oldData), 1);
                                        return {
                                            ...prevState,
                                            data
                                        };
                                    });
                                }, 600);
                            })
                    }}
                />
            </div>
        );
    };