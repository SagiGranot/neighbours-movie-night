import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useStoreActions, useStoreState } from '../data/hooks';

const MoviesTable = () => {
    const { data, total, filters, isLoading } = useStoreState((state) => state.movies);
    const { fetch, setFilters } = useStoreActions((actions) => actions.movies);
    const [rowCountState, setRowCountState] = useState(total || 0);

    useEffect(() => {
        fetch({
            ...filters,
        });
    }, [fetch, filters]);

    useEffect(() => {
        setRowCountState((prevRowCountState: any) =>
        total !== undefined
            ? total
            : prevRowCountState,
        );
      }, [total, setRowCountState]);

    const columns = [
        { field: 'Title', headerName: 'Title', width: 650,  headerClassName: 'column-header'},
        { field: 'Year', headerName: 'Year', width: 140, headerClassName: 'column-header'},
      ];
      
    return (
        <Box
            sx={{
                width: columns.reduce((acc, curr) => acc + curr.width, 0),
                '& .column-header': {
                    backgroundColor: 'lightgrey',
                },
            }}
        >
            <DataGrid
                rows={data}
                getRowId={(row) => row.imdbID}
                rowCount={rowCountState}
                columns={columns}
                loading={isLoading}
                pagination
                paginationModel={{ page: filters.page, pageSize: 10 }}
                paginationMode="server"
                onPaginationModelChange={(model, details) => {
                    setFilters({ page: model.page, Title: filters.Title });
                }}
                rowSelection={false}
                disableColumnMenu
            />
        </Box>
    );
}

export default MoviesTable;