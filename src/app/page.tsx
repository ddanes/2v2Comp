"use client";
import { useEffect, useState } from "react";
import { FakeEvent } from "./types/types";
import generateFakeEvents from "./fakerData/generateFakeData";
import RootLayout from "./layout";
import { Grid } from "@mui/material";

export default function Events() {
  const [data, setData] = useState<FakeEvent[]>([]);

  useEffect(() => {
    const loadData = generateFakeEvents(2);
    setData(loadData);
  }, []);

  console.log("data", data[1].Comments);

  //https://mui.com/material-ui/react-grid/

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <Grid>
        <Grid item>1</Grid>
        <Grid item>2</Grid>
        <Grid item>3</Grid>
        <Grid item>4</Grid>
      </Grid>
      test
    </main>
  );
}
