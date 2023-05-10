import { Grid } from "./components/Grid";
import { Column } from "./components/Grid/Column";

function App() {
  return (
    <Grid>
      <Column cols={{ wide: 4, cu_800: 8, cu_400: 6 }}>first</Column>
      <Column cols={{ wide: 8, cu_800: 4, cu_400: 6 }}>second</Column>
    </Grid>
  );
}

export default App;
