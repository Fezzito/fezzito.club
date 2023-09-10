import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function Page() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">
        <Link href={"/work"}>Works</Link>
      </Button>
      <Button variant="contained">
        <Link href={"/about"}> About</Link>
      </Button>
    </Stack>
  );
}
