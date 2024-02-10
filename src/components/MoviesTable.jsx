import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useStoreActions, useStoreState } from 'easy-peasy';

const MoviesTable = () => {
    const { data, totalPages } = useStoreState((state) => state.movies);
    const { fetch } = useStoreActions((actions) => actions.movies);
    const [rowCountState, setRowCountState] = useState(totalPages || 0);
    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: 10,
    });

    useEffect(() => {
        fetch({page: paginationModel.page});
    }, [fetch, paginationModel]);

    useEffect(() => {
        setRowCountState((prevRowCountState) =>
        totalPages !== undefined
            ? totalPages
            : prevRowCountState,
        );
      }, [totalPages, setRowCountState]);

    const columns = [
        { field: 'Title', headerName: 'Title', width: 600 },
        { field: 'Year', headerName: 'Year', width: 140 },
      ];
      
    return (
        <>
            <DataGrid
                rows={data}
                getRowId={(row) => row.imdbID}
                rowCount={rowCountState}
                columns={columns}
                pagination
                paginationModel={paginationModel}
                paginationMode="server"
                onPaginationModelChange={setPaginationModel}        
            />
        </>
    );
}

export default MoviesTable;