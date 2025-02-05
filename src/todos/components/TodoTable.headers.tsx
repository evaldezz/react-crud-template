import { GridColDef, GridRenderCellParams, GridValueGetterParams } from "@mui/x-data-grid";
import DeleteButton from "../../mui/DeleteButton";
import EditButton from "../../mui/EditButton";
import { Todo } from "../interface/todo";

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    headerAlign: 'center',
    align: 'center',
    width: 90,
    type: 'number',
  },
  {
    field: 'userId',
    headerName: 'Usuario Id',
    headerAlign: 'center',
    align: 'center',
    width: 150,
    type: 'number',
  },
  {
    field: 'title',
    headerName: 'Titulo',
    headerAlign: 'center',
    align: 'center',
    width: 200,
    flex: 1,
  },
  {
    field: 'completed',
    headerName: 'Completado',
    headerAlign: 'center',
    width: 150,
    align: 'center',
    valueGetter: (params: GridValueGetterParams<Todo,Todo>) => params.row.completed  ? 'SI' : 'NO'
  },
  {
    field: 'accion',
    headerName: 'Acciones',
    headerAlign: 'center',
    align: 'center',
    sortable: false,
    width: 100,
    renderCell: (params: GridRenderCellParams<Todo, Todo>) => (
      <>
        <EditButton to={`${params.row.id}`} />
        <DeleteButton />
      </>
    ),
  },
];
export default columns;