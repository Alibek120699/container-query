import { Grid } from "./components/Grid";
import { Column } from "./components/Grid/Column";

function App() {
  return (
    <Grid>
      <Column cols={{ wide: 4, "cu-800": 8, "cu-400": 6 }}>first</Column>
      <Column cols={{ wide: 8, "cu-800": 4, "cu-400": 6 }}>second</Column>
    </Grid>
  );
}

export default App;
