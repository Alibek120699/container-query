import { Grid } from "./components/Grid";
import { Column } from "./components/Grid/Column";
import { Text } from "./components/Text";

function App() {
  return (
    <>
      <Grid>
        <Column cols={{ wide: 4, "cu-800": 8, "cu-400": 6 }}>first</Column>
        <Column cols={{ wide: 8, "cu-800": 4, "cu-400": 6 }}>second</Column>
      </Grid>

      <div
        style={{
          background: "gray",
          marginTop: 100,
          resize: "both",
          overflow: "auto",
        }}
      >
        <Text>Without container</Text>
        <Text withContainer>With container</Text>
      </div>
    </>
  );
}

export default App;
