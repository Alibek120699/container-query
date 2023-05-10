import { firstColumnStyles, secondColumnStyles } from "./App.css";
import { Grid } from "./components/Grid";
import { Column } from "./components/Grid/Column";

function App() {
  return (
    <Grid>
      <Column className={firstColumnStyles}>first</Column>
      <Column className={secondColumnStyles}>second</Column>
    </Grid>
  );
}

export default App;
