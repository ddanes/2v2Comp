"use client";
import { useEffect, useMemo, useState } from "react";
import { Grid } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

import { GridRowData } from "@/app/components/GridRowData";
import { FakeEvent } from "../types/types";
import testData from "./testdata.json";

export default function EventGrid() {
  const [data, setData] = useState<FakeEvent[]>([]);

  useEffect(() => {
    setData(testData);
  }, []);

  console.log(data);

  // Memoize transformed rows
  const transformedRows = useMemo(() => GridRowData(data), [data]);

  console.log(data);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Event Name", width: 150 },
    { field: "status", headerName: "Status", width: 110 },
    { field: "severity", headerName: "Severity", width: 110 },
    { field: "comments", headerName: "Comments", width: 200 },
    { field: "createdDateTime", headerName: "Created At", width: 150 },
    { field: "uploadDateTime", headerName: "Upload Date", width: 150 },
    {
      field: "evidenceDescription",
      headerName: "Evidence Description",
      width: 200,
    },
    { field: "incidentTitle", headerName: "Incident Title", width: 150 },
    {
      field: "incidentDescription",
      headerName: "Incident Description",
      width: 200,
    },
    { field: "affectedItems", headerName: "Affected Items", width: 150 },
    { field: "affectedUsers", headerName: "Affected Users", width: 150 },
    { field: "incidentDateTime", headerName: "Incident Date", width: 150 },
  ];

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={transformedRows} columns={columns} />
    </div>
  );
}
