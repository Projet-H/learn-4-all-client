import React from 'react';
import MaterialTable from 'material-table';

export const MaterialTableAdmin = () =>{

        const [state, setState] = React.useState({
            columns: [{
                

                title: 'Matière',
                field: 'matière'
            },
            {
                title: 'Nom de la personne',
                field: 'firstname'
            },

            {
                title: 'Sujet',
                field: 'Sujet'
            },
            {

            },
            ],
            data: [{
                matière: 'mathématique',
                firstname: 'Chelly',
                Sujet: "le sujet soumis "
            },
            {
                matière: 'Français',
                firstname: 'Chelly',
                Sujet: "le sujet soumis "
               
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